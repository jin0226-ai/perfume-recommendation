import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogListPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            향수 블로그
          </h1>
          <p className="text-xl text-gray-600">
            향수의 세계를 깊이 이해하는 가이드와 정보를 담았습니다
          </p>
        </div>

        {/* 카테고리 태그 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from(new Set(blogPosts.map((p) => p.category))).map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* 포스트 목록 */}
        <div className="space-y-6">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-sm text-gray-400">· 읽는 시간 {post.readingTime}분</span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                {post.description}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
              >
                자세히 읽기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">나에게 맞는 향수를 찾고 싶다면?</h2>
          <p className="text-gray-600 mb-6">Scent Match의 AI 이미지 분석 또는 취향 퀴즈로 맞춤 향수를 추천받아보세요.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              이미지로 추천받기
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-3 border-2 border-purple-400 text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300"
            >
              취향 퀴즈 하기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
