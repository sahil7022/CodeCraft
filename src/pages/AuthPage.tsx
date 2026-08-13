import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, Sparkles, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [level, setLevel] = useState<string>('BEGINNER');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeToken = "jwt_token_" + Date.now();
    const fakeUser = {
      id: "u_" + Date.now(),
      name: name || "Rahul Sharma",
      email: email || "rahul@college.edu.in",
      profile: {
        experienceLevel: level,
        xp: 150,
        streak: 1,
        totalLessonsCompleted: 0,
        totalChallengesCompleted: 0
      }
    };
    login(fakeToken, fakeUser);
    navigate('/learn');
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-6">
        <div className="text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xl font-bold mb-3">
            😎
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-headline-lg text-on-surface">
            {isLogin ? 'Join The Grind 🔥' : 'Create Account 🚀'}
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            {isLogin ? 'Wapas aane par welcome bhai! Padhai resume karo.' : 'Start your visual DSA learning journey!'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-mono font-bold text-on-surface-variant block mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-outline absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-surface-container border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-mono font-bold text-on-surface-variant block mb-1.5">College Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-outline absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="rahul@college.edu.in"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-surface-container border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono font-bold text-on-surface-variant block mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-outline absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-surface-container border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="text-xs font-mono font-bold text-on-surface-variant block mb-1.5">DSA Experience Level</label>
              <select
                value={level}
                onChange={e => setLevel(e.target.value)}
                className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-on-surface focus:outline-none focus:border-primary"
              >
                <option value="BEGINNER">Beginner (Zero se shuru karna hai)</option>
                <option value="INTERMEDIATE">Intermediate (Basic Array pata hai)</option>
                <option value="PRO">Pro (Placement season target hai)</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 w-full py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label-caps font-extrabold text-sm shadow-[0_0_20px_rgba(221,183,255,0.4)] hover:bg-primary-container/80 transition-all"
          >
            {isLogin ? 'Login To Dashboard' : 'Register Account (+100 XP Bonus)'}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/5">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-mono text-tertiary hover:underline"
          >
            {isLogin ? "Naya account banana hai? Register karo" : "Pehle se account hai? Login karo"}
          </button>
        </div>
      </div>
    </div>
  );
};
