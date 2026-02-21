import { useState, useMemo } from 'react';
import { PerfumeResults } from '../components/PerfumeResults';
import {
  ingredients,
  ingredientCategories,
  getCategoryInfo,
  type Ingredient,
  type IngredientCategory,
} from '../data/ingredients';
import { perfumeDatabase, type VibeRecommendation } from '../data/perfumes';
import {
  calculateIngredientMatch,
  calculateCategoryWeight,
  getPerfumeCategoryScore,
} from '../services/ingredientMatching';

export function IngredientPage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IngredientCategory | 'all'>('all');
  const [showResults, setShowResults] = useState(false);

  // 카테고리별 향료 필터링
  const filteredIngredients = useMemo(() => {
    if (selectedCategory === 'all') return ingredients;
    return ingredients.filter((ing) => ing.category === selectedCategory);
  }, [selectedCategory]);

  // 향료 선택/해제
  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredientId)) {
        return prev.filter((id) => id !== ingredientId);
      } else {
        return [...prev, ingredientId];
      }
    });
  };

  // 향수 추천 계산
  const recommendation = useMemo<VibeRecommendation | null>(() => {
    if (!showResults || selectedIngredients.length === 0) return null;

    // 모든 향수 가져오기
    const allPerfumes = Object.values(perfumeDatabase).flatMap((vibe) => vibe.perfumes);

    // 선택된 향료의 카테고리 가중치 계산
    const selectedCategories = selectedIngredients
      .map((id) => ingredients.find((ing) => ing.id === id)?.category)
      .filter(Boolean) as IngredientCategory[];

    const categoryWeights = calculateCategoryWeight(selectedCategories);

    // 각 향수의 점수 계산
    const scoredPerfumes = allPerfumes.map((perfume) => {
      const ingredientMatchScore = calculateIngredientMatch(selectedIngredients, perfume);
      const categoryScore = getPerfumeCategoryScore(perfume, categoryWeights);
      const totalScore = ingredientMatchScore * 10 + categoryScore;

      return {
        perfume,
        score: totalScore,
        ingredientMatchScore,
      };
    });

    // 점수 순으로 정렬하고 상위 3개 선택
    const topPerfumes = scoredPerfumes
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.perfume);

    // 추천 결과 생성
    const selectedIngredientNames = selectedIngredients
      .map((id) => ingredients.find((ing) => ing.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return {
      vibe: 'modern' as const,
      vibeName: '당신이 선택한 향료 기반 추천',
      vibeDescription: `${selectedIngredientNames} 노트가 포함된 향수를 찾았습니다`,
      perfumes: topPerfumes,
    };
  }, [selectedIngredients, showResults]);

  const handleGetRecommendation = () => {
    if (selectedIngredients.length === 0) {
      alert('최소 1개 이상의 향료를 선택해주세요.');
      return;
    }
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setSelectedIngredients([]);
    setSelectedCategory('all');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            향료로 향수 찾기
          </h1>
          <p className="text-xl text-gray-600">
            선호하는 향료를 선택하면 그에 맞는 향수를 추천해드립니다
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            플로럴, 시트러스, 우디, 스파이시 등 다양한 카테고리의 향료 중에서
            마음에 드는 것들을 선택해보세요. 선택한 향료가 포함된 향수를 찾아드립니다.
          </p>
        </div>

        {!showResults ? (
          <>
            {/* 선택된 향료 개수 */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border-2 border-purple-200">
                <span className="text-gray-700 font-medium">선택된 향료:</span>
                <span className="text-2xl font-bold text-purple-600">
                  {selectedIngredients.length}
                </span>
                {selectedIngredients.length > 0 && (
                  <button
                    onClick={() => setSelectedIngredients([])}
                    className="ml-2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    전체 해제
                  </button>
                )}
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white/60 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:border-purple-400'
                  }`}
                >
                  전체
                </button>
                {ingredientCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `${category.bgColor} ${category.color} border-2 ${category.borderColor} shadow-lg`
                        : 'bg-white/60 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:border-purple-400'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 향료 선택 그리드 */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredIngredients.map((ingredient) => {
                  const isSelected = selectedIngredients.includes(ingredient.id);
                  const categoryInfo = getCategoryInfo(ingredient.category);

                  return (
                    <button
                      key={ingredient.id}
                      onClick={() => toggleIngredient(ingredient.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        isSelected
                          ? `${categoryInfo?.bgColor} ${categoryInfo?.borderColor} shadow-lg scale-105`
                          : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <div className="text-4xl">{ingredient.emoji}</div>
                        <div
                          className={`font-semibold ${
                            isSelected ? categoryInfo?.color : 'text-gray-800'
                          }`}
                        >
                          {ingredient.name}
                        </div>
                        <div className="text-xs text-gray-600">{ingredient.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 추천받기 버튼 */}
            {selectedIngredients.length > 0 && (
              <div className="text-center pt-8">
                <button
                  onClick={handleGetRecommendation}
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  향수 추천받기
                </button>
              </div>
            )}

            {/* 사용 가이드 */}
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                향료 카테고리 안내
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ingredientCategories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-200"
                  >
                    <h3 className={`font-bold text-lg mb-2 ${category.color}`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {getCategoryDescription(category.id)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 추천 결과 */}
            {recommendation && (
              <div className="space-y-6">
                <PerfumeResults
                  recommendation={recommendation}
                  reasoning={`선택하신 향료를 바탕으로 가장 잘 어울리는 향수를 추천해드렸습니다.`}
                  confidence={0.85}
                />
                <div className="text-center">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
                  >
                    다시 선택하기
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// 카테고리 설명
function getCategoryDescription(category: IngredientCategory): string {
  const descriptions: Record<IngredientCategory, string> = {
    floral: '장미, 자스민 등 꽃에서 추출한 향료로 우아하고 로맨틱한 분위기를 연출합니다.',
    citrus:
      '레몬, 베르가못 등 감귤류의 상큼하고 청량한 향으로 생기 있고 밝은 느낌을 줍니다.',
    woody: '시더, 샌달우드 등 나무에서 추출한 향으로 차분하고 세련된 분위기를 만듭니다.',
    spicy:
      '시나몬, 사프란 등 향신료의 따뜻하고 강렬한 향으로 개성 있고 매력적인 느낌을 줍니다.',
    fresh:
      '민트, 차 등의 깨끗하고 시원한 향으로 상쾌하고 청결한 이미지를 선사합니다.',
    sweet:
      '바닐라, 캐러멜 등의 달콤한 향으로 부드럽고 친근한 분위기를 연출합니다.',
  };
  return descriptions[category];
}
