import { VisualStep } from './types';

// Stack Steps (Push, Pop, Peek)
export function generateStackSteps(initialItems: (number | string)[] = [10, 20, 30]): {
  pushSteps: (val: number | string) => VisualStep[];
  popSteps: () => VisualStep[];
  peekSteps: () => VisualStep[];
} {
  return {
    pushSteps: (val: number | string) => {
      const items = [...initialItems];
      const newItems = [...items, val];
      return [
        {
          stepIndex: 0,
          stackItems: items.map((v, i) => ({ id: `s-${i}`, value: v, isTop: i === items.length - 1 })),
          activeLineCode: 2,
          explanationTitle: `PUSH Operation: Adding ${val}`,
          explanationReason: `Naya element ${val} Stack ke sabse TOP par enter karega!`
        },
        {
          stepIndex: 1,
          stackItems: newItems.map((v, i) => ({
            id: `s-${i}`,
            value: v,
            isTop: i === newItems.length - 1,
            isNew: i === newItems.length - 1
          })),
          actionType: 'PUSH',
          activeLineCode: 3,
          explanationTitle: `Element ${val} Added to TOP! 🥞`,
          explanationReason: `LIFO Rule: Naya element ${val} top par set ho gaya. Total elements: ${newItems.length}.`
        }
      ];
    },
    popSteps: () => {
      const items = [...initialItems];
      if (items.length === 0) {
        return [{
          stepIndex: 0,
          stackItems: [],
          activeLineCode: 6,
          explanationTitle: "Stack Underflow Error!",
          explanationReason: "Stack khali hai! Pop karne ke liye koi element bacha hi nahi."
        }];
      }
      const poppedVal = items[items.length - 1];
      const remainingItems = items.slice(0, items.length - 1);
      return [
        {
          stepIndex: 0,
          stackItems: items.map((v, i) => ({ id: `s-${i}`, value: v, isTop: i === items.length - 1 })),
          activeLineCode: 6,
          explanationTitle: `POP Operation: Target ${poppedVal}`,
          explanationReason: `LIFO Principle: Jo element sabse LAST mein aaya tha (${poppedVal}), pehle wahi POP bahar niklega!`
        },
        {
          stepIndex: 1,
          stackItems: remainingItems.map((v, i) => ({ id: `s-${i}`, value: v, isTop: i === remainingItems.length - 1 })),
          actionType: 'POP',
          activeLineCode: 7,
          explanationTitle: `Element ${poppedVal} Popped Out! 🚀`,
          explanationReason: `Shaadi ki plate nikal gayi! Ab naya TOP element hai index ${remainingItems.length - 1}.`
        }
      ];
    },
    peekSteps: () => {
      const items = [...initialItems];
      const topVal = items[items.length - 1];
      return [
        {
          stepIndex: 0,
          stackItems: items.map((v, i) => ({ id: `s-${i}`, value: v, isTop: i === items.length - 1 })),
          actionType: 'PEEK',
          activeLineCode: 10,
          explanationTitle: `PEEK Operation: Top is ${topVal}`,
          explanationReason: "Peek bina koi plate uthaye sirf TOP element ka view dikhata hai!"
        }
      ];
    }
  };
}

// Queue Steps (Enqueue, Dequeue)
export function generateQueueSteps(initialItems: (number | string)[] = [10, 20, 30]): {
  enqueueSteps: (val: number | string) => VisualStep[];
  dequeueSteps: () => VisualStep[];
} {
  return {
    enqueueSteps: (val: number | string) => {
      const items = [...initialItems];
      const newItems = [...items, val];
      return [
        {
          stepIndex: 0,
          queueItems: items.map((v, i) => ({ id: `q-${i}`, value: v, isFront: i === 0, isRear: i === items.length - 1 })),
          activeLineCode: 2,
          explanationTitle: `ENQUEUE: ${val} Joining Line`,
          explanationReason: `Naya candidate ${val} canteen queue ke REAR (Peeche) mein khada hone wala hai.`
        },
        {
          stepIndex: 1,
          queueItems: newItems.map((v, i) => ({
            id: `q-${i}`,
            value: v,
            isFront: i === 0,
            isRear: i === newItems.length - 1
          })),
          actionType: 'ENQUEUE',
          activeLineCode: 3,
          explanationTitle: `Element ${val} Enqueued at REAR! 🎟️`,
          explanationReason: `FIFO Rule: ${val} sabse last mein aaya, toh queue ke REAR par add ho gaya.`
        }
      ];
    },
    dequeueSteps: () => {
      const items = [...initialItems];
      if (items.length === 0) {
        return [{
          stepIndex: 0,
          queueItems: [],
          activeLineCode: 6,
          explanationTitle: "Queue Underflow!",
          explanationReason: "Canteen line khali hai! Dequeue karne ke liye koi student nahi bacha."
        }];
      }
      const dequeuedVal = items[0];
      const remainingItems = items.slice(1);
      return [
        {
          stepIndex: 0,
          queueItems: items.map((v, i) => ({ id: `q-${i}`, value: v, isFront: i === 0, isRear: i === items.length - 1 })),
          activeLineCode: 6,
          explanationTitle: `DEQUEUE: Serving FRONT Candidate ${dequeuedVal}`,
          explanationReason: `FIFO Principle: Jo candidate sabse pehle aaya tha (${dequeuedVal}), use pehle samosa mila aur wo out hoga!`
        },
        {
          stepIndex: 1,
          queueItems: remainingItems.map((v, i) => ({ id: `q-${i}`, value: v, isFront: i === 0, isRear: i === remainingItems.length - 1 })),
          actionType: 'DEQUEUE',
          activeLineCode: 7,
          explanationTitle: `${dequeuedVal} Left the Queue! 😋`,
          explanationReason: `Front candidate nikal gaya. Ab agla candidate FRONT par aage badh gaya.`
        }
      ];
    }
  };
}

// Linked List Step Generator
export function generateLinkedListSteps(initialValues: number[] = [10, 20, 30, 40]): VisualStep[] {
  const steps: VisualStep[] = [];
  const nodes = initialValues.map((val, idx) => ({
    id: `node-${idx}`,
    value: val,
    nextId: idx < initialValues.length - 1 ? `node-${idx + 1}` : null
  }));

  steps.push({
    stepIndex: 0,
    listNodes: nodes,
    activeLineCode: 1,
    explanationTitle: "Linked List Structure Ready",
    explanationReason: "Har Node mein DATA aur NEXT Pointer hai. Head = [10] -> [20] -> [30] -> [40] -> NULL."
  });

  // Traversal Step simulation
  nodes.forEach((n, idx) => {
    steps.push({
      stepIndex: idx + 1,
      listNodes: nodes.map((node, i) => ({
        ...node,
        isHighlight: i === idx
      })),
      activeLineCode: 4,
      explanationTitle: `Traversing Node ${n.value}`,
      explanationReason: `Current pointer is at Node with value ${n.value}. Next pointer points to: ${n.nextId ? 'Next Node' : 'NULL'}.`
    });
  });

  return steps;
}

// BST Insertion Steps
export function generateBSTSteps(insertValues: number[] = [50, 30, 70, 20, 40]): VisualStep[] {
  const steps: VisualStep[] = [];
  
  steps.push({
    stepIndex: 0,
    treeNodes: [
      { id: 'node-50', value: 50, leftId: 'node-30', rightId: 'node-70', isVisited: true },
      { id: 'node-30', value: 30, leftId: 'node-20', rightId: 'node-40', isVisited: false },
      { id: 'node-70', value: 70, isVisited: false },
      { id: 'node-20', value: 20, isVisited: false },
      { id: 'node-40', value: 40, isVisited: false }
    ],
    activeLineCode: 1,
    explanationTitle: "Binary Search Tree (BST) Initialized",
    explanationReason: "Rule: Root value (50) se choti values Left Subtree mein aur badi values Right Subtree mein jati hain!"
  });

  steps.push({
    stepIndex: 1,
    treeNodes: [
      { id: 'node-50', value: 50, leftId: 'node-30', rightId: 'node-70', isVisited: true },
      { id: 'node-30', value: 30, leftId: 'node-20', rightId: 'node-40', isVisited: true, isCurrent: true },
      { id: 'node-70', value: 70, isVisited: false },
      { id: 'node-20', value: 20, isVisited: false },
      { id: 'node-40', value: 40, isVisited: false }
    ],
    activeLineCode: 6,
    explanationTitle: "Checking Branch: 30 < 50 (Move LEFT)",
    explanationReason: "30 ki value 50 se choti hai, isliye hum Left Branch follow karenge!"
  });

  steps.push({
    stepIndex: 2,
    treeNodes: [
      { id: 'node-50', value: 50, leftId: 'node-30', rightId: 'node-70', isVisited: true },
      { id: 'node-30', value: 30, leftId: 'node-20', rightId: 'node-40', isVisited: true },
      { id: 'node-70', value: 70, isVisited: true, isCurrent: true },
      { id: 'node-20', value: 20, isVisited: false },
      { id: 'node-40', value: 40, isVisited: false }
    ],
    activeLineCode: 8,
    explanationTitle: "Checking Branch: 70 > 50 (Move RIGHT)",
    explanationReason: "70 ki value 50 se badi hai, isliye 70 Right Branch mein placed hua!"
  });

  return steps;
}
