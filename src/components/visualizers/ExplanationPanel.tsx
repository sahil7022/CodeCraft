import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

interface ExplanationPanelProps {
  title: string;
  reason: string;
  currentStep: number;
  totalSteps: number;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  title,
  reason,
  currentStep,
  totalSteps
}) => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-tertiary/20 bg-surface-container-low/90 flex flex-col justify-between shadow-[0_0_20px_rgba(76,215,246,0.1)]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center space-x-2 text-tertiary font-bold text-sm md:text-base">
          <Sparkles className="w-5 h-5 text-tertiary animate-pulse" />
          <span>{title}</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/30">
          Step {currentStep + 1}/{totalSteps}
        </span>
      </div>

      <p className="text-on-surface text-xs md:text-sm leading-relaxed font-body-md bg-surface-container-high/60 p-3 rounded-lg border border-white/5">
        {reason}
      </p>
    </div>
  );
};
