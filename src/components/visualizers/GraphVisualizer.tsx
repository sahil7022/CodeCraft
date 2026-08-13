import React from 'react';
import { motion } from 'framer-motion';
import { VisualStep } from '../../engine/types';

interface GraphVisualizerProps {
  step: VisualStep;
}

export const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ step }) => {
  const nodes = step.graphNodes || [];
  const edges = step.graphEdges || [];
  const queue = step.activeQueue || [];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[260px]">
      {/* Active Queue State */}
      <div className="text-xs font-mono text-tertiary mb-3 flex items-center space-x-2 bg-surface-container px-3 py-1.5 rounded-full border border-white/10">
        <span>Active BFS Queue:</span>
        <span className="font-bold text-primary">[{queue.join(', ') || 'Empty'}]</span>
      </div>

      {/* SVG Canvas for Graph Vertices & Edges */}
      <div className="relative w-full max-w-md h-52 bg-surface-container-lowest/80 rounded-xl border border-white/10 p-2">
        <svg className="absolute inset-0 w-full h-full">
          {edges.map((e, idx) => {
            const fromNode = nodes.find(n => n.id === e.from);
            const toNode = nodes.find(n => n.id === e.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={e.active ? '#4cd7f6' : 'rgba(255, 255, 255, 0.15)'}
                strokeWidth={e.active ? 3 : 1.5}
                strokeDasharray={e.active ? 'none' : '4'}
              />
            );
          })}
        </svg>

        {nodes.map((n) => {
          let nodeBg = 'bg-surface-container-high border-white/20 text-on-surface';
          let shadow = '';

          if (n.state === 'visited') {
            nodeBg = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
            shadow = 'shadow-[0_0_15px_rgba(52,211,153,0.6)]';
          } else if (n.state === 'queued') {
            nodeBg = 'bg-tertiary-container/40 border-tertiary text-tertiary font-bold animate-pulse';
            shadow = 'shadow-[0_0_15px_rgba(76,215,246,0.6)]';
          }

          return (
            <div
              key={n.id}
              style={{ left: `${n.x - 22}px`, top: `${n.y - 22}px` }}
              className={`absolute w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono text-xs transition-all duration-300 ${nodeBg} ${shadow}`}
            >
              {n.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};
