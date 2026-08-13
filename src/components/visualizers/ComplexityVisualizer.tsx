import React from 'react';
import { motion } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface ComplexityVisualizerProps {
  step: VisualStep;
}

export const ComplexityVisualizer: React.FC<ComplexityVisualizerProps> = ({ step }) => {
  const { complexityType = 'O(1)', operationCount = 1 } = step;

  const complexities = [
    { type: 'O(1)', label: 'Constant', ops: '1 op', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { type: 'O(log n)', label: 'Logarithmic', ops: '~7 ops', color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' },
    { type: 'O(n)', label: 'Linear', ops: '100 ops', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
    { type: 'O(n^2)', label: 'Quadratic', ops: '10,000 ops', color: 'text-red-400 border-red-500/40 bg-red-500/10' }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[260px]">
      <div className="text-xs font-mono text-on-surface-variant mb-4">
        Input Size: <span className="font-bold text-primary">N = 100 elements</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-xl">
        {complexities.map((c) => {
          const isActive = c.type === complexityType;

          return (
            <motion.div
              key={c.type}
              whileHover={{ scale: 1.03 }}
              className={`p-3 rounded-xl border-2 font-mono flex flex-col items-center justify-center transition-all duration-300 ${
                isActive
                  ? `${c.color} shadow-lg scale-105 border-2`
                  : 'bg-surface-container-high border-white/10 text-on-surface opacity-50'
              }`}
            >
              <span className="text-base font-extrabold">{c.type}</span>
              <span className="text-[11px] opacity-80 mt-1">{c.label}</span>
              <span className="text-xs font-bold mt-2 px-2 py-0.5 rounded bg-black/40">
                {c.ops}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
