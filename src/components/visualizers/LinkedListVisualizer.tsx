import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VisualStep } from '../../engine/types';

interface LinkedListVisualizerProps {
  step: VisualStep;
}

export const LinkedListVisualizer: React.FC<LinkedListVisualizerProps> = ({ step }) => {
  const nodes = step.listNodes || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[220px]">
      <div className="text-xs font-mono text-tertiary mb-4 bg-surface-container px-3 py-1 rounded-full border border-white/10">
        <span>Head Pointer:</span>
        <span className="font-bold text-primary ml-1">[Head] ➔ Node 0</span>
      </div>

      {/* Linked List Nodes */}
      <div className="w-full overflow-x-auto py-6 px-2 flex items-center justify-start sm:justify-center space-x-3 scrollbar-thin">
        {nodes.map((node, idx) => {
          return (
            <React.Fragment key={node.id}>
              {/* Single Node Component */}
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex border-2 rounded-xl overflow-hidden font-mono shadow-lg transition-all duration-300 flex-shrink-0 ${
                  node.isHighlight
                    ? 'border-tertiary bg-tertiary-container/30 shadow-[0_0_20px_rgba(76,215,246,0.6)] -translate-y-2'
                    : 'border-white/10 bg-surface-container-high'
                }`}
              >
                {/* Data Box */}
                <div className="px-3.5 py-3 bg-surface-container-highest/60 border-r border-white/10 flex flex-col items-center">
                  <span className="text-[10px] text-outline font-semibold">DATA</span>
                  <span className="text-base md:text-lg font-bold text-primary">{node.value}</span>
                </div>

                {/* Next Pointer Box */}
                <div className="px-3 py-3 flex flex-col items-center justify-center bg-surface-container">
                  <span className="text-[10px] text-outline font-semibold">NEXT</span>
                  <span className="text-xs font-bold text-tertiary">
                    {node.nextId ? '➜ Ptr' : 'NULL'}
                  </span>
                </div>
              </motion.div>

              {/* Arrow Connection */}
              {idx < nodes.length - 1 && (
                <div className="flex items-center text-tertiary animate-pulse flex-shrink-0">
                  <ArrowRight className="w-6 h-6 stroke-[3]" />
                </div>
              )}
            </React.Fragment>
          );
        })}

        <div className="text-xs font-mono text-outline font-bold border border-white/10 px-3 py-2 rounded-lg bg-surface-container flex-shrink-0">
          NULL
        </div>
      </div>
    </div>
  );
};
