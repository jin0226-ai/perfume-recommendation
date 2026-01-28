import { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { PerfumeResults } from './components/PerfumeResults';
import { analyzeImage } from './services/aiAnalysis';
import type { AnalysisResult } from './services/aiAnalysis';
import { perfumeDatabase } from './data/perfumes';
import type { VibeRecommendation } from './data/perfumes';

function App() {
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Scent Match
          </h1>
          <p className="text-xl text-gray-600">
            당신의 사진으로 완벽한 향수를 찾아드립니다
          </p>
          <p className="text-sm text-gray-500">
            이미지 분석으로 당신의 분위기를 파악하여 가장 어울리는 니치 향수를 추천합니다
          </p>
        </div>

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

        {/* 푸터 */}
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
          <p>이미지 색상 분석 기반 향수 추천 서비스</p>
        </div>
      </div>
    </div>
  );
}

export default App;
