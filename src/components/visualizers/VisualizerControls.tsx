import React from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Zap } from 'lucide-react';

interface VisualizerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStepForward: () => void;
  onStepBack: () => void;
  onRestart: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  currentStep: number;
  totalSteps: number;
}

export const VisualizerControls: React.FC<VisualizerControlsProps> = ({
  isPlaying,
  onPlayPause,
  onStepForward,
  onStepBack,
  onRestart,
  speed,
  onSpeedChange,
  currentStep,
  totalSteps
}) => {
  return (
    <div className="glass-panel p-3 md:p-4 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-3 no-select">
      {/* Primary Play/Pause & Step Buttons */}
      <div className="flex items-center space-x-2 md:space-x-3 w-full sm:w-auto justify-center">
        <button
          onClick={onRestart}
          title="Restart"
          className="p-2.5 rounded-lg bg-surface-container hover:bg-white/10 text-on-surface transition-colors flex items-center justify-center min-w-[42px] min-h-[42px]"
        >
          <RotateCcw className="w-5 h-5 text-outline" />
        </button>

        <button
          onClick={onStepBack}
          disabled={currentStep === 0}
          title="Previous Step"
          className="p-2.5 rounded-lg bg-surface-container hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-on-surface transition-colors flex items-center justify-center min-w-[42px] min-h-[42px]"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <button
          onClick={onPlayPause}
          className={`px-5 py-2.5 rounded-full font-label-caps font-bold text-sm flex items-center space-x-2 transition-all duration-300 min-h-[42px] ${
            isPlaying
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30'
              : 'bg-primary-container text-on-primary-container hover:bg-primary-container/80 shadow-[0_0_15px_rgba(221,183,255,0.4)]'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
          <span>{isPlaying ? 'Pause' : 'Play Animation'}</span>
        </button>

        <button
          onClick={onStepForward}
          disabled={currentStep >= totalSteps - 1}
          title="Next Step"
          className="p-2.5 rounded-lg bg-surface-container hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-on-surface transition-colors flex items-center justify-center min-w-[42px] min-h-[42px]"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Speed Selector & Progress counter */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-4">
        {/* Speed Buttons */}
        <div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-white/5">
          <Zap className="w-4 h-4 text-tertiary ml-1 mr-2 hidden sm:block" />
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => onSpeedChange(s)}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                speed === s
                  ? 'bg-tertiary-container text-on-tertiary-container font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Step Counter */}
        <div className="text-xs font-mono text-on-surface-variant bg-surface-container px-3 py-2 rounded-lg border border-white/5">
          Step <span className="text-primary font-bold">{currentStep + 1}</span> / {totalSteps}
        </div>
      </div>
    </div>
  );
};
