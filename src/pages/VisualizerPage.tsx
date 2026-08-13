import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { AlgorithmVisualizer } from '../components/visualizers/AlgorithmVisualizer';

export const VisualizerPage: React.FC = () => {
  const [selectedAlgo, setSelectedAlgo] = useState<string>('binary_search');

  const algorithms = [
    { id: 'binary_search', name: 'Binary Search', cat: 'Searching' },
    { id: 'linear_search', name: 'Linear Search', cat: 'Searching' },
    { id: 'bubble_sort', name: 'Bubble Sort', cat: 'Sorting' },
    { id: 'selection_sort', name: 'Selection Sort', cat: 'Sorting' },
    { id: 'insertion_sort', name: 'Insertion Sort', cat: 'Sorting' },
    { id: 'stack', name: 'Stack (LIFO)', cat: 'Data Structures' },
    { id: 'queue', name: 'Queue (FIFO)', cat: 'Data Structures' },
    { id: 'linked_list', name: 'Singly Linked List', cat: 'Data Structures' },
    { id: 'bst', name: 'Binary Search Tree (BST)', cat: 'Trees' },
    { id: 'graph_bfs', name: 'Graph BFS Traversal', cat: 'Graphs' },
    { id: 'recursion', name: 'Recursion Call Stack', cat: 'Algorithms' },
    { id: 'complexity', name: 'Big-O Time Complexity', cat: 'Complexity' }
  ];

  const codeMap: { [key: string]: string } = {
    binary_search: `function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
    linear_search: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
    bubble_sort: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}`,
    selection_sort: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) swap(arr, i, minIdx);
  }
}`,
    insertion_sort: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
    stack: `class Stack {
  push(val) { this.items.push(val); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}`,
    queue: `class Queue {
  enqueue(val) { this.items.push(val); }
  dequeue() { return this.items.shift(); }
}`,
    linked_list: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}`,
    bst: `function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}`,
    graph_bfs: `function bfs(graph, start) {
  let visited = new Set(), queue = [start];
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) queue.push(neighbor);
    }
  }
}`,
    recursion: `function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1);
}`,
    complexity: `// O(1) Constant vs O(n) Linear vs O(n^2) Quadratic
// Input N = 100 elements
// O(1): 1 operation
// O(n^2): 10,000 operations!`
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-tertiary uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Visualizer Playground</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline-lg text-on-surface">
            Algorithm Visualizer 🎬
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
            Select any algorithm below to watch execution step by step with synchronized code highlighting!
          </p>
        </div>
      </div>

      {/* Algorithm Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin">
        {algorithms.map((algo) => {
          const isSelected = selectedAlgo === algo.id;

          return (
            <button
              key={algo.id}
              onClick={() => setSelectedAlgo(algo.id)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 flex-shrink-0 flex items-center space-x-2 border ${
                isSelected
                  ? 'bg-primary-container text-on-primary-container border-primary shadow-[0_0_15px_rgba(221,183,255,0.4)]'
                  : 'bg-surface-container border-white/10 text-on-surface-variant hover:text-on-surface hover:bg-white/10'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{algo.name}</span>
            </button>
          );
        })}
      </div>

      {/* Master Visualizer Component */}
      <AlgorithmVisualizer
        type={selectedAlgo}
        codeSnippet={codeMap[selectedAlgo]}
      />
    </div>
  );
};
