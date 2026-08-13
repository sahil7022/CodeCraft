import { VisualStep } from './types';

// Recursion Call Stack Steps for factorial(4)
export function generateRecursionSteps(n: number = 4): VisualStep[] {
  return [
    {
      stepIndex: 0,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" }
      ],
      activeLineCode: 1,
      explanationTitle: "Call Stack Step 1: Push factorial(4)",
      explanationReason: "factorial(4) call hua. Base case (n <= 1) false hai, to n * factorial(3) evaluate hoga."
    },
    {
      stepIndex: 1,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" },
        { funcName: "factorial(3)", args: "n = 3", status: "active" }
      ],
      activeLineCode: 7,
      explanationTitle: "Call Stack Step 2: Push factorial(3)",
      explanationReason: "factorial(3) stack par push ho gaya. Waiting for factorial(2)..."
    },
    {
      stepIndex: 2,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" },
        { funcName: "factorial(3)", args: "n = 3", status: "active" },
        { funcName: "factorial(2)", args: "n = 2", status: "active" }
      ],
      activeLineCode: 7,
      explanationTitle: "Call Stack Step 3: Push factorial(2)",
      explanationReason: "factorial(2) stack par push hua. Waiting for factorial(1)..."
    },
    {
      stepIndex: 3,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" },
        { funcName: "factorial(3)", args: "n = 3", status: "active" },
        { funcName: "factorial(2)", args: "n = 2", status: "active" },
        { funcName: "factorial(1)", args: "n = 1", status: "active" }
      ],
      activeLineCode: 3,
      explanationTitle: "BASE CASE REACHED! n = 1 🎯",
      explanationReason: "n <= 1 condition TRUE ho gayi! Base Case return 1 karega. Recursion unwind ਹੋਣਾ shuru!"
    },
    {
      stepIndex: 4,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" },
        { funcName: "factorial(3)", args: "n = 3", status: "active" },
        { funcName: "factorial(2)", args: "n = 2", returnVal: "2 * 1 = 2", status: "returning" }
      ],
      activeLineCode: 7,
      explanationTitle: "Unwinding: factorial(2) Returns 2",
      explanationReason: "factorial(1) ne 1 return kiya. 2 * 1 = 2 return hua. Call frame stack se pop ho raha hai."
    },
    {
      stepIndex: 5,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", status: "active" },
        { funcName: "factorial(3)", args: "n = 3", returnVal: "3 * 2 = 6", status: "returning" }
      ],
      activeLineCode: 7,
      explanationTitle: "Unwinding: factorial(3) Returns 6",
      explanationReason: "3 * 2 = 6 calculate ho gaya. Result upar bhej diya."
    },
    {
      stepIndex: 6,
      callStack: [
        { funcName: "factorial(4)", args: "n = 4", returnVal: "4 * 6 = 24", status: "returning" }
      ],
      activeLineCode: 7,
      explanationTitle: "Final Result: factorial(4) = 24! 🚀",
      explanationReason: "4 * 6 = 24! Saare recursive call frames resolve aur pop ho chuke hain."
    }
  ];
}
