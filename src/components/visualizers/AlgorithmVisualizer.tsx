import React, { useState, useEffect, useRef } from 'react';
import { VisualStep } from '../../engine/types';
import { generateBubbleSortSteps, generateSelectionSortSteps, generateInsertionSortSteps } from '../../engine/sortEngines';
import { generateBinarySearchSteps, generateLinearSearchSteps } from '../../engine/searchEngines';
import { generateStackSteps, generateQueueSteps, generateLinkedListSteps, generateBSTSteps } from '../../engine/dsEngines';
import { generateBFSSteps } from '../../engine/graphEngines';
import { generateRecursionSteps } from '../../engine/recursionEngines';
import { generateComplexitySteps } from '../../engine/complexityEngines';

import { ArrayVisualizer } from './ArrayVisualizer';
import { StackVisualizer } from './StackVisualizer';
import { QueueVisualizer } from './QueueVisualizer';
import { LinkedListVisualizer } from './LinkedListVisualizer';
import { TreeVisualizer } from './TreeVisualizer';
import { GraphVisualizer } from './GraphVisualizer';
import { RecursionVisualizer } from './RecursionVisualizer';
import { ComplexityVisualizer } from './ComplexityVisualizer';

import { VisualizerControls } from './VisualizerControls';
import { CodePanel } from './CodePanel';
import { ExplanationPanel } from './ExplanationPanel';

interface AlgorithmVisualizerProps {
  type: string;
  codeSnippet?: string;
}

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerProps> = ({ type, codeSnippet }) => {
  const [steps, setSteps] = useState<VisualStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  // Load steps based on type
  useEffect(() => {
    let generatedSteps: VisualStep[] = [];

    switch (type) {
      case 'binary_search':
        generatedSteps = generateBinarySearchSteps([12, 24, 37, 45, 58, 69, 73, 81, 90], 73);
        break;
      case 'linear_search':
        generatedSteps = generateLinearSearchSteps([24, 12, 73, 45, 90], 73);
        break;
      case 'bubble_sort':
        generatedSteps = generateBubbleSortSteps([45, 12, 89, 34, 23]);
        break;
      case 'selection_sort':
        generatedSteps = generateSelectionSortSteps([64, 25, 12, 22, 11]);
        break;
      case 'insertion_sort':
        generatedSteps = generateInsertionSortSteps([12, 11, 13, 5, 6]);
        break;
      case 'stack':
        generatedSteps = generateStackSteps([10, 20, 30]).pushSteps(40);
        break;
      case 'queue':
        generatedSteps = generateQueueSteps([10, 20, 30]).enqueueSteps(40);
        break;
      case 'linked_list':
        generatedSteps = generateLinkedListSteps([10, 20, 30, 40]);
        break;
      case 'bst':
        generatedSteps = generateBSTSteps([50, 30, 70, 20, 40]);
        break;
      case 'graph_bfs':
        generatedSteps = generateBFSSteps();
        break;
      case 'recursion':
        generatedSteps = generateRecursionSteps(4);
        break;
      case 'complexity':
        generatedSteps = generateComplexitySteps();
        break;
      default:
        generatedSteps = generateBubbleSortSteps([45, 12, 89, 34, 23]);
    }

    setSteps(generatedSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [type]);

  // Animation Loop
  useEffect(() => {
    let interval: any = null;

    if (isPlaying && steps.length > 0) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1200 / speed);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, steps, speed]);

  const handlePlayPause = () => {
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleStepBack = () => {
    setIsPlaying(false);
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const currentStep = steps[currentStepIndex] || {
    stepIndex: 0,
    explanationTitle: "Loading Algorithm...",
    explanationReason: "Preparing visualization steps.",
    activeLineCode: 1
  };

  // Render Visualizer Stage Component
  const renderVisualStage = () => {
    switch (type) {
      case 'binary_search':
      case 'linear_search':
      case 'bubble_sort':
      case 'selection_sort':
      case 'insertion_sort':
        return <ArrayVisualizer step={currentStep} />;
      case 'stack':
        return <StackVisualizer step={currentStep} />;
      case 'queue':
        return <QueueVisualizer step={currentStep} />;
      case 'linked_list':
        return <LinkedListVisualizer step={currentStep} />;
      case 'bst':
        return <TreeVisualizer step={currentStep} />;
      case 'graph_bfs':
        return <GraphVisualizer step={currentStep} />;
      case 'recursion':
        return <RecursionVisualizer step={currentStep} />;
      case 'complexity':
        return <ComplexityVisualizer step={currentStep} />;
      default:
        return <ArrayVisualizer step={currentStep} />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Visual Canvas Stage */}
      <div className="glass-panel-strong rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {renderVisualStage()}
      </div>

      {/* Control Bar */}
      <VisualizerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onStepForward={handleStepForward}
        onStepBack={handleStepBack}
        onRestart={handleRestart}
        speed={speed}
        onSpeedChange={setSpeed}
        currentStep={currentStepIndex}
        totalSteps={steps.length}
      />

      {/* Explanation Box + Code Split on Desktop / Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Hinglish Explanation Panel */}
        <div className="lg:col-span-6 flex flex-col">
          <ExplanationPanel
            title={currentStep.explanationTitle}
            reason={currentStep.explanationReason}
            currentStep={currentStepIndex}
            totalSteps={steps.length}
          />
        </div>

        {/* Code Panel with Line Highlighting */}
        {codeSnippet && (
          <div className="lg:col-span-6 flex flex-col min-h-[220px]">
            <CodePanel code={codeSnippet} activeLine={currentStep.activeLineCode} />
          </div>
        )}
      </div>
    </div>
  );
};
