import Anthropic from '@anthropic-ai/sdk';
import type { VibeType } from '../data/perfumes';

export interface AnalysisResult {
  vibe: VibeType;
  confidence: number;
  reasoning: string;
}

export async function analyzeImage(imageBase64: string, apiKey: string): Promise<AnalysisResult> {
  const anthropic = new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // 프로덕션에서는 백엔드에서 처리해야 합니다
  });

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: 'image/jpeg',
              data: imageBase64,
            },
          },
          {
            type: 'text',
            text: `이 사진 속 인물의 분위기를 분석해서 아래 5가지 중 하나로 분류해주세요:

1. elegant - 우아하고 클래식한 (성숙하고 세련된 이미지, 정돈된 느낌, 모노톤/테일러드 패션)
2. sporty - 스포티하고 활동적인 (밝고 건강한 이미지, 캐주얼한 패션, 역동적인 느낌)
3. romantic - 로맨틱하고 부드러운 (부드럽고 여성스러운/중성적 매력, 플로럴 패션, 부드러운 라인)
4. modern - 모던하고 독특한 (개성 있고 트렌디한 이미지, 믹스매치 패션, 유니크한 스타일)
5. intense - 시크하고 강렬한 (카리스마 있고 강인한 이미지, 올블랙 패션, 당당한 느낌)

분석 기준:
- 얼굴 표정과 분위기
- 체형과 자세
- 패션 스타일
- 전체적인 이미지

응답은 반드시 다음 JSON 형식으로만 답변해주세요:
{
  "vibe": "elegant" | "sporty" | "romantic" | "modern" | "intense",
  "confidence": 0.0~1.0 사이의 숫자,
  "reasoning": "분석 이유를 한국어로 2-3문장"
}`
          }
        ],
      },
    ],
  });

  // Claude의 응답에서 JSON 추출
  const textContent = message.content[0];
  if (textContent.type !== 'text') {
    throw new Error('Unexpected response type from Claude');
  }

  // JSON 파싱
  const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse JSON from Claude response');
  }

  const result = JSON.parse(jsonMatch[0]) as AnalysisResult;
  return result;
}

export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      // data:image/jpeg;base64, 부분 제거
      const base64Data = base64.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
