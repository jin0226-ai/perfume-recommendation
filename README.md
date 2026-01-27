# 🌸 Scent Match - AI 향수 추천 웹사이트

당신의 사진을 분석하여 분위기에 맞는 완벽한 향수를 추천하는 AI 기반 웹 애플리케이션입니다.

![Scent Match Banner](https://via.placeholder.com/1200x400/E5E7EB/6B7280?text=Scent+Match+-+AI+Perfume+Recommendation)

## ✨ 주요 기능

- 📸 **이미지 업로드**: 드래그 앤 드롭 또는 클릭으로 간편하게 사진 업로드
- 🤖 **AI 분석**: Claude AI가 얼굴, 패션, 체형, 전체적인 분위기를 종합 분석
- 💐 **맞춤 추천**: 5가지 분위기 타입별로 3개의 향수 추천
- 🌍 **니치 향수 & 한국 향수**: 유명 니치 향수 브랜드와 한국 향수 브랜드 포함
- 🔗 **Fragrantica 연동**: 각 향수의 상세 정보 링크 제공

## 🎭 5가지 분위기 타입

### 1. 우아하고 클래식한 (Elegant)
- **특징**: 성숙하고 세련된 이미지, 정돈된 느낌
- **패션**: 모노톤, 테일러드, 미니멀
- **추천 향수**: Baccarat Rouge 540, Philosykos, Pumkin Pie

### 2. 스포티하고 활동적인 (Sporty)
- **특징**: 밝고 건강한 이미지
- **패션**: 캐주얼, 스트릿, 스포츠웨어
- **추천 향수**: Bergamote 22, Sundazed, Citrus Fresh

### 3. 로맨틱하고 부드러운 (Romantic)
- **특징**: 부드럽고 여성스러운/중성적 매력
- **패션**: 플로럴, 파스텔, 플로우 실루엣
- **추천 향수**: Delina, Peony & Blush Suede, Shell Musk

### 4. 모던하고 독특한 (Modern)
- **특징**: 개성 있고 트렌디한 이미지
- **패션**: 믹스매치, 유니크 스타일
- **추천 향수**: Santal 33, Gypsy Water, Earth Essence

### 5. 시크하고 강렬한 (Intense)
- **특징**: 카리스마 있고 강인한 이미지
- **패션**: 올블랙, 레더, 당당한 스타일
- **추천 향수**: Interlude Man, Tobacco Vanille, Signature Noir

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI**: Anthropic Claude 3.5 Sonnet (Vision API)
- **Data Source**: Fragrantica

## 📦 설치 및 실행

### 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn
- Anthropic API Key ([발급 방법](https://console.anthropic.com/))

### 설치

```bash
# 의존성 설치
npm install
```

### 실행

```bash
# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🔑 API 키 설정

웹사이트에서 처음 사용 시 Anthropic API 키를 입력하라는 안내가 표시됩니다.

1. [Anthropic Console](https://console.anthropic.com/)에서 계정 생성
2. API Keys 섹션에서 새 API 키 생성
3. 웹사이트에서 API 키 입력

> **보안 참고**: 현재 버전은 클라이언트 사이드에서 API 키를 사용합니다. 프로덕션 환경에서는 백엔드 서버를 통해 API를 호출하는 것이 권장됩니다.

## 📂 프로젝트 구조

```
perfume-recommendation/
├── src/
│   ├── components/
│   │   ├── ImageUpload.tsx      # 이미지 업로드 컴포넌트
│   │   └── PerfumeResults.tsx   # 향수 추천 결과 컴포넌트
│   ├── data/
│   │   └── perfumes.ts          # 향수 데이터베이스
│   ├── services/
│   │   └── aiAnalysis.ts        # AI 분석 서비스
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   ├── index.css                # 전역 스타일
│   └── main.tsx                 # 앱 엔트리 포인트
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 주요 컴포넌트

### ImageUpload
- 드래그 앤 드롭 지원
- 이미지 미리보기
- 파일 타입 검증

### PerfumeResults
- 분위기 분석 결과 표시
- 신뢰도 별점 표시
- 향수 카드 그리드 레이아웃
- Fragrantica 링크 연동

### AI Analysis Service
- Claude Vision API 연동
- 이미지를 Base64로 변환
- 5가지 분위기 분류
- 신뢰도 점수 및 분석 이유 반환

## 🌐 배포

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify 배포

1. GitHub에 코드 푸시
2. Netlify에서 새 프로젝트 연결
3. 빌드 명령어: `npm run build`
4. 배포 디렉토리: `dist`

## 🔮 향후 계획

- [ ] 백엔드 API 서버 구현 (API 키 보안 강화)
- [ ] 사용자 리뷰 및 평점 시스템
- [ ] 향수 필터링 (가격대, 브랜드, 노트)
- [ ] 소셜 공유 기능
- [ ] 다국어 지원 (영어, 일본어)
- [ ] 향수 구매 링크 연동
- [ ] 사용자 히스토리 저장

## 🙏 참고 자료

- [Fragrantica](https://www.fragrantica.com/) - 향수 정보 데이터베이스
- [Anthropic Claude](https://www.anthropic.com/) - AI 이미지 분석
- 한국 니치 향수 브랜드: Tamburins, 912 Perfume, 422, Pesade
- 유명 니치 향수 브랜드: Byredo, Le Labo, Maison Francis Kurkdjian, Diptyque

## 📄 라이선스

MIT License

## 👨‍💻 개발자

Made with ❤️ by Claude & Human

---

**Note**: 이 프로젝트는 교육 및 데모 목적으로 제작되었습니다. 실제 향수 구매 전에는 테스터를 직접 체험해보시는 것을 권장합니다.
