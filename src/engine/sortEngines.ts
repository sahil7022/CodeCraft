import { VisualStep } from './types';

// Bubble Sort Step Generator
export function generateBubbleSortSteps(initialArray: number[]): VisualStep[] {
  const steps: VisualStep[] = [];
  let arr = [...initialArray];
  let n = arr.length;
  let sorted: number[] = [];

  steps.push({
    stepIndex: 0,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    activeLineCode: 1,
    explanationTitle: "Array Ready!",
    explanationReason: "Unsorted array se shuru kar rahe hain. Har pass mein adjacent elements check honge."
  });

  for (let i = 0; i < n - 1; i++) {
    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      comparingIndices: [],
      swappingIndices: [],
      sortedIndices: [...sorted],
      activeLineCode: 3,
      explanationTitle: `Pass ${i + 1} Shuru`,
      explanationReason: `Loop ${i + 1}: Sabse heavy element ko array ke right side tak float karke bhejenge.`
    });

    for (let j = 0; j < n - i - 1; j++) {
      // Step: Compare arr[j] and arr[j+1]
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        comparingIndices: [j, j + 1],
        swappingIndices: [],
        sortedIndices: [...sorted],
        activeLineCode: 5,
        explanationTitle: `Compare ${arr[j]} aur ${arr[j + 1]}`,
        explanationReason: `${arr[j]} aur ${arr[j + 1]} check ho rahe hain. Agar pehla bada hua, tabhi swap karenge!`
      });

      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        steps.push({
          stepIndex: steps.length,
          arrayState: [...arr],
          comparingIndices: [],
          swappingIndices: [j, j + 1],
          sortedIndices: [...sorted],
          activeLineCode: 8,
          explanationTitle: `Swap ${arr[j + 1]} ↔ ${arr[j]}`,
          explanationReason: `${arr[j + 1]} bada tha ${arr[j]} se, isliye swap kar diya!`
        });
      }
    }
    sorted.push(n - i - 1);
    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      comparingIndices: [],
      swappingIndices: [],
      sortedIndices: [...sorted],
      activeLineCode: 11,
      explanationTitle: `Element ${arr[n - i - 1]} Sorted!`,
      explanationReason: `Is pass ka sabse bada element ${arr[n - i - 1]} apni sahi jagah par pahunch gaya.`
    });
  }

  sorted.push(0);
  steps.push({
    stepIndex: steps.length,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, idx) => idx),
    activeLineCode: 13,
    explanationTitle: "Mubarak ho! Bubble Sort Complete! 🎉",
    explanationReason: "Saare elements correctly ascending order mein arrange ho chuke hain."
  });

  return steps;
}

// Selection Sort Step Generator
export function generateSelectionSortSteps(initialArray: number[]): VisualStep[] {
  const steps: VisualStep[] = [];
  let arr = [...initialArray];
  let n = arr.length;
  let sorted: number[] = [];

  steps.push({
    stepIndex: 0,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    activeLineCode: 1,
    explanationTitle: "Selection Sort Initialized",
    explanationReason: "Har step mein unsorted part se minimum element dhundenge aur use aage place karenge."
  });

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        comparingIndices: [minIdx, j],
        swappingIndices: [],
        sortedIndices: [...sorted],
        activeLineCode: 4,
        explanationTitle: `Finding Minimum (Curr Min: ${arr[minIdx]})`,
        explanationReason: `Index ${j} par value ${arr[j]} ko current min ${arr[minIdx]} se compare kar rahe hain.`
      });

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;

      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        comparingIndices: [],
        swappingIndices: [i, minIdx],
        sortedIndices: [...sorted],
        activeLineCode: 8,
        explanationTitle: `Swapping Min Element ${arr[i]}`,
        explanationReason: `Found smallest element ${arr[i]}! Swap kar diya index ${i} par.`
      });
    }

    sorted.push(i);
  }

  sorted.push(n - 1);
  steps.push({
    stepIndex: steps.length,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, idx) => idx),
    activeLineCode: 12,
    explanationTitle: "Selection Sort Complete! 🏆",
    explanationReason: "Sabse chhote elements select karke order mein place ho gaye."
  });

  return steps;
}

// Insertion Sort Step Generator
export function generateInsertionSortSteps(initialArray: number[]): VisualStep[] {
  const steps: VisualStep[] = [];
  let arr = [...initialArray];
  let n = arr.length;

  steps.push({
    stepIndex: 0,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [0],
    activeLineCode: 1,
    explanationTitle: "Insertion Sort Ready",
    explanationReason: "Jaise taash ke patte sort karte hain: ek-ek key ko sorted subarray mein sahi jagah insert karenge."
  });

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      comparingIndices: [i],
      swappingIndices: [],
      sortedIndices: Array.from({ length: i }, (_, idx) => idx),
      activeLineCode: 3,
      explanationTitle: `Pick Key Element: ${key}`,
      explanationReason: `Element ${key} ko pichle sorted array mein correct position pe fit karna hai.`
    });

    while (j >= 0 && arr[j] > key) {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        comparingIndices: [j, j + 1],
        swappingIndices: [],
        sortedIndices: Array.from({ length: i }, (_, idx) => idx),
        activeLineCode: 5,
        explanationTitle: `Shift ${arr[j]} Right`,
        explanationReason: `${arr[j]} bada hai key ${key} se, isliye right shift karenge.`
      });

      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;

    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      comparingIndices: [],
      swappingIndices: [j + 1],
      sortedIndices: Array.from({ length: i + 1 }, (_, idx) => idx),
      activeLineCode: 8,
      explanationTitle: `Inserted ${key} at Position ${j + 1}`,
      explanationReason: `Key element ${key} apne sahi sorted position pe insert ho gaya!`
    });
  }

  steps.push({
    stepIndex: steps.length,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, idx) => idx),
    activeLineCode: 11,
    explanationTitle: "Insertion Sort Complete! 🔥",
    explanationReason: "Poora array taash ke patton ki tarah perfectly sorted hai."
  });

  return steps;
}
