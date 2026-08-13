import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, CheckCircle, ArrowRight, Clock, Award } from 'lucide-react';
import { SEED_CONCEPTS, SEED_LESSONS } from '../../server/db/seedData';
import { useAuth } from '../context/AuthContext';

export const LearnPage: React.FC = () => {
  const { user } = useAuth();
  const [concepts, setConcepts] = useState<any[]>(SEED_CONCEPTS);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-tertiary uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Structured DSA Roadmap</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline-lg text-on-surface">
            Learn DSA Concepts 🧠
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
            Select a module to learn through Hinglish analogies, visualizer animations, line-by-line code, and interactive quizzes.
          </p>
        </div>

        <div className="glass-panel px-4 py-3 rounded-2xl border border-white/10 flex items-center space-x-4">
          <div>
            <div className="text-xs font-mono text-outline">Total Progress</div>
            <div className="text-xl font-bold font-mono text-primary">3 / 8 Modules</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
            ⚡
          </div>
        </div>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept, idx) => {
          const lessons = SEED_LESSONS.filter(l => l.conceptId === concept.id);
          const firstLesson = lessons[0];

          return (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(221,183,255,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-surface-container text-tertiary border border-tertiary/20">
                    {concept.category}
                  </span>
                  <span className="text-[11px] font-mono text-outline px-2 py-0.5 rounded bg-surface-container-high">
                    {concept.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold font-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {concept.title}
                </h3>

                <p className="text-xs md:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {concept.description}
                </p>

                {/* Lessons List in concept */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
                  {lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/learn/${lesson.slug}`}
                      className="p-2.5 rounded-xl bg-surface-container-low hover:bg-white/10 transition-colors flex items-center justify-between text-xs font-mono text-on-surface group/item"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 opacity-80" />
                        <span className="group-hover/item:text-primary font-bold">{lesson.title}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-outline text-[11px]">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.estimatedMinutes}m</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action */}
              {firstLesson && (
                <Link
                  to={`/learn/${firstLesson.slug}`}
                  className="mt-6 w-full py-3 rounded-xl bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-caps font-bold text-xs flex items-center justify-center space-x-2 transition-all duration-300 border border-white/10"
                >
                  <span>Start Lesson</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
