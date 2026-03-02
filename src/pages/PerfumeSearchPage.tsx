import { useState } from 'react';

interface NoteItem {
  name: string;
  description: string;
}

interface PerfumeSearchResult {
  notFound: boolean;
  name: string;
  brand: string;
  topNotes: NoteItem[];
  middleNotes: NoteItem[];
  baseNotes: NoteItem[];
  characteristics: {
    summary: string;
    sillage: string;
    longevity: string;
    family: string;
  };
  suitability: {
    personality: string[];
    mood: string[];
    style: string;
  };
  seasons: {
    best: string[];
    good: string[];
    avoid: string[];
    reasoning: string;
  };
}

type TabId = 'notes' | 'characteristics' | 'suitability' | 'seasons';

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: 'notes', label: '향수 노트', icon: '🌸' },
  { id: 'characteristics', label: '특징', icon: '✨' },
  { id: 'suitability', label: '어울리는 사람', icon: '👤' },
  { id: 'seasons', label: '추천 계절', icon: '🍂' },
];

const SEASON_COLORS: Record<string, string> = {
  봄: 'bg-pink-100 text-pink-700 border border-pink-200',
  여름: 'bg-sky-100 text-sky-700 border border-sky-200',
  가을: 'bg-orange-100 text-orange-700 border border-orange-200',
  겨울: 'bg-blue-100 text-blue-700 border border-blue-200',
};

const SEASON_ICONS: Record<string, string> = {
  봄: '🌸',
  여름: '☀️',
  가을: '🍂',
  겨울: '❄️',
};

export function PerfumeSearchPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PerfumeSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('notes');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setActiveTab('notes');

    try {
      const response = await fetch('/api/perfume-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perfumeName: query.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || '알 수 없는 오류가 발생했습니다.');
        return;
      }

      if (data.notFound) {
        setError(`"${query}" 향수를 찾을 수 없습니다. 정확한 향수 이름을 입력해주세요.`);
        return;
      }

      setResult(data);
    } catch {
      setError('서버와 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            향수 노트 검색
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            향수 이름을 입력하면 탑·미들·베이스 노트와 특징을 알려드립니다
          </p>
        </div>

        {/* 검색 폼 */}
        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="예: Baccarat Rouge 540, 조말론 피오니 블러쉬..."
            className="flex-1 px-5 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm md:text-base"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm md:text-base"
          >
            {loading ? '검색 중...' : '검색'}
          </button>
        </form>

        {/* 로딩 */}
        {loading && (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-4">
            <div className="w-12 h-12 mx-auto border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <p className="text-gray-500">향수 정보를 분석하는 중입니다...</p>
          </div>
        )}

        {/* 에러 */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-2">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* 결과 */}
        {result && !loading && (
          <div className="space-y-6">
            {/* 향수 기본 정보 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🫙</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{result.name}</h2>
                <p className="text-gray-500 text-sm font-medium">{result.brand}</p>
                <span className="inline-block mt-1 px-3 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {result.characteristics.family}
                </span>
              </div>
            </div>

            {/* 탭 네비게이션 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-100">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 text-xs md:text-sm font-semibold transition-colors flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 ${
                      activeTab === tab.id
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                        : 'text-gray-500 hover:text-purple-500 hover:bg-gray-50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* 향수 노트 탭 */}
                {activeTab === 'notes' && (
                  <div className="space-y-6">
                    <NoteGroup
                      title="탑 노트"
                      subtitle="처음 15~30분"
                      notes={result.topNotes}
                      gradientFrom="from-pink-400"
                      gradientTo="to-rose-500"
                      badgeColor="bg-pink-100 text-pink-700"
                    />
                    <div className="border-t border-gray-100" />
                    <NoteGroup
                      title="미들 노트"
                      subtitle="30분~2시간"
                      notes={result.middleNotes}
                      gradientFrom="from-purple-400"
                      gradientTo="to-violet-500"
                      badgeColor="bg-purple-100 text-purple-700"
                    />
                    <div className="border-t border-gray-100" />
                    <NoteGroup
                      title="베이스 노트"
                      subtitle="2시간 이후"
                      notes={result.baseNotes}
                      gradientFrom="from-indigo-400"
                      gradientTo="to-blue-500"
                      badgeColor="bg-indigo-100 text-indigo-700"
                    />
                  </div>
                )}

                {/* 특징 탭 */}
                {activeTab === 'characteristics' && (
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {result.characteristics.summary}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <SpecCard
                        label="잔향 강도"
                        value={result.characteristics.sillage}
                        icon="💨"
                      />
                      <SpecCard
                        label="지속 시간"
                        value={result.characteristics.longevity}
                        icon="⏱️"
                      />
                      <SpecCard
                        label="향수 계열"
                        value={result.characteristics.family}
                        icon="🌿"
                      />
                    </div>
                  </div>
                )}

                {/* 어울리는 사람 탭 */}
                {activeTab === 'suitability' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        어울리는 성격 / 유형
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.suitability.personality.map((p, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-100" />
                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        어울리는 분위기 / 상황
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.suitability.mood.map((m, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-pink-50 text-pink-700 border border-pink-200 rounded-full text-sm font-medium"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-100" />
                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        어울리는 스타일
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {result.suitability.style}
                      </p>
                    </div>
                  </div>
                )}

                {/* 추천 계절 탭 */}
                {activeTab === 'seasons' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                        최고의 계절
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.seasons.best.map((s, i) => (
                          <span
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-bold ${SEASON_COLORS[s] || 'bg-gray-100 text-gray-700'}`}
                          >
                            {SEASON_ICONS[s] || '🌿'} {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    {result.seasons.good.length > 0 && (
                      <>
                        <div className="border-t border-gray-100" />
                        <div className="space-y-3">
                          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                            잘 어울리는 계절
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {result.seasons.good.map((s, i) => (
                              <span
                                key={i}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${SEASON_COLORS[s] || 'bg-gray-100 text-gray-700'} opacity-70`}
                              >
                                {SEASON_ICONS[s] || '🌿'} {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {result.seasons.avoid.length > 0 && (
                      <>
                        <div className="border-t border-gray-100" />
                        <div className="space-y-3">
                          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                            피하면 좋은 계절
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {result.seasons.avoid.map((s, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gray-100 text-gray-500 border border-gray-200 rounded-full text-sm font-medium line-through"
                              >
                                {SEASON_ICONS[s] || '🌿'} {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    <div className="border-t border-gray-100" />
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {result.seasons.reasoning}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 초기 안내 */}
        {!result && !loading && !error && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-4">
            <div className="text-5xl">🔍</div>
            <h3 className="font-semibold text-gray-700">검색하고 싶은 향수 이름을 입력하세요</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
              {['Baccarat Rouge 540', 'Black Orchid', '딥티크 필로시코스', '조말론 우드 세이지'].map((ex) => (
                <button
                  key={ex}
                  onClick={() => setQuery(ex)}
                  className="px-3 py-1 bg-gray-50 hover:bg-purple-50 hover:text-purple-600 rounded-full border border-gray-200 transition-colors"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NoteGroup({
  title,
  subtitle,
  notes,
  gradientFrom,
  gradientTo,
  badgeColor,
}: {
  title: string;
  subtitle: string;
  notes: NoteItem[];
  gradientFrom: string;
  gradientTo: string;
  badgeColor: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-bold">{title.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3 pl-13">
        {notes.map((note, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5 ${badgeColor}`}>
              {note.name}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center space-y-2">
      <span className="text-2xl">{icon}</span>
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  );
}
