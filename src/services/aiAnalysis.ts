import type { VibeType } from '../data/perfumes';

export interface AnalysisResult {
  vibe: VibeType;
  confidence: number;
  reasoning: string;
}

interface ColorAnalysis {
  avgBrightness: number;
  avgSaturation: number;
  dominantHue: number;
  colorVariance: number;
  warmth: number; // 따뜻한 색상 vs 차가운 색상
}

// 이미지의 색상 정보를 분석하는 함수
function analyzeImageColors(imageData: ImageData): ColorAnalysis {
  const pixels = imageData.data;
  let totalR = 0, totalG = 0, totalB = 0;
  let totalBrightness = 0;
  let totalSaturation = 0;
  let totalHue = 0;
  let warmColors = 0;
  let coolColors = 0;

  const pixelCount = pixels.length / 4;
  const hues: number[] = [];

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i] / 255;
    const g = pixels[i + 1] / 255;
    const b = pixels[i + 2] / 255;

    totalR += r;
    totalG += g;
    totalB += b;

    // HSL 계산
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // Lightness (명도)

    let s = 0; // Saturation (채도)
    let h = 0; // Hue (색상)

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    totalBrightness += l;
    totalSaturation += s;
    totalHue += h;
    hues.push(h);

    // 따뜻한 색 vs 차가운 색 판별 (빨강/주황/노랑 vs 파랑/초록)
    if ((h >= 0 && h < 0.17) || (h >= 0.92)) { // 빨강-노랑
      warmColors++;
    } else if (h >= 0.45 && h < 0.75) { // 파랑-초록
      coolColors++;
    }
  }

  // 평균 계산
  const avgBrightness = totalBrightness / pixelCount;
  const avgSaturation = totalSaturation / pixelCount;
  const avgHue = totalHue / pixelCount;

  // 색상 분산 (다양성) 계산
  const variance = hues.reduce((sum, h) => sum + Math.pow(h - avgHue, 2), 0) / pixelCount;

  // 따뜻함 지수 (-1: 차가움, 0: 중립, 1: 따뜻함)
  const warmth = (warmColors - coolColors) / pixelCount;

  return {
    avgBrightness,
    avgSaturation,
    dominantHue: avgHue,
    colorVariance: variance,
    warmth,
  };
}

// 색상 분석 결과를 바탕으로 vibe 결정
function determineVibe(analysis: ColorAnalysis): AnalysisResult {
  const scores = {
    elegant: 0,
    sporty: 0,
    romantic: 0,
    modern: 0,
    intense: 0,
  };

  // elegant: 모노톤, 낮은 채도, 중간-높은 명도
  if (analysis.avgSaturation < 0.3 && analysis.avgBrightness > 0.4 && analysis.avgBrightness < 0.7) {
    scores.elegant += 30;
  }
  if (analysis.colorVariance < 0.02) {
    scores.elegant += 20;
  }

  // sporty: 밝고 선명한 색상, 높은 명도
  if (analysis.avgBrightness > 0.6 && analysis.avgSaturation > 0.4) {
    scores.sporty += 30;
  }
  if (analysis.warmth > 0.1) {
    scores.sporty += 15;
  }

  // romantic: 파스텔톤 (높은 명도 + 중간 채도), 부드러운 색상
  if (analysis.avgBrightness > 0.65 && analysis.avgSaturation > 0.2 && analysis.avgSaturation < 0.5) {
    scores.romantic += 35;
  }
  // 핑크/라벤더 계열 (hue 0.8-1.0 또는 0.0-0.1)
  if ((analysis.dominantHue > 0.8 || analysis.dominantHue < 0.1) && analysis.warmth > 0) {
    scores.romantic += 20;
  }

  // modern: 다양한 색상, 높은 분산, 대비
  if (analysis.colorVariance > 0.04) {
    scores.modern += 30;
  }
  if (analysis.avgSaturation > 0.35) {
    scores.modern += 15;
  }

  // intense: 어두운 색상, 높은 채도 또는 매우 낮은 채도
  if (analysis.avgBrightness < 0.4) {
    scores.intense += 25;
  }
  if (analysis.avgSaturation > 0.5 || analysis.avgSaturation < 0.2) {
    scores.intense += 20;
  }
  if (analysis.warmth < -0.1) {
    scores.intense += 10;
  }

  // 가장 높은 점수를 가진 vibe 선택
  let maxScore = 0;
  let selectedVibe: VibeType = 'modern';
  let reasoning = '';

  for (const [vibe, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      selectedVibe = vibe as VibeType;
    }
  }

  // 신뢰도 계산 (0.6 ~ 0.85 범위)
  const confidence = Math.min(0.85, 0.6 + (maxScore / 100) * 0.25);

  // 분석 이유 생성
  switch (selectedVibe) {
    case 'elegant':
      reasoning = `이미지에서 차분하고 절제된 색감이 감지되었습니다. 낮은 채도(${(analysis.avgSaturation * 100).toFixed(0)}%)와 안정적인 명도가 우아하고 클래식한 분위기를 연출합니다.`;
      break;
    case 'sporty':
      reasoning = `밝고 생동감 있는 색상(명도 ${(analysis.avgBrightness * 100).toFixed(0)}%)이 활기찬 이미지를 만들어냅니다. 건강하고 활동적인 느낌이 강하게 표현되었습니다.`;
      break;
    case 'romantic':
      reasoning = `부드럽고 따뜻한 톤의 색상이 주를 이룹니다. 파스텔 계열의 부드러운 색감이 로맨틱하고 여성스러운 분위기를 만들어냅니다.`;
      break;
    case 'modern':
      reasoning = `다양한 색상의 조화(색상 분산 ${(analysis.colorVariance * 100).toFixed(1)})가 돋보입니다. 독특하고 개성 있는 컬러 믹스가 모던하고 트렌디한 이미지를 형성합니다.`;
      break;
    case 'intense':
      reasoning = `강렬하고 깊은 색감이 특징적입니다. ${analysis.avgBrightness < 0.4 ? '어두운 톤' : '높은 채도'}이 시크하고 카리스마 있는 분위기를 연출합니다.`;
      break;
  }

  return {
    vibe: selectedVibe,
    confidence,
    reasoning,
  };
}

export async function analyzeImage(file: File): Promise<AnalysisResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.onload = () => {
        try {
          // Canvas 생성 및 이미지 그리기
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            throw new Error('Canvas context를 가져올 수 없습니다.');
          }

          // 성능을 위해 이미지 크기 조정 (최대 400px)
          const maxSize = 400;
          let width = img.width;
          let height = img.height;

          if (width > height && width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          } else if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // 이미지 데이터 추출
          const imageData = ctx.getImageData(0, 0, width, height);

          // 색상 분석
          const colorAnalysis = analyzeImageColors(imageData);

          // vibe 결정
          const result = determineVibe(colorAnalysis);

          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error('이미지를 로드할 수 없습니다.'));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('파일을 읽을 수 없습니다.'));
    };

    reader.readAsDataURL(file);
  });
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
