import { Link } from 'react-router-dom';

export function GuidePage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 히어로 섹션 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            향수 가이드
          </h1>
          <p className="text-xl text-gray-600">
            향수의 세계를 탐험하는 완벽한 가이드
          </p>
        </div>

        {/* 향수 기초 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향수의 기초</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">향수의 구조: 탑, 미들, 베이스 노트</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                향수는 마치 음악처럼 여러 층의 노트로 구성되어 있습니다. 시간이 지남에 따라 각기 다른 향이 피어납니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">탑 노트 (Top Note)</h4>
                  <p className="text-sm text-gray-600">
                    뿌린 직후 5~30분간 느껴지는 첫인상. 시트러스, 허브 등 가볍고 휘발성이 강한 향료가 주로 사용됩니다.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-800 mb-2">미들 노트 (Middle/Heart Note)</h4>
                  <p className="text-sm text-gray-600">
                    30분~2시간 후 나타나는 향수의 심장. 플로럴, 스파이시 등 향수의 성격을 결정하는 핵심 향료입니다.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">베이스 노트 (Base Note)</h4>
                  <p className="text-sm text-gray-600">
                    2시간 이후부터 사라질 때까지 남는 잔향. 우드, 머스크, 앰버 등 무거운 향료가 오래 지속됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 향수 농도 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향수 농도 가이드</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            향수는 향료 농도에 따라 종류가 나뉩니다. 농도가 높을수록 향이 진하고 오래 지속됩니다.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-20 text-center">
                <span className="text-2xl font-bold text-purple-600">20-30%</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">퍼퓸 (Parfum/Extrait)</h4>
                <p className="text-sm text-gray-600">가장 농축된 형태. 8-12시간 이상 지속. 소량으로도 강한 향.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-20 text-center">
                <span className="text-2xl font-bold text-pink-600">15-20%</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">오 드 퍼퓸 (Eau de Parfum, EDP)</h4>
                <p className="text-sm text-gray-600">가장 인기 있는 농도. 6-8시간 지속. 향이 풍부하면서도 부담스럽지 않음.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-20 text-center">
                <span className="text-2xl font-bold text-blue-600">5-15%</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">오 드 뚜왈렛 (Eau de Toilette, EDT)</h4>
                <p className="text-sm text-gray-600">일상적으로 사용하기 좋음. 3-5시간 지속. 가볍고 상쾌한 느낌.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-20 text-center">
                <span className="text-2xl font-bold text-green-600">2-5%</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">오 드 코롱 (Eau de Cologne, EDC)</h4>
                <p className="text-sm text-gray-600">가장 가벼운 형태. 1-2시간 지속. 시원하고 산뜻한 느낌.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 향수 계열 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향수 계열 (Fragrance Family)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            향수는 주요 향료에 따라 여러 계열로 분류됩니다. 자신이 좋아하는 계열을 알면 향수 선택이 쉬워집니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🍋 시트러스 (Citrus)</h4>
              <p className="text-sm text-gray-600 mb-2">
                레몬, 오렌지, 자몽, 베르가못 등의 상쾌한 감귤류 향.
                여름에 특히 잘 어울리며 낮 시간에 적합합니다.
              </p>
              <p className="text-xs text-gray-500">대표 향수: Acqua di Parma, Jo Malone Lime Basil & Mandarin</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🌸 플로럴 (Floral)</h4>
              <p className="text-sm text-gray-600 mb-2">
                장미, 자스민, 튜베로즈, 모란 등 꽃향기.
                가장 인기 있는 계열로 로맨틱하고 여성스러운 느낌.
              </p>
              <p className="text-xs text-gray-500">대표 향수: Chanel No.5, Miss Dior, Flowerbomb</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🪵 우디 (Woody)</h4>
              <p className="text-sm text-gray-600 mb-2">
                샌달우드, 시더우드, 베티버, 파촐리 등 나무 향.
                따뜻하고 깊이 있는 느낌으로 가을/겨울에 인기.
              </p>
              <p className="text-xs text-gray-500">대표 향수: Tom Ford Oud Wood, Le Labo Santal 33</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🌶️ 스파이시 (Spicy)</h4>
              <p className="text-sm text-gray-600 mb-2">
                시나몬, 카다멈, 핑크페퍼, 정향 등 향신료 향.
                따뜻하고 강렬한 인상을 주며 저녁 자리에 적합.
              </p>
              <p className="text-xs text-gray-500">대표 향수: YSL Opium, Spicebomb</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🌿 그린 (Green/Herbal)</h4>
              <p className="text-sm text-gray-600 mb-2">
                녹차, 바질, 민트, 풀 향기 등 자연스러운 초록빛 향.
                신선하고 자연친화적인 느낌.
              </p>
              <p className="text-xs text-gray-500">대표 향수: Bvlgari Green Tea, Hermès Un Jardin</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-2">🔶 오리엔탈/앰버 (Oriental/Amber)</h4>
              <p className="text-sm text-gray-600 mb-2">
                바닐라, 앰버, 머스크, 인센스 등 동양적인 향.
                관능적이고 신비로운 분위기로 저녁/특별한 날에 적합.
              </p>
              <p className="text-xs text-gray-500">대표 향수: Tom Ford Black Orchid, Guerlain Shalimar</p>
            </div>
          </div>
        </section>

        {/* 향수 사용 팁 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향수 사용 팁</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">1</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">맥박 포인트에 뿌리기</h4>
                <p className="text-sm text-gray-600">
                  손목 안쪽, 귀 뒤, 목 옆, 팔꿈치 안쪽 등 맥박이 뛰는 곳에 뿌리면 체온에 의해 향이 자연스럽게 퍼집니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold">2</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">문지르지 않기</h4>
                <p className="text-sm text-gray-600">
                  향수를 뿌린 후 손목을 비비면 향료 분자가 파괴되어 향이 변질될 수 있습니다. 자연 건조시키세요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">3</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">보습 후 뿌리기</h4>
                <p className="text-sm text-gray-600">
                  건조한 피부보다 촉촉한 피부에 향이 더 오래 지속됩니다. 무향 로션을 바른 후 향수를 뿌려보세요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">4</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">적정량 사용하기</h4>
                <p className="text-sm text-gray-600">
                  "향수는 발견되어야지, 알려지면 안 된다"는 말처럼 은은하게 향기가 나도록 2-3번만 뿌리세요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold">5</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">올바른 보관</h4>
                <p className="text-sm text-gray-600">
                  직사광선과 습기를 피해 서늘하고 어두운 곳에 보관하세요. 화장실은 습도가 높아 향수 보관에 적합하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 시즌별 향수 선택 */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">계절별 향수 선택 가이드</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-700 mb-3">🌸 봄</h4>
              <p className="text-sm text-gray-600 mb-2">
                가볍고 상쾌한 플로럴, 그린 계열 추천. 화사하면서도 부드러운 향이 봄 날씨와 잘 어울립니다.
              </p>
              <p className="text-xs text-gray-500">추천: 플로럴, 그린, 라이트 시트러스</p>
            </div>

            <div className="border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-700 mb-3">☀️ 여름</h4>
              <p className="text-sm text-gray-600 mb-2">
                시원하고 청량한 시트러스, 아쿠아틱 계열 추천. 더운 날씨에 상쾌함을 더해줍니다.
              </p>
              <p className="text-xs text-gray-500">추천: 시트러스, 아쿠아틱, 코코넛</p>
            </div>

            <div className="border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-orange-700 mb-3">🍂 가을</h4>
              <p className="text-sm text-gray-600 mb-2">
                따뜻하고 포근한 우디, 스파이시 계열 추천. 선선한 날씨에 깊이 있는 향이 잘 어울립니다.
              </p>
              <p className="text-xs text-gray-500">추천: 우디, 스파이시, 앰버</p>
            </div>

            <div className="border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-700 mb-3">❄️ 겨울</h4>
              <p className="text-sm text-gray-600 mb-2">
                무겁고 관능적인 오리엔탈, 바닐라 계열 추천. 추운 날씨에 따뜻함을 더해줍니다.
              </p>
              <p className="text-xs text-gray-500">추천: 오리엔탈, 바닐라, 우드, 인센스</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-gray-600 mb-6">
            이제 향수에 대해 더 잘 알게 되셨나요? 지금 바로 나에게 어울리는 향수를 찾아보세요!
          </p>
          <Link
            to="/"
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            향수 추천받기
          </Link>
        </section>
      </div>
    </div>
  );
}
