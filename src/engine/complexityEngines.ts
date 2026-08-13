import { VisualStep } from './types';

export function generateComplexitySteps(): VisualStep[] {
  return [
    {
      stepIndex: 0,
      complexityType: 'O(1)',
      operationCount: 1,
      memoryBlocks: 1,
      activeLineCode: 2,
      explanationTitle: "O(1) Constant Time & Space",
      explanationReason: "Input size N chahe 10 ho ya 10,000,000... Operations Hamesha 1 hi rahenge! Example: Array index lookup arr[0]."
    },
    {
      stepIndex: 1,
      complexityType: 'O(log n)',
      operationCount: 7,
      memoryBlocks: 1,
      activeLineCode: 4,
      explanationTitle: "O(log n) Logarithmic Complexity",
      explanationReason: "Input size N = 100 ho toh sirf ~7 operations! Har step mein problem size adhi ho rahi hai. Example: Binary Search."
    },
    {
      stepIndex: 2,
      complexityType: 'O(n)',
      operationCount: 100,
      memoryBlocks: 100,
      activeLineCode: 6,
      explanationTitle: "O(n) Linear Growth",
      explanationReason: "N = 100 -> 100 operations. N = 1000 -> 1000 operations. Growth input size ke proportional hai. Example: Linear Search, Single Loop."
    },
    {
      stepIndex: 3,
      complexityType: 'O(n^2)',
      operationCount: 10000,
      memoryBlocks: 10000,
      activeLineCode: 10,
      explanationTitle: "O(n²) Quadratic Complexity ⚠️",
      explanationReason: "N = 100 -> 10,000 operations! Nested loops input size ke square speed se laptop memory aur CPU hit karte hain. Example: Bubble Sort."
    }
  ];
}
