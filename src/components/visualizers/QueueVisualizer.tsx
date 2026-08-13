import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface QueueVisualizerProps {
  step: VisualStep;
}

export const QueueVisualizer: React.FC<QueueVisualizerProps> = ({ step }) => {
  const queueItems = step.queueItems || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[240px]">
      <div className="text-xs font-mono text-tertiary mb-4 flex items-center space-x-2 bg-tertiary/10 px-3 py-1 rounded-full border border-tertiary/20">
        <span>FIFO Principle:</span>
        <span className="font-bold">First In, First Out (Front Se Exit, Rear Par Entry)</span>
      </div>

      {/* Canteen Line Container */}
      <div className="w-full max-w-xl overflow-x-auto p-4 border-2 border-dashed border-tertiary/30 rounded-xl bg-surface-container-lowest/60 flex items-center justify-start space-x-3 scrollbar-thin">
        <div className="text-xs font-bold font-mono text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded bg-emerald-500/10 flex-shrink-0">
          EXIT (FRONT) 🚪
        </div>

        <AnimatePresence>
          {queueItems.map((item, idx) => {
            const isFront = idx === 0;
            const isRear = idx === queueItems.length - 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center flex-shrink-0 p-3 rounded-xl border-2 font-mono font-bold ${
                  isFront
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.5)]'
                    : isRear
                    ? 'bg-tertiary-container/30 border-tertiary text-tertiary shadow-[0_0_15px_rgba(76,215,246,0.5)]'
                    : 'bg-surface-container-high border-white/10 text-on-surface'
                }`}
              >
                <span className="text-base sm:text-lg">Student [{item.value}]</span>
                <span className="text-[10px] mt-1 font-semibold opacity-80">
                  {isFront && isRear ? 'FRONT & REAR' : isFront ? 'FRONT ◀' : isRear ? 'REAR ▶' : `Pos ${idx + 1}`}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {queueItems.length === 0 && (
          <div className="text-xs font-mono text-outline italic py-4">
            Canteen line khali hai! Add candidates using ENQUEUE.
          </div>
        )}

        <div className="text-xs font-bold font-mono text-tertiary border border-tertiary/40 px-2.5 py-1 rounded bg-tertiary/10 flex-shrink-0">
          ENTRY (REAR) 🎟️
        </div>
      </div>
    </div>
  );
};
