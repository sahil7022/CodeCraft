import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, BookOpen, Eye, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { AlgorithmVisualizer } from '../components/visualizers/AlgorithmVisualizer';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 pb-8 flex flex-col items-center text-center">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-20 right-1/4 w-[200px] h-[200px] bg-tertiary/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-primary/30 text-xs md:text-sm font-label-caps font-bold text-primary mb-6 shadow-[0_0_15px_rgba(221,183,255,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-tertiary animate-pulse" />
          <span>India’s Most Relatable DSA Platform</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-headline-lg tracking-tight max-w-4xl leading-tight"
        >
          DSA Bina Bakchodi Ke <span className="neon-text-glow">😎</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold gradient-text font-headline-md max-w-2xl"
        >
          “DSA ko padho mat. Hote hue dekho.”
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-on-surface-variant text-base sm:text-lg max-w-xl leading-relaxed"
        >
          No boring college lectures or confusing textbook definitions. Visual step animations, relatable real-life analogies, and natural Hinglish explanations.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/learn"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-caps font-extrabold text-base flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(221,183,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            <span>Padhai Shuru Karo</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>

          <Link
            to="/visualizer"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/20 text-on-surface font-label-caps font-bold text-base flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
          >
            <Eye className="w-5 h-5 text-tertiary" />
            <span>Try Visualizer</span>
          </Link>
        </motion.div>
      </section>

      {/* Interactive Quick Demo Section */}
      <section className="glass-panel p-4 md:p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-tertiary uppercase tracking-wider">Interactive Live Preview</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-headline-md text-on-surface mt-1">
              Binary Search in Action 🎯
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Watch how Binary Search rejects half the search range in every step!
            </p>
          </div>

          <Link
            to="/learn/binary-search"
            className="px-4 py-2 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/30 text-xs font-label-caps font-bold hover:bg-tertiary/20 transition-colors flex items-center space-x-1.5"
          >
            <span>Full Binary Search Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Live Visualizer Engine Component */}
        <AlgorithmVisualizer
          type="binary_search"
          codeSnippet={`function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target Found!
    } else if (arr[mid] < target) {
      low = mid + 1; // Reject Left Half
    } else {
      high = mid - 1; // Reject Right Half
    }
  }
  return -1;
}`}
        />
      </section>

      {/* Why This Platform Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-3 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
            💡
          </div>
          <h3 className="text-xl font-extrabold font-headline-md text-on-surface">Relatable Situations</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            No dry definitions. Class attendance, canteen samosa queue, shaadi ki plates se DSA samjho.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-3 hover:border-tertiary/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary font-bold">
            🎬
          </div>
          <h3 className="text-xl font-extrabold font-headline-md text-on-surface">Synchronized Animations</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Code ki exact line highlight hoti hai jab array mein swap ya search happen hota hai.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-3 hover:border-amber-400/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold">
            🔥
          </div>
          <h3 className="text-xl font-extrabold font-headline-md text-on-surface">Gamified XP & Badges</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Daily streak maintain karo, quizzes solve karo aur Sorting Ninja & DSA Beast badges unlock karo!
          </p>
        </div>
      </section>
    </div>
  );
};
