export interface Perfume {
  id: string;
  name: string;
  brand: string;
  type: 'niche' | 'korean';
  notes: string[];
  description: string;
  fragranticaUrl?: string;
  imageUrl: string;
  extendedDescription: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  usageTips: string[];
  bestSeasons: string[];
  bestOccasions: string[];
  sillage: '가벼움' | '보통' | '강함' | '매우 강함';
  longevity: '2~4시간' | '4~6시간' | '6~8시간' | '8시간 이상';
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
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.33519.jpg',
        extendedDescription: 'Baccarat Rouge 540은 메종 프란시스 커르지앙의 대표 향수로, 프랑스 크리스탈 명가 바카라의 250주년을 기념하여 탄생했습니다. 조향사 프란시스 커르지앙이 바카라 크리스탈의 제작 과정에서 영감을 받아 만든 이 향수는, 사프란의 따뜻한 스파이시 노트로 시작하여 자스민의 우아한 플로럴과 앰버우드의 깊은 우디 노트로 전개됩니다. 피부 위에서 시간이 지남에 따라 독특한 스킨센트로 변하며, 착용자만의 시그니처 향을 만들어냅니다.',
        topNotes: ['사프란', '자스민'],
        middleNotes: ['앰버우드', '앰버그리스'],
        baseNotes: ['시더', '퍼스 우드'],
        usageTips: [
          '손목 안쪽과 귀 뒤쪽에 소량 뿌려 체온으로 향이 자연스럽게 퍼지도록 하세요',
          '건조한 피부보다 보습된 피부에서 향이 더 오래 지속됩니다',
          '과하게 뿌리면 주변에 부담이 될 수 있으니 2~3번 스프레이가 적당합니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['격식 있는 모임', '디너 파티', '특별한 날'],
        sillage: '강함',
        longevity: '8시간 이상',
      },
      {
        id: 'diptyque-philosykos',
        name: 'Philosykos',
        brand: 'Diptyque',
        type: 'niche',
        notes: ['무화과 잎', '무화과 나무', '화이트 시더'],
        description: '무화과 나무의 모든 부분(잎, 열매, 수액)을 담은 우디 그린 향으로 지적이고 세련된 이미지를 선사합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Diptyque/Philosykos-2406.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.2406.jpg',
        extendedDescription: 'Philosykos는 그리스어로 "무화과를 사랑하는 사람"이라는 뜻으로, 딥티크가 그리스 펠로폰네소스 반도의 무화과 숲에서 영감을 받아 만든 향수입니다. 무화과 나무의 잎, 열매, 수액, 나무껍질까지 모든 부분의 향을 섬세하게 담아냈습니다. 초록빛 무화과 잎의 풋풋한 향으로 시작해 잘 익은 무화과 열매의 달콤함으로 전개되며, 화이트 시더의 크리미한 우디 노트로 마무리됩니다.',
        topNotes: ['무화과 잎', '그린 노트'],
        middleNotes: ['무화과 열매', '코코넛'],
        baseNotes: ['화이트 시더', '우디 노트'],
        usageTips: [
          '여름철 가볍게 뿌리면 청량한 그린 노트가 돋보입니다',
          '팔 안쪽이나 목 뒤에 뿌리면 체온으로 무화과 향이 은은하게 퍼집니다',
          '같은 브랜드의 무화과 바디 로션과 레이어링하면 지속력이 향상됩니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['일상 생활', '사무실', '브런치'],
        sillage: '보통',
        longevity: '4~6시간',
      },
      {
        id: 'tamburins-pumpkin',
        name: 'Pumkin Pie',
        brand: 'Tamburins',
        type: 'korean',
        notes: ['펌킨', '시나몬', '바닐라', '크림'],
        description: '따뜻한 스파이시 노트와 크리미한 바닐라가 어우러져 우아하면서도 친근한 분위기를 만들어냅니다.',
        imageUrl: '/images/perfumes/tamburins-pumpkin.svg',
        extendedDescription: '탬버린즈의 Pumkin Pie는 가을 저녁의 따뜻한 감성을 담은 향수입니다. 갓 구운 호박 파이에서 영감을 받아, 부드러운 펌킨 노트에 시나몬과 넛맥의 스파이시함을 더하고, 크리미한 바닐라와 부드러운 크림 노트로 감싸 포근하면서도 세련된 향을 완성했습니다. 한국 특유의 섬세한 조향 감각이 돋보이는 작품입니다.',
        topNotes: ['펌킨', '시나몬'],
        middleNotes: ['넛맥', '클로브'],
        baseNotes: ['바닐라', '크림', '머스크'],
        usageTips: [
          '가을과 겨울에 특히 잘 어울리는 향으로, 따뜻한 소재의 옷과 매칭하세요',
          '니트나 스카프에 살짝 뿌리면 움직일 때마다 은은하게 퍼집니다',
          '데이트나 소규모 모임에서 부드러운 인상을 줍니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['데이트', '소규모 모임', '일상 생활'],
        sillage: '보통',
        longevity: '4~6시간',
      },
    ],
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
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.9768.jpg',
        extendedDescription: 'Le Labo의 Bergamote 22는 이탈리아 칼라브리아산 베르가못의 상큼하고 밝은 시트러스 향을 중심으로 구성된 향수입니다. 숫자 22는 이 향수에 사용된 원료의 수를 의미합니다. 그레이프프루트의 쌉싸름한 상큼함과 프티그레인의 그린 시트러스가 활력을 더하며, 베티버와 머스크의 베이스가 깔끔하게 마무리합니다. 젠더리스한 매력으로 남녀 모두에게 사랑받는 향수입니다.',
        topNotes: ['베르가못', '그레이프프루트', '오렌지 블로썸'],
        middleNotes: ['프티그레인', '네롤리'],
        baseNotes: ['베티버', '머스크', '앰버'],
        usageTips: [
          '아침 출근 전 가볍게 뿌리면 하루를 상쾌하게 시작할 수 있습니다',
          '운동 후 샤워 직후에 뿌리면 시트러스 향이 더욱 깨끗하게 느껴집니다',
          '여름철 데일리 향수로 최적이며, 과하지 않아 사무실에서도 부담 없습니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['일상 생활', '사무실', '야외 활동'],
        sillage: '보통',
        longevity: '4~6시간',
      },
      {
        id: 'byredo-sundazed',
        name: 'Sundazed',
        brand: 'Byredo',
        type: 'niche',
        notes: ['캘리포니안 레몬', '만다린', '코튼 캔디', '화이트 머스크'],
        description: '캘리포니안 피그, 만다린, 화이트 머스크의 조합으로 밝고 경쾌한 여름날의 느낌을 담았습니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Byredo/Sundazed-47038.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.47038.jpg',
        extendedDescription: 'Byredo의 Sundazed는 캘리포니아의 화창한 여름날을 향으로 표현한 작품입니다. 창립자 벤 고럼이 LA의 태양 아래에서 보낸 하루에서 영감을 받았으며, 캘리포니안 레몬의 밝고 터지는 듯한 시트러스로 시작해, 코튼 캔디의 달콤하고 장난스러운 중간 노트를 거쳐, 화이트 머스크의 부드러운 잔향으로 마무리됩니다. 자유롭고 즐거운 에너지를 가득 담은 향수입니다.',
        topNotes: ['캘리포니안 레몬', '만다린', '네롤리'],
        middleNotes: ['자스민 프티', '코튼 캔디'],
        baseNotes: ['화이트 머스크', '샌달우드'],
        usageTips: [
          '해변이나 야외 활동 전에 뿌리면 밝은 에너지를 더해줍니다',
          '가볍고 달콤한 향이므로 여러 번 스프레이해도 부담이 적습니다',
          '밝은 색상의 캐주얼 룩과 함께하면 시너지가 납니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['야외 활동', '소풍', '페스티벌'],
        sillage: '보통',
        longevity: '4~6시간',
      },
      {
        id: '912-citrus',
        name: 'Citrus Fresh',
        brand: '912 Perfume',
        type: 'korean',
        notes: ['레몬', '오렌지', '그린 티', '베르가못'],
        description: '시원한 시트러스와 그린 노트로 일상에서 가볍게 즐길 수 있는 청량한 향입니다.',
        imageUrl: '/images/perfumes/912-citrus.svg',
        extendedDescription: '912 Perfume의 Citrus Fresh는 한국의 깨끗하고 단정한 미감을 시트러스 향에 담은 향수입니다. 이탈리안 레몬과 스위트 오렌지의 활기찬 탑 노트로 시작하여, 일본산 그린 티의 차분한 미들 노트로 전개되고, 가벼운 머스크와 우디 노트가 깔끔하게 마무리합니다. 한국 브랜드 특유의 투명하고 깨끗한 시트러스를 경험할 수 있으며, 데일리 향수로 누구에게나 호감을 줍니다.',
        topNotes: ['레몬', '오렌지', '베르가못'],
        middleNotes: ['그린 티', '화이트 플로럴'],
        baseNotes: ['화이트 머스크', '시더우드'],
        usageTips: [
          '아침 루틴에 포함시키면 상쾌한 하루를 시작할 수 있습니다',
          '더운 여름날 가볍게 뿌리기 좋은 향수입니다',
          '면 소재의 캐주얼한 옷에 잘 어울립니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['일상 생활', '사무실', '학교'],
        sillage: '가벼움',
        longevity: '2~4시간',
      },
    ],
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
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.24792.jpg',
        extendedDescription: 'Parfums de Marly의 Delina는 18세기 프랑스 왕실의 우아함에서 영감을 받은 향수입니다. 조향사 Quentin Bisch가 창조한 이 향수는 터키 로즈의 풍부한 플로럴 노트를 중심으로, 라일락의 파우더리한 달콤함과 리치의 과일향이 조화를 이룹니다. 바닐라와 머스크의 부드러운 베이스가 플로럴 부케를 감싸며, 현대적이면서도 클래식한 로맨틱 향을 완성합니다.',
        topNotes: ['리치', '라바딘', '너트맥'],
        middleNotes: ['터키 로즈', '피오니', '라일락'],
        baseNotes: ['바닐라', '화이트 머스크', '카시미어 우드'],
        usageTips: [
          '데이트 전 손목과 목에 뿌리면 움직일 때마다 플로럴 향이 은은하게 퍼집니다',
          '파우더리한 특성이 있어 건조한 계절에 더욱 아름답게 발향됩니다',
          '리치 노트가 돋보이는 처음 30분이 특히 매력적입니다',
        ],
        bestSeasons: ['봄', '가을'],
        bestOccasions: ['데이트', '결혼식', '파티'],
        sillage: '강함',
        longevity: '8시간 이상',
      },
      {
        id: 'jomalone-peony',
        name: 'Peony & Blush Suede',
        brand: 'Jo Malone',
        type: 'niche',
        notes: ['작약', '레드 애플', '스웨이드', '자스민'],
        description: '작약의 붉은 사과 향과 스웨이드의 부드러운 질감이 만나 로맨틱하면서도 현대적인 감성을 표현합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Jo-Malone-London/Peony-Blush-Suede-9740.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.9740.jpg',
        extendedDescription: 'Jo Malone London의 Peony & Blush Suede는 활짝 핀 작약의 화려함과 블러쉬 스웨이드의 부드러운 질감을 결합한 향수입니다. 레드 애플의 상큼하고 과즙 넘치는 탑 노트로 시작하여, 풍성하게 핀 작약의 플로럴 하트를 거쳐, 블러쉬 스웨이드의 벨벳 같은 부드러운 베이스로 이어집니다. 여성스러우면서도 현대적인 감성을 담은 조 말론의 시그니처 작품입니다.',
        topNotes: ['레드 애플'],
        middleNotes: ['작약', '자스민', '로즈'],
        baseNotes: ['블러쉬 스웨이드', '실크'],
        usageTips: [
          '봄꽃이 피는 계절에 뿌리면 자연과 하나가 되는 느낌입니다',
          'Jo Malone의 다른 향수와 레이어링하면 나만의 시그니처 향을 만들 수 있습니다',
          '가볍지만 존재감 있는 향으로 브런치나 애프터눈 티에 어울립니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['브런치', '데이트', '일상 생활'],
        sillage: '보통',
        longevity: '4~6시간',
      },
      {
        id: 'tamburins-shell',
        name: 'Shell Musk',
        brand: 'Tamburins',
        type: 'korean',
        notes: ['화이트 머스크', '파우더', '앰버', '샌달우드'],
        description: '깨끗한 머스크와 파우더리 노트가 부드럽고 포근한 감성을 연출합니다.',
        imageUrl: '/images/perfumes/tamburins-shell.svg',
        extendedDescription: '탬버린즈의 Shell Musk는 바다에서 주운 조개껍데기의 부드럽고 깨끗한 이미지에서 영감을 받은 향수입니다. 화이트 머스크의 깨끗하고 투명한 향을 중심으로, 파우더리한 부드러움과 앰버의 따뜻함이 감싸줍니다. 샌달우드의 크리미한 베이스가 피부 위에서 포근한 온기를 전하며, 마치 갓 세탁한 이불처럼 청결하고 편안한 향을 선사합니다.',
        topNotes: ['화이트 머스크', '알데하이드'],
        middleNotes: ['파우더', '아이리스'],
        baseNotes: ['앰버', '샌달우드', '바닐라'],
        usageTips: [
          '자기 전에 가볍게 뿌리면 편안한 수면에 도움이 됩니다',
          '청결한 느낌의 향이라 사무실에서도 부담 없이 사용할 수 있습니다',
          '머스크 계열이라 피부 가까이에서 은은하게 발향됩니다',
        ],
        bestSeasons: ['봄', '가을'],
        bestOccasions: ['일상 생활', '사무실', '데이트'],
        sillage: '가벼움',
        longevity: '4~6시간',
      },
    ],
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
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.12201.jpg',
        extendedDescription: 'Le Labo의 Santal 33은 미국 서부의 카우보이 문화에서 영감을 받은 향수입니다. 숫자 33은 이 향수에 사용된 원료의 수를 의미합니다. 인도산 샌달우드의 크리미하고 따뜻한 우디 노트를 중심으로, 가죽의 스모키한 질감과 카다멈의 스파이시한 터치가 어우러집니다. 뉴욕과 전 세계 패셔니스타들의 시그니처 향으로 자리잡은 이 향수는 젠더리스한 매력으로 남녀 구분 없이 사랑받고 있습니다.',
        topNotes: ['카다멈', '아이리스', '바이올렛'],
        middleNotes: ['앰브록스', '파피루스', '오스트레일리안 샌달우드'],
        baseNotes: ['가죽', '시더우드', '머스크'],
        usageTips: [
          '캐주얼하면서도 개성 있는 룩에 잘 어울리며, 데님과의 매칭이 특히 좋습니다',
          '따뜻한 계절보다 서늘한 날씨에 더 깊이 있는 발향을 경험할 수 있습니다',
          '향이 강한 편이므로 1~2번 스프레이로 충분합니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['일상 생활', '사무실', '모임'],
        sillage: '강함',
        longevity: '8시간 이상',
      },
      {
        id: 'byredo-gypsy',
        name: 'Gypsy Water',
        brand: 'Byredo',
        type: 'niche',
        notes: ['레몬', '주니퍼 베리', '바닐라', '샌달우드'],
        description: '레몬, 주니퍼 베리, 바닐라의 독특한 조합으로 집시의 자유로운 영혼을 담았습니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Byredo/Gypsy-Water-6870.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.6870.jpg',
        extendedDescription: 'Byredo의 Gypsy Water는 로마니 집시 문화의 자유로운 영혼과 방랑의 낭만을 담은 향수입니다. 창립자 벤 고럼이 유럽을 여행하며 만난 집시들의 라이프스타일에서 영감을 받았습니다. 베르가못과 레몬의 밝은 시트러스 탑 노트로 시작하여, 주니퍼 베리와 인센스의 이국적인 미들을 거쳐, 바닐라와 샌달우드의 따뜻한 우디 베이스로 마무리됩니다. 자유롭고 비범한 정신을 향으로 표현합니다.',
        topNotes: ['베르가못', '레몬', '후추'],
        middleNotes: ['주니퍼 베리', '인센스', '소나무 바늘'],
        baseNotes: ['바닐라', '샌달우드', '앰버'],
        usageTips: [
          '자연 속에서 뿌리면 숲과 향이 어우러져 더욱 매력적입니다',
          '캐시미어나 린넨 같은 자연 소재의 옷에 뿌리면 잔향이 오래갑니다',
          '레이어링 없이 단독으로 사용할 때 가장 아름답습니다',
        ],
        bestSeasons: ['봄', '가을'],
        bestOccasions: ['여행', '카페', '일상 생활'],
        sillage: '보통',
        longevity: '6~8시간',
      },
      {
        id: '422-earth',
        name: 'Earth Essence',
        brand: '422',
        type: 'korean',
        notes: ['그린 노트', '모스', '우디', '머스크'],
        description: '지속 가능한 향수로 자연과 인간의 조화를 추구하는 철학이 담겨 현대적이고 의식 있는 이미지를 만듭니다.',
        imageUrl: '/images/perfumes/422-earth.svg',
        extendedDescription: '422의 Earth Essence는 지구와 인간의 공존이라는 철학을 담은 향수입니다. 지속 가능한 원료와 친환경 패키지를 사용하며, 이익의 일부를 환경 보호 단체에 기부합니다. 비 온 뒤 흙냄새를 연상시키는 그린 노트와 숲속의 이끼 향이 자연의 생명력을 전하고, 우디와 머스크의 차분한 베이스가 안정감을 줍니다. 자연을 사랑하는 현대인을 위한 의식 있는 향수입니다.',
        topNotes: ['그린 노트', '베르가못', '유칼립투스'],
        middleNotes: ['모스', '제라늄', '클라리 세이지'],
        baseNotes: ['시더우드', '머스크', '베티버'],
        usageTips: [
          '환경을 생각하는 가치 소비를 추구하는 분께 추천합니다',
          '자연스러운 그린 노트가 돋보이는 향이라 야외 활동에 좋습니다',
          '유니섹스 향으로 성별 구분 없이 사용할 수 있습니다',
        ],
        bestSeasons: ['봄', '여름'],
        bestOccasions: ['야외 활동', '일상 생활', '카페'],
        sillage: '가벼움',
        longevity: '4~6시간',
      },
    ],
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
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.13876.jpg',
        extendedDescription: 'Amouage의 Interlude Man은 오만의 럭셔리 향수 하우스가 만든 가장 강렬하고 복잡한 향수 중 하나입니다. 조향사 Pierre Negrin이 창조한 이 향수는 "불협화음 속의 조화"라는 콘셉트로, 오리엔탈 스파이시 향과 우디 노트를 대담하게 결합했습니다. 오레가노와 베르가못의 독특한 탑 노트로 시작하여, 인센스와 미르의 영적인 미들 노트, 그리고 앰버와 오우드의 깊고 어두운 베이스로 전개됩니다.',
        topNotes: ['오레가노', '베르가못', '페퍼민트'],
        middleNotes: ['인센스', '미르', '라브다넘'],
        baseNotes: ['앰버', '오우드', '샌달우드', '통카빈'],
        usageTips: [
          '매우 강한 향이므로 1~2번 스프레이면 충분합니다',
          '겨울 밤이나 포멀한 이브닝 행사에서 진가를 발휘합니다',
          '가죽 재킷이나 코트에 뿌리면 향이 오래 지속됩니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['이브닝 행사', '파티', '포멀 디너'],
        sillage: '매우 강함',
        longevity: '8시간 이상',
      },
      {
        id: 'tomford-tobacco',
        name: 'Tobacco Vanille',
        brand: 'Tom Ford',
        type: 'niche',
        notes: ['담배 잎', '바닐라', '코코아', '통카빈'],
        description: '담배와 바닐라의 대비로 파워풀하면서도 세련된 이브닝 센트를 완성합니다.',
        fragranticaUrl: 'https://www.fragrantica.com/perfume/Tom-Ford/Tobacco-Vanille-1825.html',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg',
        extendedDescription: 'Tom Ford의 Tobacco Vanille은 Private Blend 컬렉션의 대표작으로, 빅토리아 시대 영국 젠틀맨스 클럽의 분위기를 현대적으로 재해석했습니다. 담배 잎의 스모키하고 달콤한 향을 중심으로, 톡 쏘는 스파이시 노트와 크리미한 바닐라, 코코아의 달콤함이 어우러집니다. 통카빈의 아몬드 같은 달콤함과 건조한 과일 향이 복합적인 깊이를 더하며, 시간이 지남에 따라 더욱 매력적으로 변화합니다.',
        topNotes: ['담배 잎', '스파이시 노트'],
        middleNotes: ['바닐라', '코코아', '통카빈'],
        baseNotes: ['건조 과일', '우디 노트', '스모키 노트'],
        usageTips: [
          '겨울 저녁에 착용하면 따뜻하고 포근한 분위기를 연출합니다',
          '소량만 사용해도 존재감이 강하니 조절에 주의하세요',
          '울 코트나 캐시미어 스카프와 함께하면 완벽한 조합입니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['디너', '바', '특별한 날'],
        sillage: '강함',
        longevity: '8시간 이상',
      },
      {
        id: 'pesade-signature',
        name: 'Signature Noir',
        brand: 'Pesade',
        type: 'korean',
        notes: ['블랙 페퍼', '가죽', '파촐리', '앰버'],
        description: '럭셔리 원료를 사용한 강렬하고 정교한 향으로 강인하면서도 우아한 이미지를 표현합니다.',
        imageUrl: '/images/perfumes/pesade-signature.svg',
        extendedDescription: 'Pesade의 Signature Noir는 한국 니치 향수의 가능성을 보여주는 작품입니다. "검은 서명"이라는 이름처럼, 블랙 페퍼의 강렬한 스파이시 노트로 시작하여 가죽의 럭셔리한 질감과 파촐리의 어스키한 깊이감을 더합니다. 앰버와 머스크의 관능적인 베이스가 피부 위에서 오래도록 지속되며, 착용자의 강인하면서도 세련된 이미지를 완성합니다. 한국 조향사의 섬세한 감각이 국제적인 수준의 향수로 구현된 작품입니다.',
        topNotes: ['블랙 페퍼', '베르가못', '카다멈'],
        middleNotes: ['가죽', '로즈 앱솔루트', '제라늄'],
        baseNotes: ['파촐리', '앰버', '머스크', '베티버'],
        usageTips: [
          '자신감을 표현하고 싶은 날에 뿌리면 강렬한 인상을 남깁니다',
          '블랙 패션과 함께 사용하면 시크한 무드를 극대화합니다',
          '저녁 모임이나 바에서 착용하면 분위기에 잘 녹아듭니다',
        ],
        bestSeasons: ['가을', '겨울'],
        bestOccasions: ['바', '파티', '저녁 모임'],
        sillage: '강함',
        longevity: '6~8시간',
      },
    ],
  },
};

export function getPerfumeById(id: string): Perfume | undefined {
  for (const recommendation of Object.values(perfumeDatabase)) {
    const perfume = recommendation.perfumes.find((p) => p.id === id);
    if (perfume) return perfume;
  }
  return undefined;
}

export function getRelatedPerfumes(id: string): Perfume[] {
  for (const recommendation of Object.values(perfumeDatabase)) {
    const perfume = recommendation.perfumes.find((p) => p.id === id);
    if (perfume) {
      return recommendation.perfumes.filter((p) => p.id !== id);
    }
  }
  return [];
}

export function getAllPerfumes(): Perfume[] {
  return Object.values(perfumeDatabase).flatMap((r) => r.perfumes);
}
