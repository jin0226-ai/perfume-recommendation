import type { VibeType } from '../data/perfumes';

export interface AnalysisResult {
  vibe: VibeType;
  confidence: number;
  reasoning: string;
}

export async function analyzeImage(imageBase64: string): Promise<AnalysisResult> {
  // 백엔드 API 엔드포인트로 요청
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imageBase64,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '이미지 분석에 실패했습니다.');
  }

  const result = await response.json() as AnalysisResult;
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
