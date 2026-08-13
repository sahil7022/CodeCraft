import React from 'react';
import { Code, CheckCircle } from 'lucide-react';

interface CodePanelProps {
  code: string;
  activeLine?: number;
  title?: string;
}

export const CodePanel: React.FC<CodePanelProps> = ({ code, activeLine = 1, title = "Algorithm Implementation" }) => {
  const lines = code.trim().split('\n');

  return (
    <div className="glass-panel rounded-xl border border-white/10 overflow-hidden flex flex-col h-full">
      {/* Code Header */}
      <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-primary font-bold">
          <Code className="w-4 h-4 text-tertiary" />
          <span>{title}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-3 md:p-4 overflow-x-auto font-mono text-xs md:text-sm bg-surface-container-lowest/80 text-on-surface flex-1">
        {lines.map((line, idx) => {
          const lineNumber = idx + 1;
          const isHighlighted = lineNumber === activeLine;

          return (
            <div
              key={idx}
              className={`flex items-start px-2 py-0.5 rounded transition-all duration-200 ${
                isHighlighted
                  ? 'bg-primary/20 text-primary border-l-4 border-primary font-semibold shadow-[0_0_12px_rgba(221,183,255,0.3)]'
                  : 'hover:bg-white/5 text-on-surface-variant'
              }`}
            >
              <span className="w-7 select-none text-outline text-right mr-3 text-xs opacity-60">
                {lineNumber}
              </span>
              <pre className="font-mono whitespace-pre flex-1">{line}</pre>
              {isHighlighted && (
                <span className="ml-2 text-[10px] uppercase font-bold text-tertiary tracking-wider animate-pulse hidden sm:inline-block">
                  ◀ Executing
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
