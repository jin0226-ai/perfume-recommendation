import type { Perfume } from '../data/perfumes';
import type { IngredientCategory } from '../data/ingredients';

// 향수의 모든 노트를 하나의 배열로 합치기
export function getAllNotes(perfume: Perfume): string[] {
  return [
    ...perfume.notes,
    ...perfume.topNotes,
    ...perfume.middleNotes,
    ...perfume.baseNotes,
  ].map((note) => note.toLowerCase());
}

// 향료와 향수 노트 매칭 점수 계산
export function calculateIngredientMatch(
  selectedIngredientIds: string[],
  perfume: Perfume
): number {
  if (selectedIngredientIds.length === 0) return 0;

  const allNotes = getAllNotes(perfume);
  let matchCount = 0;

  selectedIngredientIds.forEach((ingredientId) => {
    // 향료 ID를 향수 노트와 매칭 (부분 문자열 매칭)
    const ingredientName = ingredientId.replace(/-/g, ' ');
    const hasMatch = allNotes.some((note) => {
      return (
        note.includes(ingredientName) ||
        ingredientName.includes(note) ||
        matchIngredientWithNote(ingredientId, note)
      );
    });

    if (hasMatch) matchCount++;
  });

  // 매칭 비율 반환 (0~1)
  return matchCount / selectedIngredientIds.length;
}

// 향료와 노트의 특별한 매칭 규칙
function matchIngredientWithNote(ingredientId: string, note: string): boolean {
  const matchRules: Record<string, string[]> = {
    rose: ['장미', 'rose', '로즈'],
    jasmine: ['자스민', 'jasmine'],
    lavender: ['라벤더', 'lavender'],
    iris: ['아이리스', 'iris', '붓꽃'],
    peony: ['피오니', 'peony', '작약'],
    'orange-blossom': ['오렌지 블라썸', 'orange blossom', 'neroli', '네롤리'],
    bergamot: ['베르가못', 'bergamot'],
    lemon: ['레몬', 'lemon'],
    grapefruit: ['자몽', 'grapefruit'],
    mandarin: ['만다린', 'mandarin', '귤'],
    yuzu: ['유자', 'yuzu'],
    sandalwood: ['샌달우드', 'sandalwood', '백단향'],
    cedar: ['시더', 'cedar', '삼나무'],
    vetiver: ['베티버', 'vetiver'],
    patchouli: ['파출리', 'patchouli'],
    oud: ['우드', 'oud', 'agarwood', '침향', '아가우드'],
    cinnamon: ['시나몬', 'cinnamon', '계피'],
    pepper: ['페퍼', 'pepper', '후추'],
    cardamom: ['카다멈', 'cardamom'],
    nutmeg: ['넛맥', 'nutmeg', '육두구'],
    saffron: ['사프란', 'saffron'],
    mint: ['민트', 'mint', '박하'],
    tea: ['티', 'tea', '차'],
    aquatic: ['아쿠아틱', 'aquatic', 'marine', '워터'],
    bamboo: ['대나무', 'bamboo'],
    fig: ['무화과', 'fig'],
    vanilla: ['바닐라', 'vanilla'],
    'tonka-bean': ['통카빈', 'tonka bean', 'tonka'],
    honey: ['허니', 'honey', '꿀'],
    caramel: ['캐러멜', 'caramel'],
    chocolate: ['초콜릿', 'chocolate', '카카오', 'cacao'],
  };

  const rules = matchRules[ingredientId] || [];
  return rules.some((rule) => note.includes(rule));
}

// 카테고리별 가중치
export function calculateCategoryWeight(
  selectedCategories: IngredientCategory[]
): Record<IngredientCategory, number> {
  const weights: Record<IngredientCategory, number> = {
    floral: 0,
    citrus: 0,
    woody: 0,
    spicy: 0,
    fresh: 0,
    sweet: 0,
  };

  selectedCategories.forEach((category) => {
    weights[category]++;
  });

  return weights;
}

// 향수의 카테고리 점수 계산
export function getPerfumeCategoryScore(
  perfume: Perfume,
  categoryWeights: Record<IngredientCategory, number>
): number {
  const allNotes = getAllNotes(perfume).join(' ');
  let score = 0;

  // 각 카테고리별 키워드로 점수 계산
  const categoryKeywords: Record<IngredientCategory, string[]> = {
    floral: ['장미', 'rose', '자스민', 'jasmine', '꽃', 'floral', '라벤더', '아이리스'],
    citrus: [
      '베르가못',
      'bergamot',
      '레몬',
      'lemon',
      '오렌지',
      'orange',
      '자몽',
      'grapefruit',
      '시트러스',
      'citrus',
    ],
    woody: ['우드', 'wood', '시더', 'cedar', '샌달', 'sandal', '베티버', 'vetiver'],
    spicy: ['스파이시', 'spicy', '시나몬', 'cinnamon', '페퍼', 'pepper', '사프란', 'saffron'],
    fresh: ['프레시', 'fresh', '그린', 'green', '민트', 'mint', '아쿠아', 'aqua'],
    sweet: ['바닐라', 'vanilla', '통카', 'tonka', '스위트', 'sweet', '캐러멜', 'caramel'],
  };

  Object.entries(categoryWeights).forEach(([category, weight]) => {
    if (weight > 0) {
      const keywords = categoryKeywords[category as IngredientCategory];
      const hasKeyword = keywords.some((keyword) => allNotes.includes(keyword));
      if (hasKeyword) {
        score += weight;
      }
    }
  });

  return score;
}
