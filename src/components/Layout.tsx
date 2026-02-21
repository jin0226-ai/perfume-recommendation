import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 네비게이션 */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Scent Match
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                이미지 분석
              </Link>
              <Link
                to="/quiz"
                className={`text-sm font-medium transition-colors ${isActive('/quiz') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                취향 분석
              </Link>
              <Link
                to="/ingredient"
                className={`text-sm font-medium transition-colors ${isActive('/ingredient') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                향료 선택
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                서비스 소개
              </Link>
              <Link
                to="/guide"
                className={`text-sm font-medium transition-colors ${isActive('/guide') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                향수 가이드
              </Link>
            </div>

            {/* 모바일 메뉴 */}
            <div className="md:hidden flex items-center space-x-4">
              <Link to="/quiz" className="text-gray-600 text-sm">취향</Link>
              <Link to="/ingredient" className="text-gray-600 text-sm">향료</Link>
              <Link to="/guide" className="text-gray-600 text-sm">가이드</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 브랜드 */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Scent Match
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                이미지 색상 분석을 통해 당신에게 어울리는 향수를 추천해드립니다.
                AI 기술을 활용하여 개인의 분위기와 스타일에 맞는 니치 향수를 찾아보세요.
              </p>
            </div>

            {/* 서비스 링크 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">서비스</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    이미지 분석
                  </Link>
                </li>
                <li>
                  <Link to="/quiz" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    취향 분석
                  </Link>
                </li>
                <li>
                  <Link to="/ingredient" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    향료 선택
                  </Link>
                </li>
                <li>
                  <Link to="/guide" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    향수 가이드
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    서비스 소개
                  </Link>
                </li>
              </ul>
            </div>

            {/* 정책 링크 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">정책</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Scent Match. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
