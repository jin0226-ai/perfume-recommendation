export function PrivacyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-600 leading-relaxed">
              Scent Match(이하 "서비스")는 이용자의 개인정보를 중요시하며,
              「개인정보 보호법」을 준수하고 있습니다. 본 개인정보처리방침을 통해
              이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
              개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. 수집하는 개인정보 항목</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                서비스는 향수 추천 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>업로드 이미지:</strong> 향수 추천을 위해 사용자가 업로드하는 사진</li>
                <li><strong>자동 수집 정보:</strong> 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 브라우저 유형</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. 개인정보의 수집 및 이용 목적</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                수집한 개인정보는 다음의 목적을 위해 활용됩니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>이미지 분석을 통한 맞춤 향수 추천 서비스 제공</li>
                <li>서비스 개선 및 신규 기능 개발</li>
                <li>서비스 이용 통계 분석</li>
                <li>서비스 장애 및 오류 해결</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
              <p className="text-gray-600 leading-relaxed">
                사용자가 업로드한 이미지는 분석 완료 후 <strong>즉시 삭제</strong>됩니다.
                서비스는 이미지를 서버에 저장하지 않으며, 모든 분석은 사용자의 브라우저에서 처리됩니다.
                자동 수집되는 로그 정보는 서비스 개선 목적으로 최대 1년간 보관 후 파기됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. 쿠키(Cookie)의 운용</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                서비스는 이용자에게 개인화된 서비스를 제공하기 위해 쿠키를 사용합니다.
                쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 작은 텍스트 파일입니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나,
                모든 쿠키의 저장을 거부할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. 광고 서비스</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 Google AdSense를 통해 광고를 게재하고 있습니다.
                Google AdSense는 관심 기반 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
                Google의 광고 쿠키 사용에 대한 자세한 정보는{' '}
                <a
                  href="https://policies.google.com/technologies/ads?hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Google 광고 정책
                </a>
                에서 확인할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. 이용자의 권리</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                이용자는 언제든지 개인정보 처리와 관련하여 다음의 권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>개인정보 처리에 관한 정보를 제공받을 권리</li>
                <li>개인정보 처리에 관한 동의 여부, 동의 범위 등을 선택하고 결정할 권리</li>
                <li>개인정보 처리 여부를 확인하고 개인정보에 대해 열람을 요구할 권리</li>
                <li>개인정보 처리 정지, 정정, 삭제 및 파기를 요구할 권리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. 개인정보 보호책임자</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여
                아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  <strong>이메일:</strong> contact@scentmatch.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. 개인정보처리방침의 변경</h2>
              <p className="text-gray-600 leading-relaxed">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
                추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
                고지할 것입니다.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>시행일:</strong> 2024년 1월 1일
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>최종 수정일:</strong> 2024년 1월 1일
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
