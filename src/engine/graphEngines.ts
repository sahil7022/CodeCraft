import { VisualStep } from './types';

// Graph BFS Step Generator
export function generateBFSSteps(): VisualStep[] {
  const nodes = [
    { id: 'A', label: 'A (Hostel)', x: 100, y: 80, state: 'unvisited' as const },
    { id: 'B', label: 'B (Library)', x: 220, y: 50, state: 'unvisited' as const },
    { id: 'C', label: 'C (Canteen)', x: 220, y: 140, state: 'unvisited' as const },
    { id: 'D', label: 'D (Lab)', x: 340, y: 50, state: 'unvisited' as const },
    { id: 'E', label: 'E (Auditorium)', x: 340, y: 140, state: 'unvisited' as const }
  ];

  const edges = [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'B', to: 'D' },
    { from: 'C', to: 'E' }
  ];

  return [
    {
      stepIndex: 0,
      graphNodes: nodes,
      graphEdges: edges,
      activeQueue: ['A'],
      activeLineCode: 1,
      explanationTitle: "BFS Traversal: Start at Node A",
      explanationReason: "Queue mein start node A daala. BFS pehle saare immediate level neighbors ko visit karega."
    },
    {
      stepIndex: 1,
      graphNodes: nodes.map(n => n.id === 'A' ? { ...n, state: 'visited' as const } : n.id === 'B' || n.id === 'C' ? { ...n, state: 'queued' as const } : n),
      graphEdges: edges.map(e => e.from === 'A' ? { ...e, active: true } : e),
      activeQueue: ['B', 'C'],
      activeLineCode: 6,
      explanationTitle: "Visited A -> Neighbors B & C Enqueued!",
      explanationReason: "Node A ke adjacent neighbors hain B (Library) aur C (Canteen). Dono Queue mein add ho gaye!"
    },
    {
      stepIndex: 2,
      graphNodes: nodes.map(n => n.id === 'A' || n.id === 'B' ? { ...n, state: 'visited' as const } : n.id === 'D' ? { ...n, state: 'queued' as const } : n.id === 'C' ? { ...n, state: 'queued' as const } : n),
      graphEdges: edges.map(e => (e.from === 'A' || (e.from === 'B' && e.to === 'D')) ? { ...e, active: true } : e),
      activeQueue: ['C', 'D'],
      activeLineCode: 8,
      explanationTitle: "Dequeued B -> Visited B, Enqueued D (Lab)",
      explanationReason: "Queue ke front se B nikla. B ke neighbor D (Lab) ko Queue mein enqueued kiya."
    },
    {
      stepIndex: 3,
      graphNodes: nodes.map(n => ({ ...n, state: 'visited' as const })),
      graphEdges: edges.map(e => ({ ...e, active: true })),
      activeQueue: [],
      activeLineCode: 12,
      explanationTitle: "BFS Complete! Saare Nodes Visited Level by Level 🎉",
      explanationReason: "Traversal order: A -> B -> C -> D -> E. Queue empty!"
    }
  ];
}
