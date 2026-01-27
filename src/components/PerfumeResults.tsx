import React from 'react';
import type { VibeRecommendation, Perfume } from '../data/perfumes';

interface PerfumeResultsProps {
  recommendation: VibeRecommendation;
  reasoning: string;
  confidence: number;
}

export const PerfumeResults: React.FC<PerfumeResultsProps> = ({
  recommendation,
  reasoning,
  confidence,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fadeIn">
      {/* 분석 결과 헤더 */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            당신의 분위기는...
          </h2>
          <h3 className="text-4xl font-bold text-gray-800">
            {recommendation.vibeName}
          </h3>
          <p className="text-lg text-gray-600">{recommendation.vibeDescription}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>분석 신뢰도:</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(confidence * 5)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-600 italic mt-4">"{reasoning}"</p>
        </div>
      </div>

      {/* 향수 추천 카드 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          당신을 위한 향수 추천
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendation.perfumes.map((perfume, index) => (
            <PerfumeCard key={perfume.id} perfume={perfume} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface PerfumeCardProps {
  perfume: Perfume;
  index: number;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume, index }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* 향수 이미지 */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={perfume.imageUrl}
          alt={perfume.name}
          className="w-full h-full object-contain p-6"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              perfume.type === 'niche'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-pink-100 text-pink-700'
            }`}
          >
            {perfume.type === 'niche' ? '니치 향수' : '한국 향수'}
          </span>
        </div>
      </div>

      {/* 향수 정보 */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800">{perfume.name}</h4>
          <p className="text-sm text-gray-500 font-medium">{perfume.brand}</p>
        </div>

        {/* 노트 정보 */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-600 uppercase">Notes</p>
          <div className="flex flex-wrap gap-2">
            {perfume.notes.map((note, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {perfume.description}
        </p>

        {/* Fragrantica 링크 */}
        {perfume.fragranticaUrl && (
          <a
            href={perfume.fragranticaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            <span>Fragrantica에서 보기</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
