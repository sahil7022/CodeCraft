import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, User, BookOpen, Compass, Eye, Trophy } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const xp = user?.profile?.xp || 350;
  const streak = user?.profile?.streak || 4;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface-container/80 dark:bg-surface-container/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/10 shadow-[0_0_15px_rgba(221,183,255,0.1)] hidden md:block">
      <div className="flex justify-between items-center w-full px-margin-desktop py-3.5 max-w-container-max mx-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="text-xl md:text-2xl font-headline-md font-extrabold text-primary tracking-tighter cursor-pointer hover:bg-white/5 transition-all duration-300 p-2 rounded-lg flex items-center">
            DSA Bina Bakchodi Ke <span className="ml-1 text-lg">😎</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/learn"
            className={`text-label-caps font-label-caps transition-all duration-300 px-3 py-2 rounded-lg flex items-center space-x-1.5 ${
              isActive('/learn')
                ? 'text-primary bg-primary/10 shadow-[0_0_10px_rgba(221,183,255,0.2)]'
                : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Learn</span>
          </Link>

          <Link
            to="/visualizer"
            className={`text-label-caps font-label-caps transition-all duration-300 px-3 py-2 rounded-lg flex items-center space-x-1.5 ${
              isActive('/visualizer')
                ? 'text-primary bg-primary/10 shadow-[0_0_10px_rgba(221,183,255,0.2)]'
                : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Visualizer</span>
          </Link>

          <Link
            to="/challenges"
            className={`text-label-caps font-label-caps transition-all duration-300 px-3 py-2 rounded-lg flex items-center space-x-1.5 ${
              isActive('/challenges')
                ? 'text-primary bg-primary/10 shadow-[0_0_10px_rgba(221,183,255,0.2)]'
                : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Challenges</span>
          </Link>
        </div>

        {/* User Stats & Profile */}
        <div className="flex items-center space-x-3">
          {/* XP & Streak Pill */}
          <div className="text-xs font-label-caps font-bold bg-secondary-container/30 text-secondary border border-secondary/30 px-3 py-1.5 rounded-full flex items-center space-x-2">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>{streak} Day Streak</span>
            <span className="text-white/30">•</span>
            <span className="text-primary font-mono">{xp} XP</span>
          </div>

          {/* Profile Link */}
          <Link
            to={user ? "/profile" : "/auth"}
            className="text-xs font-label-caps font-bold border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-1.5 bg-surface-container"
          >
            <User className="w-4 h-4 text-primary" />
            <span>{user ? user.name.split(' ')[0] : 'Join Grind'}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
