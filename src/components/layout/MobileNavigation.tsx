import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Eye, Trophy, User } from 'lucide-react';

export const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface-dim/95 dark:bg-surface-dim/95 backdrop-blur-xl bottom-0 fixed z-50 rounded-t-2xl border-t border-white/10 shadow-[0_-5px_25px_rgba(0,0,0,0.7)] left-0 w-full flex justify-around items-center px-2 py-2 md:hidden">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
          isActive('/')
            ? 'text-primary bg-primary/10 shadow-[0_0_12px_rgba(221,183,255,0.3)] scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-label-caps font-bold mt-1">Home</span>
      </Link>

      <Link
        to="/learn"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
          isActive('/learn')
            ? 'text-primary bg-primary/10 shadow-[0_0_12px_rgba(221,183,255,0.3)] scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-[10px] font-label-caps font-bold mt-1">Learn</span>
      </Link>

      <Link
        to="/visualizer"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
          isActive('/visualizer')
            ? 'text-primary bg-primary/10 shadow-[0_0_12px_rgba(221,183,255,0.3)] scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Eye className="w-5 h-5" />
        <span className="text-[10px] font-label-caps font-bold mt-1">Visualize</span>
      </Link>

      <Link
        to="/challenges"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
          isActive('/challenges')
            ? 'text-primary bg-primary/10 shadow-[0_0_12px_rgba(221,183,255,0.3)] scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Trophy className="w-5 h-5" />
        <span className="text-[10px] font-label-caps font-bold mt-1">Practice</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
          isActive('/profile')
            ? 'text-primary bg-primary/10 shadow-[0_0_12px_rgba(221,183,255,0.3)] scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <User className="w-5 h-5" />
        <span className="text-[10px] font-label-caps font-bold mt-1">Profile</span>
      </Link>
    </nav>
  );
};
