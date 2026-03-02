import type { VercelRequest, VercelResponse } from '@vercel/node';
import Anthropic from '@anthropic-ai/sdk';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { perfumeName } = req.body;

    if (!perfumeName || typeof perfumeName !== 'string' || perfumeName.trim() === '') {
      return res.status(400).json({ error: '향수 이름이 필요합니다.' });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: '서버 API 키가 설정되지 않았습니다.' });
    }

    const anthropic = new Anthropic({ apiKey });

    const message = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: `향수 "${perfumeName.trim()}"에 대한 정보를 아래 JSON 형식으로 정확하게 제공해주세요. 실제 향수 정보를 기반으로 답변하되, 모르는 향수라면 notFound: true를 반환하세요.

반드시 아래 JSON 형식만 반환하세요 (마크다운 코드블록 없이):
{
  "notFound": false,
  "name": "정식 향수 이름",
  "brand": "브랜드명",
  "topNotes": [
    { "name": "향료명", "description": "이 향료의 특징과 역할 (1~2문장)" }
  ],
  "middleNotes": [
    { "name": "향료명", "description": "이 향료의 특징과 역할 (1~2문장)" }
  ],
  "baseNotes": [
    { "name": "향료명", "description": "이 향료의 특징과 역할 (1~2문장)" }
  ],
  "characteristics": {
    "summary": "향수 전체 특징 요약 (3~4문장)",
    "sillage": "가벼움 | 보통 | 강함 | 매우 강함",
    "longevity": "2~4시간 | 4~6시간 | 6~8시간 | 8시간 이상",
    "family": "향수 계열 (예: 플로럴 우디, 오리엔탈 앰버 등)"
  },
  "suitability": {
    "personality": ["어울리는 성격/사람 유형 (3~5가지)"],
    "mood": ["어울리는 분위기/상황 (3~5가지)"],
    "style": "어울리는 패션/스타일 설명"
  },
  "seasons": {
    "best": ["가장 잘 어울리는 계절"],
    "good": ["잘 어울리는 계절"],
    "avoid": ["피하는 것이 좋은 계절"],
    "reasoning": "계절 추천 이유 (2~3문장)"
  }
}`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      return res.status(500).json({ error: '응답 형식 오류' });
    }

    let parsed;
    try {
      // JSON 블록 추출 시도
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return res.status(500).json({ error: 'JSON 파싱 실패' });
      }
      parsed = JSON.parse(jsonMatch[0]);
    } catch {
      return res.status(500).json({ error: 'JSON 파싱 오류' });
    }

    return res.status(200).json(parsed);
  } catch (error) {
    console.error('Perfume search error:', error);
    return res.status(500).json({ error: '향수 정보를 가져오는 중 오류가 발생했습니다.' });
  }
}
