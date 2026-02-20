export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            문의하기
          </h1>
          <p className="text-gray-600 text-lg">
            Scent Match에 대해 궁금한 점이 있으시면 언제든 연락해 주세요
          </p>
        </div>

        {/* 연락처 정보 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">연락처</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">이메일</h3>
                <a href="mailto:scentmatch.help@gmail.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                  scentmatch.help@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">영업일 기준 1~2일 내 답변드립니다</p>
              </div>
            </div>
          </div>
        </div>

        {/* 자주 묻는 질문 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">자주 묻는 질문</h2>
          <div className="space-y-6">
            <FaqItem
              question="Scent Match는 무료인가요?"
              answer="네, Scent Match의 모든 기능은 무료로 제공됩니다. 이미지 분석과 취향 분석 퀴즈를 통해 무료로 향수 추천을 받으실 수 있습니다."
            />
            <FaqItem
              question="이미지 분석은 어떻게 작동하나요?"
              answer="업로드하신 이미지의 색상, 밝기, 채도 등을 AI가 분석하여 이미지의 전체적인 분위기(바이브)를 파악합니다. 이를 기반으로 5가지 분위기 카테고리(우아한, 스포티한, 로맨틱한, 모던한, 시크한) 중 가장 적합한 향수를 추천해드립니다."
            />
            <FaqItem
              question="추천받은 향수를 어디서 구매할 수 있나요?"
              answer="Scent Match는 향수 판매 서비스가 아닌 추천 서비스입니다. 추천받은 향수는 백화점, 공식 온라인 스토어, 또는 Fragrantica 등의 향수 정보 사이트에서 상세 정보를 확인하고 구매하실 수 있습니다."
            />
            <FaqItem
              question="업로드한 이미지는 저장되나요?"
              answer="아닙니다. 업로드하신 이미지는 분석 목적으로만 사용되며, 서버에 저장되지 않습니다. 분석이 완료되면 이미지 데이터는 즉시 삭제됩니다. 자세한 내용은 개인정보처리방침을 참고해 주세요."
            />
            <FaqItem
              question="향수 추천이 마음에 들지 않으면 어떻게 하나요?"
              answer="다른 이미지로 다시 분석하거나, 취향 분석 퀴즈를 통해 다른 각도에서 추천을 받아보실 수 있습니다. 각 분석 방법은 서로 다른 기준으로 향수를 추천하므로 다양한 결과를 경험하실 수 있습니다."
            />
            <FaqItem
              question="니치 향수와 한국 향수의 차이는 무엇인가요?"
              answer="니치 향수는 소규모 고급 향수 하우스에서 만든 향수로, 독특하고 고품질의 원료를 사용합니다. 한국 향수는 국내 브랜드에서 만든 향수로, 한국인의 취향에 맞춘 섬세한 향을 특징으로 합니다. Scent Match는 두 카테고리 모두에서 엄선된 향수를 추천합니다."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
      <h3 className="font-semibold text-gray-800 mb-2">Q. {question}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
    </div>
  );
}
