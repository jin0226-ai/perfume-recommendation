import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 히어로 섹션 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Scent Match 소개
          </h1>
          <p className="text-xl text-gray-600">
            이미지 분석 기술로 당신에게 완벽한 향수를 찾아드립니다
          </p>
        </div>

        {/* 서비스 소개 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">서비스 소개</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Scent Match는 사진 한 장으로 당신에게 어울리는 향수를 추천해주는 서비스입니다.
              색상 심리학과 이미지 분석 기술을 활용하여 사진 속 분위기를 파악하고,
              그에 맞는 니치 향수를 추천해드립니다.
            </p>
            <p>
              향수 선택은 어려운 일입니다. 수많은 브랜드와 향이 존재하고,
              직접 맡아보지 않으면 자신에게 맞는 향을 찾기 어렵습니다.
              Scent Match는 이러한 고민을 해결하기 위해 만들어졌습니다.
            </p>
            <p>
              당신의 스타일, 분위기, 개성이 담긴 사진을 업로드하면,
              이미지의 색상 톤, 채도, 명도를 분석하여 5가지 분위기 카테고리 중
              가장 어울리는 것을 찾아내고, 그에 맞는 향수 3종을 추천해드립니다.
            </p>
          </div>
        </section>

        {/* 분석 방식 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">어떻게 작동하나요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">이미지 업로드</h3>
              <p className="text-sm text-gray-600">
                분위기가 잘 드러나는 사진을 선택합니다. 인물 사진, 풍경, 패션 등 어떤 사진이든 가능합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">색상 분석</h3>
              <p className="text-sm text-gray-600">
                이미지의 색상을 분석합니다. 밝기, 채도, 색조, 대비 등을 종합적으로 평가합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">향수 추천</h3>
              <p className="text-sm text-gray-600">
                분석 결과에 맞는 분위기 카테고리를 선정하고, 어울리는 니치 향수 3종을 추천합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 5가지 분위기 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5가지 분위기 카테고리</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-semibold text-gray-800">Elegant (우아함)</h3>
                <p className="text-sm text-gray-600">
                  차분하고 세련된 분위기. 낮은 채도와 중간~높은 명도의 색상이 특징입니다.
                  파우더리하고 머스크 계열의 향수가 어울립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-800">Sporty (활동적)</h3>
                <p className="text-sm text-gray-600">
                  밝고 에너지 넘치는 분위기. 높은 명도와 채도, 따뜻한 색상이 특징입니다.
                  시트러스, 그린 계열의 상쾌한 향수가 어울립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
              <span className="text-2xl">💕</span>
              <div>
                <h3 className="font-semibold text-gray-800">Romantic (로맨틱)</h3>
                <p className="text-sm text-gray-600">
                  부드럽고 사랑스러운 분위기. 밝은 파스텔 톤과 중간 채도가 특징입니다.
                  플로럴, 프루티 계열의 향수가 어울립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
              <span className="text-2xl">🔷</span>
              <div>
                <h3 className="font-semibold text-gray-800">Modern (모던)</h3>
                <p className="text-sm text-gray-600">
                  도시적이고 세련된 분위기. 다양한 색상의 조화와 높은 대비가 특징입니다.
                  우디, 앰버 계열의 현대적인 향수가 어울립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
              <span className="text-2xl">🔥</span>
              <div>
                <h3 className="font-semibold text-gray-800">Intense (강렬함)</h3>
                <p className="text-sm text-gray-600">
                  깊고 강렬한 분위기. 어두운 색상과 극명한 채도 대비가 특징입니다.
                  스파이시, 오리엔탈 계열의 향수가 어울립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 추천 향수 브랜드 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">엄선된 니치 향수 브랜드</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Scent Match는 세계적으로 인정받는 니치 향수 브랜드와 국내 신진 브랜드의 향수를 큐레이션합니다.
            대중적인 향수가 아닌, 개성 있고 품질 좋은 향수를 추천해드립니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Maison Francis Kurkdjian</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Diptyque</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Le Labo</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Byredo</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Jo Malone</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Tom Ford</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">탬버린즈</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">912 퍼퓸</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            to="/"
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            지금 향수 추천받기
          </Link>
        </section>
      </div>
    </div>
  );
}
