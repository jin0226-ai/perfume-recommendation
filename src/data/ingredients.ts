// 향료 카테고리와 상세 향료 목록
export interface Ingredient {
  id: string;
  name: string;
  category: IngredientCategory;
  description: string;
  emoji: string;
}

export type IngredientCategory = 'floral' | 'citrus' | 'woody' | 'spicy' | 'fresh' | 'sweet';

export interface IngredientCategoryInfo {
  id: IngredientCategory;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const ingredientCategories: IngredientCategoryInfo[] = [
  {
    id: 'floral',
    name: '플로럴',
    color: 'text-pink-700',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
  },
  {
    id: 'citrus',
    name: '시트러스',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
  },
  {
    id: 'woody',
    name: '우디',
    color: 'text-amber-700',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-300',
  },
  {
    id: 'spicy',
    name: '스파이시',
    color: 'text-red-700',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
  },
  {
    id: 'fresh',
    name: '프레시',
    color: 'text-green-700',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
  },
  {
    id: 'sweet',
    name: '스위트',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
  },
];

export const ingredients: Ingredient[] = [
  // Floral
  {
    id: 'rose',
    name: '로즈',
    category: 'floral',
    description: '우아하고 로맨틱한 장미 향',
    emoji: '🌹',
  },
  {
    id: 'jasmine',
    name: '자스민',
    category: 'floral',
    description: '달콤하고 관능적인 꽃 향',
    emoji: '🌼',
  },
  {
    id: 'lavender',
    name: '라벤더',
    category: 'floral',
    description: '편안하고 허브향이 나는 꽃',
    emoji: '💜',
  },
  {
    id: 'iris',
    name: '아이리스',
    category: 'floral',
    description: '파우더리하고 우아한 붓꽃',
    emoji: '🌸',
  },
  {
    id: 'peony',
    name: '피오니',
    category: 'floral',
    description: '싱그럽고 밝은 작약 향',
    emoji: '🌺',
  },
  {
    id: 'orange-blossom',
    name: '오렌지 블라썸',
    category: 'floral',
    description: '달콤하고 청량한 오렌지 꽃',
    emoji: '🧡',
  },

  // Citrus
  {
    id: 'bergamot',
    name: '베르가못',
    category: 'citrus',
    description: '상큼하고 씁쓸한 감귤류',
    emoji: '🍊',
  },
  {
    id: 'lemon',
    name: '레몬',
    category: 'citrus',
    description: '신선하고 톡 쏘는 레몬',
    emoji: '🍋',
  },
  {
    id: 'grapefruit',
    name: '자몽',
    category: 'citrus',
    description: '상큼하고 살짝 쌉싸름한 자몽',
    emoji: '🍇',
  },
  {
    id: 'mandarin',
    name: '만다린',
    category: 'citrus',
    description: '달콤하고 부드러운 귤',
    emoji: '🍊',
  },
  {
    id: 'yuzu',
    name: '유자',
    category: 'citrus',
    description: '상큼하고 독특한 동양 감귤',
    emoji: '🍈',
  },

  // Woody
  {
    id: 'sandalwood',
    name: '샌달우드',
    category: 'woody',
    description: '크리미하고 부드러운 백단향',
    emoji: '🪵',
  },
  {
    id: 'cedar',
    name: '시더',
    category: 'woody',
    description: '드라이하고 깨끗한 삼나무',
    emoji: '🌲',
  },
  {
    id: 'vetiver',
    name: '베티버',
    category: 'woody',
    description: '흙내음이 나는 뿌리 향',
    emoji: '🌿',
  },
  {
    id: 'patchouli',
    name: '파출리',
    category: 'woody',
    description: '깊고 이끼같은 허브 향',
    emoji: '🍂',
  },
  {
    id: 'oud',
    name: '우드',
    category: 'woody',
    description: '진하고 이국적인 침향',
    emoji: '🪔',
  },

  // Spicy
  {
    id: 'cinnamon',
    name: '시나몬',
    category: 'spicy',
    description: '따뜻하고 달콤한 계피',
    emoji: '🌰',
  },
  {
    id: 'pepper',
    name: '페퍼',
    category: 'spicy',
    description: '톡 쏘고 자극적인 후추',
    emoji: '🌶️',
  },
  {
    id: 'cardamom',
    name: '카다멈',
    category: 'spicy',
    description: '상큼하고 스파이시한 향신료',
    emoji: '🫚',
  },
  {
    id: 'nutmeg',
    name: '넛맥',
    category: 'spicy',
    description: '따뜻하고 달콤한 육두구',
    emoji: '🥜',
  },
  {
    id: 'saffron',
    name: '사프란',
    category: 'spicy',
    description: '럭셔리하고 따뜻한 향신료',
    emoji: '🌾',
  },

  // Fresh
  {
    id: 'mint',
    name: '민트',
    category: 'fresh',
    description: '시원하고 청량한 박하',
    emoji: '🌱',
  },
  {
    id: 'tea',
    name: '티',
    category: 'fresh',
    description: '깨끗하고 우아한 차 향',
    emoji: '🍵',
  },
  {
    id: 'aquatic',
    name: '아쿠아틱',
    category: 'fresh',
    description: '바다와 물의 청량한 향',
    emoji: '💧',
  },
  {
    id: 'bamboo',
    name: '대나무',
    category: 'fresh',
    description: '싱그럽고 그린한 대나무',
    emoji: '🎋',
  },
  {
    id: 'fig',
    name: '무화과',
    category: 'fresh',
    description: '그린하고 밀키한 무화과',
    emoji: '🌿',
  },

  // Sweet
  {
    id: 'vanilla',
    name: '바닐라',
    category: 'sweet',
    description: '달콤하고 크리미한 바닐라',
    emoji: '🍦',
  },
  {
    id: 'tonka-bean',
    name: '통카빈',
    category: 'sweet',
    description: '따뜻하고 캐러멜 같은 향',
    emoji: '🫘',
  },
  {
    id: 'honey',
    name: '허니',
    category: 'sweet',
    description: '달콤하고 부드러운 꿀',
    emoji: '🍯',
  },
  {
    id: 'caramel',
    name: '캐러멜',
    category: 'sweet',
    description: '달콤하고 고소한 캐러멜',
    emoji: '🍮',
  },
  {
    id: 'chocolate',
    name: '초콜릿',
    category: 'sweet',
    description: '진하고 달콤한 초콜릿',
    emoji: '🍫',
  },
];

// 향료 ID로 향료 찾기
export function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.find((ing) => ing.id === id);
}

// 카테고리로 향료 필터링
export function getIngredientsByCategory(category: IngredientCategory): Ingredient[] {
  return ingredients.filter((ing) => ing.category === category);
}

// 카테고리 정보 가져오기
export function getCategoryInfo(category: IngredientCategory): IngredientCategoryInfo | undefined {
  return ingredientCategories.find((cat) => cat.id === category);
}
