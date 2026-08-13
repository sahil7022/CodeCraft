import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface StackVisualizerProps {
  step: VisualStep;
}

export const StackVisualizer: React.FC<StackVisualizerProps> = ({ step }) => {
  const stackItems = step.stackItems || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[260px]">
      <div className="text-xs font-mono text-tertiary mb-3 flex items-center space-x-2 bg-tertiary/10 px-3 py-1 rounded-full border border-tertiary/20">
        <span>LIFO Principle:</span>
        <span className="font-bold">Last In, First Out (Top Se Entry & Exit)</span>
      </div>

      {/* Stack Container Container Wall */}
      <div className="relative w-48 sm:w-64 min-h-[180px] border-b-4 border-l-4 border-r-4 border-primary/50 rounded-b-xl p-3 flex flex-col-reverse items-center gap-2 bg-surface-container-lowest/60">
        <AnimatePresence>
          {stackItems.map((item, idx) => {
            const isTop = idx === stackItems.length - 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`w-full py-2.5 px-4 rounded-lg border-2 flex items-center justify-between font-mono font-bold text-sm md:text-base ${
                  isTop
                    ? 'bg-primary-container/40 border-primary text-primary shadow-[0_0_15px_rgba(221,183,255,0.6)]'
                    : 'bg-surface-container-high border-white/10 text-on-surface'
                }`}
              >
                <span>Plate [{item.value}]</span>
                {isTop && (
                  <span className="text-[10px] uppercase bg-primary text-on-primary font-extrabold px-2 py-0.5 rounded-full animate-pulse">
                    TOP ◀
                  </span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {stackItems.length === 0 && (
          <div className="text-xs font-mono text-outline italic py-8">
            Stack khali hai! Add items using PUSH.
          </div>
        )}
      </div>
    </div>
  );
};
