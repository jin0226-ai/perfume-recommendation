import { useParams, Link } from 'react-router-dom';
import { getPerfumeById, getRelatedPerfumes } from '../data/perfumes';

export function PerfumeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const perfume = id ? getPerfumeById(id) : undefined;
  const relatedPerfumes = id ? getRelatedPerfumes(id) : [];

  if (!perfume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">향수를 찾을 수 없습니다</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 브레드크럼 */}
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-purple-600 transition-colors">홈</Link>
          <span className="mx-2">/</span>
          <Link to="/guide" className="hover:text-purple-600 transition-colors">향수 가이드</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{perfume.name}</span>
        </nav>

        {/* 이미지 + 기본 정보 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* 이미지 */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 min-h-[300px]">
              <img
                src={perfume.imageUrl}
                alt={perfume.name}
                className="max-h-96 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* 기본 정보 */}
            <div className="p-8 space-y-6">
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  perfume.type === 'niche'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-pink-100 text-pink-700'
                }`}>
                  {perfume.type === 'niche' ? '니치 향수' : '한국 향수'}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{perfume.name}</h1>
                <p className="text-lg text-gray-500 font-medium mt-1">{perfume.brand}</p>
              </div>
              <p className="text-gray-600 leading-relaxed">{perfume.description}</p>

              {/* 주요 스펙 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">잔향 강도</p>
                  <p className="text-sm font-bold text-gray-800">{perfume.sillage}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">지속 시간</p>
                  <p className="text-sm font-bold text-gray-800">{perfume.longevity}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">추천 계절</p>
                  <p className="text-sm font-bold text-gray-800">{perfume.bestSeasons.join(', ')}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">추천 상황</p>
                  <p className="text-sm font-bold text-gray-800">{perfume.bestOccasions.join(', ')}</p>
                </div>
              </div>

              {perfume.fragranticaUrl && (
                <a
                  href={perfume.fragranticaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  <span>Fragrantica에서 보기</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 노트 피라미드 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">향수 노트 피라미드</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NoteSection
              title="탑 노트"
              subtitle="처음 15~30분"
              notes={perfume.topNotes}
              color="from-pink-400 to-rose-500"
            />
            <NoteSection
              title="미들 노트"
              subtitle="30분~2시간"
              notes={perfume.middleNotes}
              color="from-purple-400 to-violet-500"
            />
            <NoteSection
              title="베이스 노트"
              subtitle="2시간 이후"
              notes={perfume.baseNotes}
              color="from-indigo-400 to-blue-500"
            />
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">상세 설명</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {perfume.extendedDescription}
          </p>
        </div>

        {/* 사용 팁 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">사용 팁</h2>
          <ul className="space-y-3">
            {perfume.usageTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-600 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 관련 향수 */}
        {relatedPerfumes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">같은 바이브의 향수</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPerfumes.map((related) => (
                <Link
                  key={related.id}
                  to={`/perfume/${related.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex"
                >
                  <div className="w-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                    <img
                      src={related.imageUrl}
                      alt={related.name}
                      className="w-full h-full object-contain p-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-gray-800">{related.name}</h3>
                    <p className="text-sm text-gray-500">{related.brand}</p>
                    <div className="flex flex-wrap gap-1">
                      {related.notes.slice(0, 3).map((note, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NoteSection({
  title,
  subtitle,
  notes,
  color,
}: {
  title: string;
  subtitle: string;
  notes: string[];
  color: string;
}) {
  return (
    <div className="text-center space-y-3">
      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
        <span className="text-white text-sm font-bold">{title.charAt(0)}</span>
      </div>
      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {notes.map((note, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
