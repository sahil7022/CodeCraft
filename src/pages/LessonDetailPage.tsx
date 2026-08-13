import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, CheckCircle, HelpCircle, ArrowLeft, ArrowRight, Award, Zap } from 'lucide-react';
import { SEED_LESSONS, SEED_QUIZZES } from '../../server/db/seedData';
import { AlgorithmVisualizer } from '../components/visualizers/AlgorithmVisualizer';
import { useAuth } from '../context/AuthContext';

export const LessonDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { updateXp } = useAuth();

  const lesson = SEED_LESSONS.find(l => l.slug === slug) || SEED_LESSONS[0];
  const quizzes = SEED_QUIZZES.filter(q => q.lessonId === lesson.id);

  const [selectedAnswers, setSelectedAnswers] = useState<{ [quizId: string]: number }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<{ [quizId: string]: boolean }>({});
  const [quizSuccess, setQuizSuccess] = useState<boolean>(false);

  const handleOptionSelect = (quizId: string, optionIdx: number) => {
    if (submittedQuiz[quizId]) return;
    setSelectedAnswers(prev => ({ ...prev, [quizId]: optionIdx }));
  };

  const handleQuizSubmit = (quizId: string, correctIdx: number) => {
    const isCorrect = selectedAnswers[quizId] === correctIdx;
    setSubmittedQuiz(prev => ({ ...prev, [quizId]: true }));
    if (isCorrect) {
      updateXp(50);
      setQuizSuccess(true);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/learn"
          className="inline-flex items-center space-x-2 text-xs font-label-caps font-bold text-outline hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wapas Roadmap Par Jao</span>
        </Link>

        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-surface-container text-tertiary border border-tertiary/20">
          Module: {lesson.visualizationType.toUpperCase()}
        </span>
      </div>

      {/* Lesson Title Header */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline-lg text-on-surface">
          {lesson.title}
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          {lesson.explanation}
        </p>
      </div>

      {/* Section 1: Relatable Situation & Funny Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Relatable Situation Card */}
        <div className="glass-panel p-6 rounded-2xl border border-tertiary/30 bg-tertiary/5 flex flex-col gap-3">
          <div className="flex items-center space-x-2 text-tertiary font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Relatable Real-Life Situation 🏫</span>
          </div>
          <p className="text-sm text-on-surface leading-relaxed font-body-md">
            {lesson.realLifeExample}
          </p>
        </div>

        {/* Unexpected Funny Comparison Card */}
        <div className="glass-panel p-6 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col gap-3">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <span>Unexpected Comparison 😂</span>
          </div>
          <p className="text-sm text-on-surface leading-relaxed font-body-md">
            {lesson.funnyComparison}
          </p>
        </div>
      </div>

      {/* Section 2: Technical Explanation */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
        <h3 className="text-xl font-bold font-headline-md text-on-surface flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-tertiary" />
          <span>Technical Explanation (Bina Bakchodi Ke)</span>
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed font-body-md">
          {lesson.technicalNote}
        </p>
      </div>

      {/* Section 3: Interactive Animated Algorithm Visualizer */}
      <div className="glass-panel-strong p-4 md:p-8 rounded-3xl border border-white/10 flex flex-col gap-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-tertiary uppercase tracking-wider">Live Teaching Animation</span>
            <h2 className="text-xl md:text-2xl font-extrabold font-headline-md text-on-surface mt-1">
              Visual Step Animation & Synchronized Code 🎬
            </h2>
          </div>
        </div>

        <AlgorithmVisualizer
          type={lesson.visualizationType}
          codeSnippet={lesson.codeSnippet}
        />
      </div>

      {/* Section 4: Interactive Quiz & Practice */}
      {quizzes.length > 0 && (
        <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
          <div className="flex items-center space-x-2 text-xl font-bold font-headline-md text-on-surface">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <span>Interactive Quiz: Test Your Knowledge 🧠 (+50 XP)</span>
          </div>

          {quizzes.map((quiz) => {
            const isSubmitted = submittedQuiz[quiz.id];
            const userChoice = selectedAnswers[quiz.id];
            const isCorrect = userChoice === quiz.correctAnswer;

            return (
              <div key={quiz.id} className="flex flex-col gap-4 bg-surface-container-low p-5 rounded-2xl border border-white/5">
                <h4 className="text-base font-bold text-on-surface">
                  {quiz.question}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quiz.options.map((opt, optIdx) => {
                    const isSelected = userChoice === optIdx;

                    let btnClass = "bg-surface-container border-white/10 text-on-surface hover:bg-white/10";
                    if (isSubmitted) {
                      if (optIdx === quiz.correctAnswer) {
                        btnClass = "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_15px_rgba(52,211,153,0.4)]";
                      } else if (isSelected) {
                        btnClass = "bg-red-500/20 border-red-400 text-red-300";
                      }
                    } else if (isSelected) {
                      btnClass = "bg-primary/20 border-primary text-primary font-bold";
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(quiz.id, optIdx)}
                        className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 ${btnClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {!isSubmitted ? (
                  <button
                    disabled={userChoice === undefined}
                    onClick={() => handleQuizSubmit(quiz.id, quiz.correctAnswer)}
                    className="mt-2 py-3 px-6 rounded-xl bg-primary-container text-on-primary-container disabled:opacity-40 font-label-caps font-bold text-xs self-start transition-all"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className={`p-4 rounded-xl border text-xs md:text-sm leading-relaxed ${isCorrect ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-red-950/40 border-red-500/40 text-red-300'}`}>
                    <div className="font-bold mb-1 flex items-center space-x-1.5">
                      <Zap className="w-4 h-4" />
                      <span>{isCorrect ? 'Correct Answer! (+50 XP Earned 🎉)' : 'Oops! Galat Ho Gaya 💀'}</span>
                    </div>
                    <div>{quiz.explanation}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
