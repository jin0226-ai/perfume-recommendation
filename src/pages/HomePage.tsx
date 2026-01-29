import { useState } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { PerfumeResults } from '../components/PerfumeResults';
import { analyzeImage } from '../services/aiAnalysis';
import type { AnalysisResult } from '../services/aiAnalysis';
import { perfumeDatabase } from '../data/perfumes';
import type { VibeRecommendation } from '../data/perfumes';

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    analysis: AnalysisResult;
    recommendation: VibeRecommendation;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File, preview: string) => {
    setSelectedImage(file);
    setPreviewUrl(preview);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      setError('사진을 먼저 선택해주세요.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const analysis = await analyzeImage(selectedImage);
      const recommendation = perfumeDatabase[analysis.vibe];

      setResult({
        analysis,
        recommendation,
      });
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : '분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            나에게 어울리는 향수 찾기
          </h1>
          <p className="text-xl text-gray-600">
            당신의 사진으로 완벽한 향수를 찾아드립니다
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            이미지 색상 분석 기술을 활용하여 당신의 분위기를 파악하고,
            가장 어울리는 니치 향수를 추천해드립니다. 사진 한 장으로 나만의 시그니처 향을 발견하세요.
          </p>
        </div>

        {/* 사용 방법 안내 */}
        {!result && !previewUrl && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">사진 업로드</h3>
                <p className="text-sm text-gray-600">분위기가 잘 드러나는 사진을 선택하세요</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">분위기 분석</h3>
                <p className="text-sm text-gray-600">색상 분석으로 당신의 바이브를 파악합니다</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">향수 추천</h3>
                <p className="text-sm text-gray-600">어울리는 니치 향수 3종을 추천받으세요</p>
              </div>
            </div>
          </div>
        )}

        {/* 이미지 업로드 */}
        {!result && (
          <>
            <ImageUpload onImageSelect={handleImageSelect} previewUrl={previewUrl} />

            {/* 분석 버튼 */}
            {previewUrl && (
              <div className="text-center">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  {isAnalyzing ? (
                    <span className="flex items-center gap-3">
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      이미지 분석 중입니다...
                    </span>
                  ) : (
                    '향수 추천받기'
                  )}
                </button>
              </div>
            )}

            {/* 에러 메시지 */}
            {error && (
              <div className="max-w-2xl mx-auto bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
                {error}
              </div>
            )}
          </>
        )}

        {/* 결과 표시 */}
        {result && (
          <div className="space-y-6">
            <PerfumeResults
              recommendation={result.recommendation}
              reasoning={result.analysis.reasoning}
              confidence={result.analysis.confidence}
            />
            <div className="text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setPreviewUrl(null);
                  setSelectedImage(null);
                }}
                className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                다시 분석하기
              </button>
            </div>
          </div>
        )}

        {/* 추가 정보 섹션 */}
        {!result && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">왜 Scent Match인가요?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">색상 심리학 기반 분석</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  색상은 감정과 분위기를 담고 있습니다. 사진의 색상 톤, 채도, 명도를 분석하여
                  당신의 스타일과 분위기를 5가지 카테고리로 분류합니다.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">엄선된 니치 향수</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Maison Francis Kurkdjian, Diptyque, Le Labo, Byredo 등 세계적인 니치 브랜드와
                  탬버린즈, 912 퍼퓸 등 국내 브랜드의 향수를 큐레이션했습니다.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">5가지 분위기 카테고리</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Elegant(우아함), Sporty(활동적), Romantic(로맨틱), Modern(모던), Intense(강렬함) -
                  다양한 분위기에 맞는 향수를 추천합니다.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">무료 서비스</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  별도의 회원가입이나 비용 없이 바로 사용할 수 있습니다.
                  사진 업로드 후 몇 초 만에 맞춤 향수 추천을 받아보세요.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
