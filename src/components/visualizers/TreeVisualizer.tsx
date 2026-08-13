import React from 'react';
import { motion } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface TreeVisualizerProps {
  step: VisualStep;
}

export const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ step }) => {
  const treeNodes = step.treeNodes || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[260px]">
      <div className="text-xs font-mono text-tertiary mb-2 bg-surface-container px-3 py-1 rounded-full border border-white/10">
        <span>BST Insertion Rule:</span>
        <span className="font-bold text-primary ml-1">Left &lt; Root &lt; Right</span>
      </div>

      {/* SVG Tree Graph */}
      <div className="relative w-full max-w-lg h-56 flex justify-center items-center">
        <svg className="absolute inset-0 w-full h-full stroke-white/20 stroke-2 pointer-events-none">
          {/* Root to Left 30 */}
          <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="#4cd7f6" strokeWidth="2" />
          {/* Root to Right 70 */}
          <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="#4cd7f6" strokeWidth="2" />
          {/* 30 to Left 20 */}
          <line x1="30%" y1="50%" x2="20%" y2="80%" stroke="#988d9f" strokeWidth="1.5" strokeDasharray="4" />
          {/* 30 to Right 40 */}
          <line x1="30%" y1="50%" x2="40%" y2="80%" stroke="#988d9f" strokeWidth="1.5" strokeDasharray="4" />
        </svg>

        {/* Root Node (50) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-[10%] left-[45%] w-12 h-12 rounded-full border-2 border-primary bg-primary-container/40 text-primary flex items-center justify-center font-mono font-bold text-base shadow-[0_0_15px_rgba(221,183,255,0.6)] z-10"
        >
          50
        </motion.div>

        {/* Left Child (30) */}
        <div
          className={`absolute top-[42%] left-[25%] w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 z-10 ${
            treeNodes.find(n => n.value === 30)?.isCurrent
              ? 'border-tertiary bg-tertiary-container/50 text-tertiary shadow-[0_0_20px_rgba(76,215,246,0.8)] scale-110'
              : 'border-white/20 bg-surface-container-high text-on-surface'
          }`}
        >
          30
        </div>

        {/* Right Child (70) */}
        <div
          className={`absolute top-[42%] left-[65%] w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 z-10 ${
            treeNodes.find(n => n.value === 70)?.isCurrent
              ? 'border-tertiary bg-tertiary-container/50 text-tertiary shadow-[0_0_20px_rgba(76,215,246,0.8)] scale-110'
              : 'border-white/20 bg-surface-container-high text-on-surface'
          }`}
        >
          70
        </div>

        {/* Leaf 20 */}
        <div className="absolute top-[72%] left-[16%] w-9 h-9 rounded-full border border-white/10 bg-surface-container text-outline flex items-center justify-center font-mono text-xs z-10">
          20
        </div>

        {/* Leaf 40 */}
        <div className="absolute top-[72%] left-[36%] w-9 h-9 rounded-full border border-white/10 bg-surface-container text-outline flex items-center justify-center font-mono text-xs z-10">
          40
        </div>
      </div>
    </div>
  );
};
