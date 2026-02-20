import { useState } from 'react';
import { PerfumeResults } from '../components/PerfumeResults';
import { perfumeDatabase } from '../data/perfumes';
import type { VibeType } from '../data/perfumes';

interface QuizOption {
  label: string;
  scores: Partial<Record<VibeType, number>>;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'season',
    question: '가장 좋아하는 계절은?',
    options: [
      { label: '봄 - 벚꽃과 따뜻한 바람', scores: { romantic: 3, elegant: 1 } },
      { label: '여름 - 햇살과 바다', scores: { sporty: 3, modern: 1 } },
      { label: '가을 - 단풍과 선선한 공기', scores: { elegant: 3, intense: 1 } },
      { label: '겨울 - 눈과 따뜻한 실내', scores: { intense: 3, romantic: 1 } },
    ],
  },
  {
    id: 'fashion',
    question: '평소 즐겨 입는 패션 스타일은?',
    options: [
      { label: '클래식 & 미니멀', scores: { elegant: 3, modern: 1 } },
      { label: '애슬레저 & 캐주얼', scores: { sporty: 3, modern: 1 } },
      { label: '페미닌 & 로맨틱', scores: { romantic: 3, elegant: 1 } },
      { label: '올블랙 & 시크', scores: { intense: 3, modern: 1 } },
    ],
  },
  {
    id: 'activity',
    question: '주말에 가장 하고 싶은 활동은?',
    options: [
      { label: '미술관이나 갤러리 방문', scores: { elegant: 2, modern: 2 } },
      { label: '야외 운동이나 하이킹', scores: { sporty: 3, modern: 1 } },
      { label: '카페에서 책 읽기', scores: { romantic: 2, elegant: 2 } },
      { label: '바에서 칵테일 즐기기', scores: { intense: 2, modern: 2 } },
    ],
  },
  {
    id: 'color',
    question: '끌리는 색상 조합은?',
    options: [
      { label: '베이지 & 골드', scores: { elegant: 3, romantic: 1 } },
      { label: '화이트 & 스카이블루', scores: { sporty: 3, romantic: 1 } },
      { label: '핑크 & 라벤더', scores: { romantic: 3, modern: 1 } },
      { label: '블랙 & 버건디', scores: { intense: 3, elegant: 1 } },
    ],
  },
  {
    id: 'situation',
    question: '향수를 주로 언제 뿌리고 싶나요?',
    options: [
      { label: '중요한 미팅이나 행사', scores: { elegant: 3, intense: 1 } },
      { label: '일상적인 출근이나 외출', scores: { sporty: 2, modern: 2 } },
      { label: '데이트나 특별한 만남', scores: { romantic: 3, intense: 1 } },
      { label: '파티나 모임', scores: { modern: 2, intense: 2 } },
    ],
  },
  {
    id: 'keyword',
    question: '나를 가장 잘 표현하는 키워드는?',
    options: [
      { label: '세련됨 & 품격', scores: { elegant: 3, intense: 1 } },
      { label: '활기 & 자유로움', scores: { sporty: 3, modern: 1 } },
      { label: '따뜻함 & 부드러움', scores: { romantic: 3, elegant: 1 } },
      { label: '개성 & 독창성', scores: { modern: 3, intense: 1 } },
    ],
  },
];

export function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<VibeType | null>(null);

  const totalQuestions = quizQuestions.length;
  const progress = (currentStep / totalQuestions) * 100;

  const calculateResult = (allAnswers: number[]): VibeType => {
    const scores: Record<VibeType, number> = {
      elegant: 0,
      sporty: 0,
      romantic: 0,
      modern: 0,
      intense: 0,
    };

    allAnswers.forEach((answerIndex, questionIndex) => {
      const option = quizQuestions[questionIndex].options[answerIndex];
      for (const [vibe, score] of Object.entries(option.scores)) {
        scores[vibe as VibeType] += score;
      }
    });

    return Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0] as VibeType;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep + 1 < totalQuestions) {
      setCurrentStep(currentStep + 1);
    } else {
      const vibeResult = calculateResult(newAnswers);
      setResult(vibeResult);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const recommendation = perfumeDatabase[result];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <PerfumeResults
            recommendation={recommendation}
            reasoning={`취향 분석 결과, 당신은 ${recommendation.vibeName} 분위기를 가지고 있습니다. ${recommendation.vibeDescription}`}
            confidence={0.85}
          />
          <div className="text-center">
            <button
              onClick={handleRestart}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              다시 테스트하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            나에게 어울리는 향수 찾기
          </h1>
          <p className="text-gray-600">
            6가지 질문에 답하고 나만의 향수를 추천받아 보세요
          </p>
        </div>

        {/* 진행률 바 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>질문 {currentStep + 1} / {totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
            {currentQuestion.question}
          </h2>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 text-gray-700 font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
