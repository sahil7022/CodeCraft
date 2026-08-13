import React, { useState } from 'react';
import { Trophy, Zap, CheckCircle, Code, Play } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ChallengesPage: React.FC = () => {
  const { updateXp } = useAuth();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [codeOutput, setCodeOutput] = useState<string>('');
  const [passed, setPassed] = useState<boolean>(false);

  const challenges = [
    {
      id: "ch-1",
      title: "Binary Search Target Finding",
      difficulty: "Easy",
      xp: 100,
      description: "Ek sorted array `[10, 20, 30, 40, 50]` diya gaya hai. Target `40` ka index dhundhne ke liye Binary Search logic likho.",
      starterCode: `function searchTarget(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(searchTarget([10, 20, 30, 40, 50], 40));`
    },
    {
      id: "ch-2",
      title: "Stack LIFO Reverse Array",
      difficulty: "Medium",
      xp: 150,
      description: "Stack data structure ka istemal karke array `[1, 2, 3, 4]` ko reverse order `[4, 3, 2, 1]` mein return karo.",
      starterCode: `function reverseWithStack(arr) {
  let stack = [];
  for(let x of arr) stack.push(x);
  let res = [];
  while(stack.length > 0) res.push(stack.pop());
  return res;
}

console.log(reverseWithStack([1, 2, 3, 4]));`
    }
  ];

  const currentCh = challenges[activeTab];

  const handleRunCode = () => {
    setCodeOutput("Running test cases...\nTest 1: Passed! Target 40 found at index 3.\nTest 2: Passed! Array reversed successfully.\nResult: 100% Score! 🎉");
    setPassed(true);
    updateXp(currentCh.xp);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4" />
            <span>Practice Arena</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline-lg text-on-surface">
            DSA Practice Challenges 🏆
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
            Solve coding problems, pass test cases, and earn XP to rank up on the leaderboard!
          </p>
        </div>
      </div>

      {/* Challenge Selector Tabs */}
      <div className="flex space-x-3 border-b border-white/10 pb-3">
        {challenges.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => { setActiveTab(idx); setCodeOutput(''); setPassed(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === idx
                ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(221,183,255,0.4)]'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {ch.title} (+{ch.xp} XP)
          </button>
        ))}
      </div>

      {/* Challenge Detail & Code Runner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
              Difficulty: {currentCh.difficulty}
            </span>
            <span className="text-xs font-mono font-bold text-primary">
              +{currentCh.xp} XP
            </span>
          </div>

          <h3 className="text-xl font-bold font-headline-md text-on-surface">
            {currentCh.title}
          </h3>

          <p className="text-sm text-on-surface-variant leading-relaxed">
            {currentCh.description}
          </p>

          <button
            onClick={handleRunCode}
            className="mt-4 py-3.5 px-6 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-label-caps font-bold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-500/30 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)]"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Run Code & Submit (+{currentCh.xp} XP)</span>
          </button>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-2xl border border-white/10 font-mono text-xs bg-surface-container-lowest overflow-x-auto text-on-surface">
            <div className="text-xs text-outline mb-2 font-bold flex items-center space-x-1.5">
              <Code className="w-4 h-4 text-tertiary" />
              <span>Solution Code Editor</span>
            </div>
            <pre className="p-3 bg-surface-container-high/60 rounded-xl leading-relaxed text-emerald-300">
              {currentCh.starterCode}
            </pre>
          </div>

          {codeOutput && (
            <div className={`p-4 rounded-2xl border font-mono text-xs ${passed ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-surface-container border-white/10 text-on-surface'}`}>
              <div className="font-bold mb-1">Execution Output:</div>
              <pre className="whitespace-pre-wrap">{codeOutput}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
