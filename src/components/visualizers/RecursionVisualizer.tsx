import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface RecursionVisualizerProps {
  step: VisualStep;
}

export const RecursionVisualizer: React.FC<RecursionVisualizerProps> = ({ step }) => {
  const callStack = step.callStack || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[260px]">
      <div className="text-xs font-mono text-tertiary mb-3 bg-surface-container px-3 py-1 rounded-full border border-white/10">
        <span>Call Stack Monitor:</span>
        <span className="font-bold text-primary ml-1">Functions Pushing & Returning</span>
      </div>

      {/* Stack Frames */}
      <div className="w-full max-w-sm border-2 border-dashed border-primary/30 rounded-xl p-3 bg-surface-container-lowest/80 flex flex-col-reverse gap-2">
        <AnimatePresence>
          {callStack.map((frame, idx) => {
            const isTop = idx === callStack.length - 1;
            const isReturning = frame.status === 'returning';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className={`p-3 rounded-lg border-2 font-mono text-xs md:text-sm flex items-center justify-between transition-all duration-300 ${
                  isReturning
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.5)]'
                    : isTop
                    ? 'bg-primary-container/30 border-primary text-primary shadow-[0_0_15px_rgba(221,183,255,0.5)]'
                    : 'bg-surface-container-high border-white/10 text-on-surface'
                }`}
              >
                <div>
                  <div className="font-bold">{frame.funcName}</div>
                  <div className="text-[11px] opacity-80">{frame.args}</div>
                </div>

                {frame.returnVal ? (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    ➔ {frame.returnVal}
                  </span>
                ) : (
                  isTop && (
                    <span className="text-[10px] uppercase font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/30 animate-pulse">
                      ACTIVE ◀
                    </span>
                  )
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
