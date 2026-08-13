export interface VisualStep {
  stepIndex: number;
  explanationTitle: string;
  explanationReason: string;
  activeLineCode: number; // Line number in code snippet to highlight
  
  // Array / Sorting / Searching
  arrayState?: number[];
  comparingIndices?: number[];
  swappingIndices?: number[];
  sortedIndices?: number[];
  activeRange?: [number, number]; // [low, high] for Binary Search / Quick Sort
  targetIndex?: number;
  foundIndex?: number;
  
  // Stack / Queue
  stackItems?: { id: string; value: number | string; isTop?: boolean; isNew?: boolean }[];
  queueItems?: { id: string; value: number | string; isFront?: boolean; isRear?: boolean }[];
  actionType?: 'PUSH' | 'POP' | 'PEEK' | 'ENQUEUE' | 'DEQUEUE';
  
  // Linked List
  listNodes?: { id: string; value: number; nextId: string | null; isHighlight?: boolean; isNew?: boolean }[];

  // Tree / BST
  treeNodes?: { id: string; value: number; leftId?: string; rightId?: string; isVisited?: boolean; isCurrent?: boolean }[];
  
  // Graph (BFS/DFS)
  graphNodes?: { id: string; label: string; x: number; y: number; state: 'unvisited' | 'queued' | 'visiting' | 'visited' }[];
  graphEdges?: { from: string; to: string; active?: boolean }[];
  activeQueue?: string[];
  activeStack?: string[];

  // Recursion
  callStack?: { funcName: string; args: string; returnVal?: string; status: 'active' | 'returning' }[];

  // Complexity
  complexityType?: 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n^2)';
  operationCount?: number;
  memoryBlocks?: number;
}
