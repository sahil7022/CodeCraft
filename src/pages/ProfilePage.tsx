import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Flame, Award, BookOpen, Trophy, LogOut, CheckCircle, Zap } from 'lucide-react';
import { SEED_ACHIEVEMENTS } from '../../server/db/seedData';

export const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  const xp = user?.profile?.xp || 350;
  const streak = user?.profile?.streak || 4;
  const level = user?.profile?.experienceLevel || "BEGINNER";

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      {/* User Header Profile Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container font-headline-lg font-bold text-2xl flex items-center justify-center border-2 border-primary shadow-[0_0_20px_rgba(221,183,255,0.4)]">
            {user?.name.charAt(0) || 'R'}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-headline-lg text-on-surface">
              {user?.name || 'Rahul Sharma'}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-on-surface-variant mt-1">
              {user?.email || 'rahul@college.edu.in'} • <span className="text-tertiary font-bold">{level} LEVEL</span>
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-label-caps font-bold hover:bg-red-500/20 transition-colors flex items-center space-x-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
          <Flame className="w-6 h-6 text-amber-400 fill-amber-400 mb-2 animate-pulse" />
          <span className="text-2xl font-extrabold font-mono text-on-surface">{streak} Days</span>
          <span className="text-xs text-outline mt-1 font-mono">Current Streak</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
          <Zap className="w-6 h-6 text-primary mb-2" />
          <span className="text-2xl font-extrabold font-mono text-primary">{xp} XP</span>
          <span className="text-xs text-outline mt-1 font-mono">Total Points</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
          <BookOpen className="w-6 h-6 text-tertiary mb-2" />
          <span className="text-2xl font-extrabold font-mono text-on-surface">3 Lessons</span>
          <span className="text-xs text-outline mt-1 font-mono">Completed</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
          <Trophy className="w-6 h-6 text-emerald-400 mb-2" />
          <span className="text-2xl font-extrabold font-mono text-on-surface">2 Badges</span>
          <span className="text-xs text-outline mt-1 font-mono">Unlocked</span>
        </div>
      </div>

      {/* Achievements Badges Section */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
        <div className="flex items-center space-x-2 text-xl font-bold font-headline-md text-on-surface">
          <Award className="w-6 h-6 text-tertiary" />
          <span>Unlocked Badges & Achievements 🏆</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {SEED_ACHIEVEMENTS.map((ach, idx) => {
            const isUnlocked = idx < 2; // Demo unlocked 2 badges

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all ${
                  isUnlocked
                    ? 'bg-surface-container-high border-tertiary/40 shadow-[0_0_15px_rgba(76,215,246,0.2)]'
                    : 'bg-surface-container-low border-white/5 opacity-40 grayscale'
                }`}
              >
                <div className="text-3xl mb-2">{ach.icon}</div>
                <h4 className="text-sm font-bold font-headline-md text-on-surface">{ach.name}</h4>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">{ach.description}</p>
                {isUnlocked && (
                  <span className="mt-3 text-[10px] font-mono font-bold text-emerald-400 flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Unlocked</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
