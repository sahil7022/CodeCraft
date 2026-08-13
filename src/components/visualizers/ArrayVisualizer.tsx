import React from 'react';
import { motion } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface ArrayVisualizerProps {
  step: VisualStep;
}

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ step }) => {
  const { arrayState = [], comparingIndices = [], swappingIndices = [], sortedIndices = [], activeRange, targetIndex, foundIndex } = step;

  const [low, high] = activeRange || [0, arrayState.length - 1];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 min-h-[220px]">
      {/* Range Banner if Binary Search active */}
      {activeRange && (
        <div className="text-xs font-mono text-on-surface-variant mb-4 px-3 py-1 rounded-full bg-surface-container border border-white/10 flex items-center space-x-2">
          <span>Active Search Range:</span>
          <span className="text-tertiary font-bold">Index {low} to {high}</span>
        </div>
      )}

      {/* Array Node Container - Responsive Controlled Horizontal Scroll */}
      <div className="w-full overflow-x-auto py-6 px-2 flex justify-start sm:justify-center items-end space-x-2 md:space-x-3 scrollbar-thin">
        {arrayState.map((val, idx) => {
          const isComparing = comparingIndices.includes(idx);
          const isSwapping = swappingIndices.includes(idx);
          const isSorted = sortedIndices.includes(idx);
          const isFound = foundIndex === idx;
          const isInactiveRange = activeRange && (idx < low || idx > high);

          let nodeBg = "bg-surface-container-high border-outline-variant text-on-surface";
          let shadow = "";

          if (isFound) {
            nodeBg = "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold scale-110";
            shadow = "shadow-[0_0_20px_rgba(52,211,153,0.8)]";
          } else if (isSwapping) {
            nodeBg = "bg-primary-container/40 border-primary text-primary font-bold scale-105";
            shadow = "shadow-[0_0_20px_rgba(221,183,255,0.8)]";
          } else if (isComparing) {
            nodeBg = "bg-tertiary-container/40 border-tertiary text-tertiary font-bold -translate-y-2";
            shadow = "shadow-[0_0_20px_rgba(76,215,246,0.8)]";
          } else if (isSorted) {
            nodeBg = "bg-emerald-950/40 border-emerald-500/50 text-emerald-400";
          } else if (isInactiveRange) {
            nodeBg = "bg-surface-dim/40 border-white/5 text-outline opacity-40 scale-95";
          }

          return (
            <motion.div
              key={idx}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col items-center flex-shrink-0"
            >
              {/* Node Card */}
              <div
                className={`w-11 h-14 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-xl border-2 flex items-center justify-center text-base sm:text-lg md:text-xl font-bold font-mono transition-all duration-300 ${nodeBg} ${shadow}`}
              >
                {val}
              </div>

              {/* Index Number */}
              <span className="mt-2 text-[11px] font-mono text-outline font-semibold">
                [{idx}]
              </span>

              {/* Status Label */}
              {isComparing && (
                <span className="text-[10px] font-mono font-bold text-tertiary mt-1 animate-bounce">
                  Compare
                </span>
              )}
              {isSwapping && (
                <span className="text-[10px] font-mono font-bold text-primary mt-1 animate-bounce">
                  Swap ↔
                </span>
              )}
              {isFound && (
                <span className="text-[10px] font-mono font-bold text-emerald-400 mt-1">
                  Target! 🎯
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
