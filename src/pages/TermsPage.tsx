export function TermsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">이용약관</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 Scent Match(이하 "서비스")가 제공하는 향수 추천 서비스의 이용조건 및
                절차, 서비스와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제2조 (정의)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>"서비스"란 이용자가 업로드한 이미지를 분석하여 향수를 추천하는 웹 기반 서비스를 말합니다.</li>
                <li>"이용자"란 본 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
                <li>"콘텐츠"란 서비스에서 제공하는 향수 정보, 추천 결과, 가이드 등 모든 정보를 말합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
                <li>서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
                <li>약관이 변경되는 경우 서비스는 변경사항을 시행일 7일 전부터 서비스 내 공지합니다.</li>
                <li>이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제4조 (서비스의 내용)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                서비스가 제공하는 주요 기능은 다음과 같습니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>이미지 색상 분석을 통한 분위기 파악</li>
                <li>분석 결과에 기반한 맞춤 향수 추천</li>
                <li>향수 관련 정보 및 가이드 제공</li>
                <li>추천 향수에 대한 상세 정보 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제5조 (서비스 이용)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>서비스는 무료로 제공되며, 별도의 회원가입 없이 이용할 수 있습니다.</li>
                <li>이용자는 본 약관 및 서비스가 정한 규정을 준수하여야 합니다.</li>
                <li>서비스는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 24시간 운영됩니다.</li>
                <li>서비스는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상
                    상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제6조 (이용자의 의무)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                이용자는 다음 행위를 하여서는 안 됩니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>타인의 개인정보를 도용하거나 허위 정보를 입력하는 행위</li>
                <li>서비스에 게시된 정보를 무단으로 변경하거나 삭제하는 행위</li>
                <li>서비스의 운영을 고의로 방해하는 행위</li>
                <li>불법적이거나 타인에게 해를 끼치는 이미지를 업로드하는 행위</li>
                <li>음란물, 폭력적, 혐오스러운 이미지를 업로드하는 행위</li>
                <li>서비스의 소스코드를 무단으로 복제, 배포, 수정하는 행위</li>
                <li>기타 관련 법령에 위배되는 행위</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제7조 (지적재산권)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>서비스가 제공하는 모든 콘텐츠에 대한 저작권 및 지적재산권은 서비스에 귀속됩니다.</li>
                <li>이용자가 업로드한 이미지에 대한 저작권은 해당 이용자에게 귀속됩니다.</li>
                <li>이용자는 서비스를 이용함으로써 얻은 정보를 서비스의 사전 승낙 없이
                    복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로 이용하거나
                    제3자에게 이용하게 할 수 없습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제8조 (면책조항)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>서비스가 제공하는 향수 추천 결과는 참고용이며, 실제 구매 결정은 이용자의 판단에 따릅니다.</li>
                <li>서비스는 추천 결과의 정확성이나 신뢰성을 보장하지 않습니다.</li>
                <li>서비스는 이용자가 서비스를 이용하여 기대하는 결과를 얻지 못한 것에 대해 책임을 지지 않습니다.</li>
                <li>서비스는 이용자가 업로드한 이미지로 인해 발생하는 문제에 대해 책임을 지지 않습니다.</li>
                <li>서비스는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인한
                    서비스 중단에 대해 책임을 지지 않습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제9조 (광고 게재)</h2>
              <p className="text-gray-600 leading-relaxed">
                서비스는 운영과 관련하여 서비스 화면에 광고를 게재할 수 있습니다.
                서비스는 Google AdSense를 통해 광고를 제공하며, 광고 내용에 대한 책임은
                광고주에게 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">제10조 (분쟁 해결)</h2>
              <ul className="list-decimal list-inside text-gray-600 space-y-2">
                <li>서비스와 이용자 간에 발생한 분쟁에 관하여는 대한민국 법을 적용합니다.</li>
                <li>서비스와 이용자 간에 발생한 분쟁에 관한 소송은 서비스의 본사 소재지를
                    관할하는 법원을 전속 관할 법원으로 합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">부칙</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 2024년 1월 1일부터 시행됩니다.
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
