export interface Perfume {
  id: string;
  name: string;
  brand: string;
  type: 'niche' | 'korean';
  notes: string[];
  description: string;
  fragranticaUrl?: string;
  imageUrl: string;
}

export type VibeType = 'elegant' | 'sporty' | 'romantic' | 'modern' | 'intense';

export interface VibeRecommendation {
  vibe: VibeType;
  vibeName: string;
  vibeDescription: string;
  perfumes: Perfume[];
}

export const perfumeDatabase: Record<VibeType, VibeRecommendation> = {
  elegant: {
    vibe: 'elegant',
    vibeName: '우아하고 클래식한',
    vibeDescription: '성숙하고 세련된 이미지, 정돈된 느낌의 패션 스타일',
    perfumes: [
      {
        id: 'mfk-baccarat',
        name: 'Baccarat Rouge 540',
        brand: 'Maison Francis Kurkdjian',
        type: 'niche',
        notes: ['사프란', '자스민', '앰버우드', '시더'],
        description: '우디 플로럴 계열로 럭셔리하면서도 세련된 향. 사프란, 자스민, 앰버우드가 조화를 이루어 고급스럽고 우아한 분위기를 연출합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Baccarat-Rouge-540-33519.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.33519.jpg'
      },
      {
        id: 'diptyque-philosykos',
        name: 'Philosykos',
        brand: 'Diptyque',
        type: 'niche',
        notes: ['무화과 잎', '무화과 나무', '화이트 시더'],
        description: '무화과 나무의 모든 부분(잎, 열매, 수액)을 담은 우디 그린 향으로 지적이고 세련된 이미지를 선사합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Diptyque/Philosykos-2406.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.2406.jpg'
      },
      {
        id: 'tamburins-pumpkin',
        name: 'Pumkin Pie',
        brand: 'Tamburins',
        type: 'korean',
        notes: ['펌킨', '시나몬', '바닐라', '크림'],
        description: '따뜻한 스파이시 노트와 크리미한 바닐라가 어우러져 우아하면서도 친근한 분위기를 만들어냅니다.',
        imageUrl: 'https://via.placeholder.com/375x500/E8D5C4/8B7355?text=Tamburins+Pumkin+Pie'
      }
    ]
  },
  sporty: {
    vibe: 'sporty',
    vibeName: '스포티하고 활동적인',
    vibeDescription: '밝고 건강한 이미지, 캐주얼하고 활동적인 패션 스타일',
    perfumes: [
      {
        id: 'lelabo-bergamote',
        name: 'Bergamote 22',
        brand: 'Le Labo',
        type: 'niche',
        notes: ['베르가못', '그레이프프루트', '프티그레인', '베티버'],
        description: '베르가못과 그레이프프루트의 상큼한 시트러스 향으로 활기차고 에너제틱한 분위기를 선사합니다. 깔끔하고 미니멀한 느낌입니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Le-Labo/Bergamote-22-9768.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.9768.jpg'
      },
      {
        id: 'byredo-sundazed',
        name: 'Sundazed',
        brand: 'Byredo',
        type: 'niche',
        notes: ['캘리포니안 레몬', '만다린', '코튼 캔디', '화이트 머스크'],
        description: '캘리포니안 피그, 만다린, 화이트 머스크의 조합으로 밝고 경쾌한 여름날의 느낌을 담았습니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Byredo/Sundazed-47038.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.47038.jpg'
      },
      {
        id: '912-citrus',
        name: 'Citrus Fresh',
        brand: '912 Perfume',
        type: 'korean',
        notes: ['레몬', '오렌지', '그린 티', '베르가못'],
        description: '시원한 시트러스와 그린 노트로 일상에서 가볍게 즐길 수 있는 청량한 향입니다.',
        imageUrl: 'https://via.placeholder.com/375x500/B8E6E6/2C5F5F?text=912+Citrus+Fresh'
      }
    ]
  },
  romantic: {
    vibe: 'romantic',
    vibeName: '로맨틱하고 부드러운',
    vibeDescription: '부드럽고 여성스러운/중성적 매력, 플로럴하고 부드러운 패션 스타일',
    perfumes: [
      {
        id: 'pdm-delina',
        name: 'Delina',
        brand: 'Parfums de Marly',
        type: 'niche',
        notes: ['터키 로즈', '라일락', '피오니', '바닐라'],
        description: '터키 로즈, 라일락, 피오니가 어우러진 풍부한 플로럴 부케로 로맨틱하고 페미닌한 매력을 발산합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Parfums-de-Marly/Delina-24792.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.24792.jpg'
      },
      {
        id: 'jomalone-peony',
        name: 'Peony & Blush Suede',
        brand: 'Jo Malone',
        type: 'niche',
        notes: ['작약', '레드 애플', '스웨이드', '자스민'],
        description: '작약의 붉은 사과 향과 스웨이드의 부드러운 질감이 만나 로맨틱하면서도 현대적인 감성을 표현합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Jo-Malone-London/Peony-Blush-Suede-9740.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.9740.jpg'
      },
      {
        id: 'tamburins-shell',
        name: 'Shell Musk',
        brand: 'Tamburins',
        type: 'korean',
        notes: ['화이트 머스크', '파우더', '앰버', '샌달우드'],
        description: '깨끗한 머스크와 파우더리 노트가 부드럽고 포근한 감성을 연출합니다.',
        imageUrl: 'https://via.placeholder.com/375x500/F5E6D3/8B7355?text=Tamburins+Shell+Musk'
      }
    ]
  },
  modern: {
    vibe: 'modern',
    vibeName: '모던하고 독특한',
    vibeDescription: '개성 있고 트렌디한 이미지, 믹스매치와 유니크한 패션 스타일',
    perfumes: [
      {
        id: 'lelabo-santal33',
        name: 'Santal 33',
        brand: 'Le Labo',
        type: 'niche',
        notes: ['샌달우드', '가죽', '카다멈', '파피루스'],
        description: '샌달우드, 가죽, 카다멈의 조합으로 젠더리스하고 개성 있는 향을 선사합니다. 현대적이고 독특한 매력이 있습니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Le-Labo/Santal-33-12201.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.12201.jpg'
      },
      {
        id: 'byredo-gypsy',
        name: 'Gypsy Water',
        brand: 'Byredo',
        type: 'niche',
        notes: ['레몬', '주니퍼 베리', '바닐라', '샌달우드'],
        description: '레몬, 주니퍼 베리, 바닐라의 독특한 조합으로 집시의 자유로운 영혼을 담았습니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Byredo/Gypsy-Water-6870.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.6870.jpg'
      },
      {
        id: '422-earth',
        name: 'Earth Essence',
        brand: '422',
        type: 'korean',
        notes: ['그린 노트', '모스', '우디', '머스크'],
        description: '지속 가능한 향수로 자연과 인간의 조화를 추구하는 철학이 담겨 현대적이고 의식 있는 이미지를 만듭니다.',
        imageUrl: 'https://via.placeholder.com/375x500/A8C9A0/3A5F3A?text=422+Earth+Essence'
      }
    ]
  },
  intense: {
    vibe: 'intense',
    vibeName: '시크하고 강렬한',
    vibeDescription: '카리스마 있고 강인한 이미지, 올블랙과 당당한 패션 스타일',
    perfumes: [
      {
        id: 'amouage-interlude',
        name: 'Interlude Man',
        brand: 'Amouage',
        type: 'niche',
        notes: ['인센스', '미르', '앰버', '오우드'],
        description: '인센스, 미르, 앰버의 오리엔탈 스파이시 향으로 강렬하고 복잡한 깊이감을 선사합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Amouage/Interlude-Man-13876.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.13876.jpg'
      },
      {
        id: 'tomford-tobacco',
        name: 'Tobacco Vanille',
        brand: 'Tom Ford',
        type: 'niche',
        notes: ['담배 잎', '바닐라', '코코아', '통카빈'],
        description: '담배와 바닐라의 대비로 파워풀하면서도 세련된 이브닝 센트를 완성합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Tom-Ford/Tobacco-Vanille-1825.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg'
      },
      {
        id: 'pesade-signature',
        name: 'Signature Noir',
        brand: 'Pesade',
        type: 'korean',
        notes: ['블랙 페퍼', '가죽', '파촐리', '앰버'],
        description: '럭셔리 원료를 사용한 강렬하고 정교한 향으로 강인하면서도 우아한 이미지를 표현합니다.',
        imageUrl: 'https://via.placeholder.com/375x500/2C2C2C/FFFFFF?text=Pesade+Signature+Noir'
      }
    ]
  }
};
