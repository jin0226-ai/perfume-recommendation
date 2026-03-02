import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPost, blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">포스트를 찾을 수 없습니다</h1>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* 브레드크럼 */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-purple-600 transition-colors">홈</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-purple-600 transition-colors">블로그</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 line-clamp-1">{post.title}</span>
        </nav>

        {/* 아티클 헤더 */}
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">{post.description}</p>
        </header>

        {/* 본문 */}
        <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-10">
          <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('**') && block.endsWith('**') && !block.includes('\n')) {
                return (
                  <p key={i} className="font-semibold text-gray-800">
                    {block.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (block.startsWith('- ') || block.includes('\n- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 pl-2">
                    {items.map((item, j) => {
                      const text = item.replace('- ', '');
                      const parts = text.split(/\*\*(.*?)\*\*/g);
                      return (
                        <li key={j} className="text-gray-700">
                          {parts.map((p, k) =>
                            k % 2 === 1 ? <strong key={k}>{p}</strong> : p
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              if (block.includes('|') && block.includes('---')) {
                const lines = block.trim().split('\n').filter((l) => !l.match(/^[\|\s\-]+$/));
                const headers = lines[0].split('|').filter(Boolean).map((h) => h.trim());
                const rows = lines.slice(1).map((l) => l.split('|').filter(Boolean).map((c) => c.trim()));
                return (
                  <div key={i} className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-50">
                          {headers.map((h, j) => (
                            <th key={j} className="text-left p-3 font-semibold text-gray-800 border border-gray-200">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, j) => (
                          <tr key={j} className="border-b border-gray-100 hover:bg-gray-50">
                            {row.map((cell, k) => (
                              <td key={k} className="p-3 text-gray-600 border border-gray-200">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              // 일반 단락 (볼드 처리 포함)
              const parts = block.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-gray-900">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </div>
        </article>

        {/* 관련 포스트 */}
        {related.length > 0 && (
          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">관련 글</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 block"
                >
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {r.category}
                  </span>
                  <h3 className="mt-3 font-bold text-gray-900 leading-snug hover:text-purple-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-10">
          <h2 className="text-xl font-bold text-gray-800 mb-2">나에게 맞는 향수가 궁금하다면?</h2>
          <p className="text-gray-600 mb-6 text-sm">Scent Match로 사진 한 장 또는 퀴즈로 맞춤 향수를 추천받아보세요.</p>
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            향수 추천받기
          </Link>
        </section>
      </div>
    </div>
  );
}
