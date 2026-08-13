import { VisualStep } from './types';

// Binary Search Step Generator
export function generateBinarySearchSteps(initialArray: number[], target: number): VisualStep[] {
  const steps: VisualStep[] = [];
  let arr = [...initialArray].sort((a, b) => a - b); // Ensure sorted array
  let low = 0;
  let high = arr.length - 1;

  steps.push({
    stepIndex: 0,
    arrayState: [...arr],
    activeRange: [low, high],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    activeLineCode: 2,
    explanationTitle: `Search Target: ${target}`,
    explanationReason: `Binary Search ke liye array pehle se sorted hai. Low = index ${low}, High = index ${high}.`
  });

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      activeRange: [low, high],
      comparingIndices: [mid],
      swappingIndices: [],
      sortedIndices: [],
      activeLineCode: 6,
      explanationTitle: `Check Middle Element (Index ${mid}: ${arr[mid]})`,
      explanationReason: `Beech wale element ko check karo! Low (${low}) aur High (${high}) ka mid hai index ${mid} (Value: ${arr[mid]}).`
    });

    if (arr[mid] === target) {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        activeRange: [mid, mid],
        comparingIndices: [],
        swappingIndices: [],
        sortedIndices: [mid],
        targetIndex: mid,
        foundIndex: mid,
        activeLineCode: 8,
        explanationTitle: `Target ${target} Found at Index ${mid}! 🎉`,
        explanationReason: `Aha! Middle element (${arr[mid]}) exact target ${target} ke barabar hai! Search successful!`
      });
      return steps;
    } else if (arr[mid] < target) {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        activeRange: [mid + 1, high],
        comparingIndices: [mid],
        swappingIndices: [],
        sortedIndices: [],
        activeLineCode: 10,
        explanationTitle: `${arr[mid]} < ${target}: Reject Left Half!`,
        explanationReason: `Middle value (${arr[mid]}) target ${target} se choti hai. Matlab target zaroor Right side hoga! Index 0 to ${mid} reject!`
      });
      low = mid + 1;
    } else {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        activeRange: [low, mid - 1],
        comparingIndices: [mid],
        swappingIndices: [],
        sortedIndices: [],
        activeLineCode: 12,
        explanationTitle: `${arr[mid]} > ${target}: Reject Right Half!`,
        explanationReason: `Middle value (${arr[mid]}) target ${target} se badi hai. Matlab target zaroor Left side hoga! Index ${mid} to ${high} reject!`
      });
      high = mid - 1;
    }
  }

  steps.push({
    stepIndex: steps.length,
    arrayState: [...arr],
    activeRange: [0, -1],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    foundIndex: -1,
    activeLineCode: 15,
    explanationTitle: `Target ${target} Not Found! 💀`,
    explanationReason: "Low index High se aage nikal gaya. Element array mein nahi mila."
  });

  return steps;
}

// Linear Search Step Generator
export function generateLinearSearchSteps(initialArray: number[], target: number): VisualStep[] {
  const steps: VisualStep[] = [];
  let arr = [...initialArray];

  steps.push({
    stepIndex: 0,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    activeLineCode: 1,
    explanationTitle: `Linear Search for ${target}`,
    explanationReason: "Line se index 0 se leke end tak ek-ek element se pucho: 'Bhai tu target hai kya?'"
  });

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      stepIndex: steps.length,
      arrayState: [...arr],
      comparingIndices: [i],
      swappingIndices: [],
      sortedIndices: [],
      activeLineCode: 3,
      explanationTitle: `Check Index ${i} (Value: ${arr[i]})`,
      explanationReason: `Checking arr[${i}] = ${arr[i]}. Kya ye target ${target} hai?`
    });

    if (arr[i] === target) {
      steps.push({
        stepIndex: steps.length,
        arrayState: [...arr],
        comparingIndices: [],
        swappingIndices: [],
        sortedIndices: [i],
        foundIndex: i,
        activeLineCode: 4,
        explanationTitle: `Target ${target} Found at Index ${i}! 🎯`,
        explanationReason: `Mil gaya target index ${i} par! Total ${i + 1} comparisons lagen.`
      });
      return steps;
    }
  }

  steps.push({
    stepIndex: steps.length,
    arrayState: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    foundIndex: -1,
    activeLineCode: 7,
    explanationTitle: `Target ${target} Not Found! 💀`,
    explanationReason: "Array ke saare elements check ho gaye par target nahi mila."
  });

  return steps;
}
