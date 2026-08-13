export const SEED_CONCEPTS = [
  {
    id: "c-searching",
    title: "Searching Algorithms",
    slug: "searching",
    category: "Searching",
    difficulty: "Easy",
    description: "Line se dhundhna band karo, smart binary technique lagao!",
    orderIndex: 1
  },
  {
    id: "c-sorting",
    title: "Sorting Algorithms",
    slug: "sorting",
    category: "Sorting",
    difficulty: "Easy",
    description: "Data ko order mein lagane ke 5 desi aur videshi tareeqe.",
    orderIndex: 2
  },
  {
    id: "c-stack-queue",
    title: "Stack & Queue",
    slug: "stack-queue",
    category: "Data Structures",
    difficulty: "Easy",
    description: "LIFO vs FIFO: Canteen ki line aur Shaadi ki thali ka Khel.",
    orderIndex: 3
  },
  {
    id: "c-linked-list",
    title: "Linked Lists",
    slug: "linked-list",
    category: "Data Structures",
    difficulty: "Medium",
    description: "Arrays jab dynamic banana ho toh memory pointers ka jaadu.",
    orderIndex: 4
  },
  {
    id: "c-trees",
    title: "Trees & BST",
    slug: "trees",
    category: "Data Structures",
    difficulty: "Medium",
    description: "Hierarchy aur fast search: Left chhota, Right bada!",
    orderIndex: 5
  },
  {
    id: "c-graphs",
    title: "Graph Traversal",
    slug: "graphs",
    category: "Algorithms",
    difficulty: "Hard",
    description: "BFS vs DFS: Social network, Google Maps aur Raste ki khoj.",
    orderIndex: 6
  },
  {
    id: "c-recursion",
    title: "Recursion & Call Stack",
    slug: "recursion",
    category: "Algorithms",
    difficulty: "Medium",
    description: "Apne aap ko call karne ki kala + Base Case ki strict warning.",
    orderIndex: 7
  },
  {
    id: "c-complexity",
    title: "Time & Space Complexity",
    slug: "complexity",
    category: "Complexity",
    difficulty: "Easy",
    description: "O(1), O(n), O(n²) ka math: Code kitna tez aur memory-hungry hai?",
    orderIndex: 8
  }
];

export const SEED_LESSONS = [
  {
    id: "l-binary-search",
    conceptId: "c-searching",
    title: "Binary Search",
    slug: "binary-search",
    explanation: "Imagine class mein 100 students roll-number order mein baithe hain aur tujhe roll no. 73 wala student dhundhna hai. Ek-ek student se 'Bhai tu 73 hai kya?' karte raha toh lecture khatam ho jayega aur professor tujhe hi attendance se bahar kar dega. 😭",
    realLifeExample: "Dictionary ya phone directory mein contact dhundhna. Tum beech se kholte ho, check karte ho ki naam A-M mein hai ya N-Z mein, aur adha panna sidhe reject kar dete ho!",
    funnyComparison: "Class mein CR (Class Representative) ke saath crush ki roll call check karna: Adhe roll numbers ek hi jhatke mein dismiss!",
    technicalNote: "Binary Search operates only on SORTED arrays. At each step, it compares the target with the middle element. If middle == target, return index. If target < middle, narrow search space to the left half. Else, search the right half. Time complexity is O(log n).",
    visualizationType: "binary_search",
    codeSnippet: `function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found target!
    } else if (arr[mid] < target) {
      low = mid + 1; // Reject left half
    } else {
      high = mid - 1; // Reject right half
    }
  }
  return -1; // Not found
}`,
    estimatedMinutes: 8,
    orderIndex: 1
  },
  {
    id: "l-bubble-sort",
    conceptId: "c-sorting",
    title: "Bubble Sort",
    slug: "bubble-sort",
    explanation: "Sabse heavy / sabse bada element paani ke bubble ki tarah taan ke end mein float ho jata hai. Har pass mein adjacent elements compare hote hain aur jo bada hai wo aage push hota hai.",
    realLifeExample: "Height wise line mein khade hona. Agar peeche wala banda aage wale se lamba hai, toh dono jagah swap karte hain jab tak sabse lamba banda last mein na chala jaye.",
    funnyComparison: "Exam center ke bahar height check setup: Sabse heavy dost sabse aage se khisak ke end mein chala jata hai!",
    technicalNote: "Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. Pass 1 guarantees largest element reaches index n-1. Time Complexity: O(n²).",
    visualizationType: "bubble_sort",
    codeSnippet: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
    estimatedMinutes: 10,
    orderIndex: 2
  },
  {
    id: "l-stack",
    conceptId: "c-stack-queue",
    title: "Stack (LIFO)",
    slug: "stack",
    explanation: "Stack ek aisi Data Structure hai jo LIFO (Last In, First Out) principle pe chalti hai. Jo sabse last mein aaya, wahi sabse pehle bahar nikalta hai.",
    realLifeExample: "Shaadi ke buffet mein rakhi Hui Khane ki Plates! Jo plate waiter sabse last mein top par rakhta hai, tum khana lene aate ho toh sabse pehle wahi uthate ho.",
    funnyComparison: "Beech se plate nikalne gaya toh upar wali saari plates neeche gir ke toot jayengi. System bol raha hai: jo last mein aaya, pehle bahar jaayega!",
    technicalNote: "Stack supports three primary operations: PUSH (insert at top), POP (remove from top), and PEEK (view top element). All operations occur at the top pointer in O(1) time complexity.",
    visualizationType: "stack",
    codeSnippet: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element); // Top par add karo
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop(); // Top element nikalo
  }

  peek() {
    return this.items[this.items.length - 1]; // Top element dekho
  }

  isEmpty() {
    return this.items.length === 0;
  }
}`,
    estimatedMinutes: 8,
    orderIndex: 3
  },
  {
    id: "l-queue",
    conceptId: "c-stack-queue",
    title: "Queue (FIFO)",
    slug: "queue",
    explanation: "Queue bilkul college canteen ya movie ticket counter ki line jaisi hai! Jo pehle line mein khada hua, ticket pehle usi ko milegi aur wahi pehle bahar niklega (First In, First Out).",
    realLifeExample: "College Canteen Mein Samosa Line: Pehle aane wale ko Samosa pehle milega. Line ke aage se banda out hota hai (DEQUEUE), aur line ke peeche se naya banda add hota hai (ENQUEUE).",
    funnyComparison: "Line tod ke beech mein ghusne ki koshish ki toh canteen uncle seedhe mana kar denge: FIFO rules apply here bro!",
    technicalNote: "Queue uses FIFO (First In First Out). ENQUEUE adds element to REAR. DEQUEUE removes element from FRONT. Time complexity for enqueue and dequeue is O(1).",
    visualizationType: "queue",
    codeSnippet: `class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // Rear par add karo
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift(); // Front se nikalo
  }

  front() {
    return this.items[0];
  }
}`,
    estimatedMinutes: 8,
    orderIndex: 4
  },
  {
    id: "l-linked-list",
    conceptId: "c-linked-list",
    title: "Singly Linked List",
    slug: "linked-list",
    explanation: "Array mein continuous memory block chahiye hota hai. Par Linked List mein har element (Node) ke paas do cheezein hoti hain: Data aur agle node ka Address (Next pointer).",
    realLifeExample: "Treasure Hunt Game! Pehli chit pe agle clue ka address hota hai. Agle clue pe usse agle clue ka address. End mein NULL milta hai matlab game over!",
    funnyComparison: "Train ke dibbe jo hooks se jude hote hain: Naya dibba add karna ho toh beech mein hook lagao, poori train dobara shift nahi karni padti!",
    technicalNote: "Each Node contains data and a pointer to the next node. Insertion/Deletion at head takes O(1) time without shifting elements like arrays require.",
    visualizationType: "linked_list",
    codeSnippet: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}`,
    estimatedMinutes: 12,
    orderIndex: 5
  },
  {
    id: "l-bst",
    conceptId: "c-trees",
    title: "Binary Search Tree (BST)",
    slug: "binary-search-tree",
    explanation: "Tree data structure jismein har node ke maximum 2 children hote hain. Rule simple hai: Root se choti value LEFT mein jayegi, aur badi value RIGHT mein!",
    realLifeExample: "College ka hierarchy structure: Principal top pe (Root), VP aur Dean left/right mein. Fast decision making bina poore college ko disturbance diye.",
    funnyComparison: "Family WhatsApp group rules: Chhote bachhe Left group mein, bade uncles Right side heavy discussions mein!",
    technicalNote: "In a Binary Search Tree, for every node: Left Subtree Values < Node Value < Right Subtree Values. Search, Insert, and Delete take O(log n) average time.",
    visualizationType: "bst",
    codeSnippet: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  
  if (val < root.val) {
    root.left = insertBST(root.left, val);
  } else {
    root.right = insertBST(root.right, val);
  }
  return root;
}`,
    estimatedMinutes: 15,
    orderIndex: 6
  },
  {
    id: "l-graphs-bfs-dfs",
    conceptId: "c-graphs",
    title: "Graph Traversal: BFS & DFS",
    slug: "graph-bfs-dfs",
    explanation: "Graph Nodes (vertices) aur Connections (edges) se banta hai. Traversing ke 2 mukhya tareeqe hain: BFS (Level by level explore karo) aur DFS (Ek raste mein poora deep ghus jao).",
    realLifeExample: "BFS is like spreading news in hostel room-by-room on your floor first. DFS is like following a dark cave route till the dead end, then backtracking!",
    funnyComparison: "BFS = Dost ke friends circle ko sabse pehle explore karna. DFS = Crush ke Instagram account pe 2018 tak scroll karke bottom tak pahunch jana!",
    technicalNote: "BFS uses a Queue to explore adjacent nodes level-by-level. DFS uses a Stack (or Recursion) to explore as deep as possible before backtracking. Time complexity is O(V + E).",
    visualizationType: "graph_bfs",
    codeSnippet: `function bfs(graph, startNode) {
  let visited = new Set();
  let queue = [startNode];
  visited.add(startNode);

  while (queue.length > 0) {
    let curr = queue.shift();
    console.log("Visited Node:", curr);

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
    estimatedMinutes: 15,
    orderIndex: 7
  },
  {
    id: "l-recursion",
    conceptId: "c-recursion",
    title: "Recursion & Call Stack",
    slug: "recursion",
    explanation: "Recursion ka matlab hai ek function ka apne aap ko hi dobara call karna. Lekin sabse zaroori cheez hai BASE CASE: nahi toh infinite loop mein ram-ram ho jayega!",
    realLifeExample: "Russian Matryoshka Doll! Ek doll ke andar doosri doll, uske andar teesri... jab tak sabse chhoti doll (Base Case) nahi milti. Phir saari dolls wapas close karte hain.",
    funnyComparison: "Mirror ke aage doosra mirror rakhna: infinite reflection dikhti hai jab tak light blur na ho jaye. Stack Overflow tabhi hota hai jab base case bhool jao!",
    technicalNote: "Recursion breaks a problem into smaller instances of the same problem. Every recursive call pushes a frame onto the Call Stack until the base case returns.",
    visualizationType: "recursion",
    codeSnippet: `function factorial(n) {
  // Base Case: Stop recursion!
  if (n <= 1) {
    return 1;
  }
  
  // Recursive Step: Function calls itself
  return n * factorial(n - 1);
}`,
    estimatedMinutes: 10,
    orderIndex: 8
  },
  {
    id: "l-complexity",
    conceptId: "c-complexity",
    title: "Time & Space Complexity",
    slug: "complexity",
    explanation: "Big-O Notation batata hai ki jaise jaise input size N badhta hai, tumhare code ke total operations aur memory usage kaise grow hote hain.",
    realLifeExample: "O(1) is instant light switch. O(n) is counting 100 students one by one. O(n²) is shaking hands with every other student in a party of 100 people (10,000 handshakes!).",
    funnyComparison: "O(n²) code laptop ko cooker bana deta hai aur fan 1000 RPM par noise karne lagta hai!",
    technicalNote: "O(1) Constant < O(log n) Logarithmic < O(n) Linear < O(n log n) Linearithmic < O(n²) Quadratic. Aim for O(log n) or O(n) for scalable algorithms.",
    visualizationType: "complexity",
    codeSnippet: `// O(1) - Constant Time
function getFirst(arr) { return arr[0]; }

// O(n) - Linear Time
function printAll(arr) {
  for(let x of arr) console.log(x);
}

// O(n^2) - Quadratic Time
function printPairs(arr) {
  for(let i of arr) {
    for(let j of arr) console.log(i, j);
  }
}`,
    estimatedMinutes: 10,
    orderIndex: 9
  }
];

export const SEED_QUIZZES = [
  {
    id: "q-binary-search-1",
    lessonId: "l-binary-search",
    question: "Binary Search algorithm chalane ke liye sabse pehli mandatory shart kya hai?",
    options: ["Array ka size 100 se bada hona chahiye", "Array properly SORTED hona chahiye", "Array mein saare numbers prime hone chahiye", "Memory mein 8GB RAM khali honi chahiye"],
    correctAnswer: 1,
    explanation: "Correct! Binary Search tabhi chal sakta hai jab elements sorted order mein hon. Agar array unsorted hoga toh adha part reject karne ki logic fail ho jayegi."
  },
  {
    id: "q-bubble-sort-1",
    lessonId: "l-bubble-sort",
    question: "Bubble Sort ke pehle complete pass ke baad kya guaranteed hota hai?",
    options: ["Poora array sort ho jata hai", "Sabse chhota element index 0 par aa jata hai", "Sabse bada element array ke LAST position par pahunch jata hai", "Array reverse ho jata hai"],
    correctAnswer: 2,
    explanation: "Sahi jawab! Bubble sort ke 1st pass mein sabse heavy/bada element bubble ki tarah taan ke end index (n-1) par set ho jata hai."
  },
  {
    id: "q-stack-1",
    lessonId: "l-stack",
    question: "Stack kis principle par kaam karta hai?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "LILO (Last In Last Out)", "Random Selection"],
    correctAnswer: 1,
    explanation: "Ekdum sahi! Stack LIFO principle follow karta hai - jaise plates ka dher, jo sabse last mein rakha wahi pehle nikalega."
  },
  {
    id: "q-queue-1",
    lessonId: "l-queue",
    question: "Canteen ki line mein samosa buy karne wale bande par kaunsa data structure rule lagta hai?",
    options: ["Stack (LIFO)", "Queue (FIFO)", "Tree (BST)", "Graph (DFS)"],
    correctAnswer: 1,
    explanation: "Bilkul sahi! Queue First In First Out (FIFO) follow karta hai - jo line mein pehle aaya use samosa pehle milega."
  }
];

export const SEED_ACHIEVEMENTS = [
  { id: "ach-1", name: "First Algorithm", description: "Completed your very first DSA lesson!", icon: "🥉", requirement: "complete_1_lesson" },
  { id: "ach-2", name: "Sorting Ninja", description: "Mastered Bubble Sort & Binary Search visualizers!", icon: "🔥", requirement: "complete_sorting" },
  { id: "ach-3", name: "Complexity Crusher", description: "Understood O(1) vs O(n²)... Laptop bacha liya!", icon: "🧠", requirement: "complete_complexity" },
  { id: "ach-4", name: "Node Connector", description: "Built and traversed Linked List pointers!", icon: "🔗", requirement: "complete_linked_list" },
  { id: "ach-5", name: "Tree Climber", description: "Successfully inserted items into a BST!", icon: "🌳", requirement: "complete_bst" },
  { id: "ach-6", name: "Graph Explorer", description: "Traversed BFS and DFS graphs like a map pro!", icon: "🕸️", requirement: "complete_graph" },
  { id: "ach-7", name: "Speed Demon", description: "Scored 100% on 3 interactive quizzes in a row!", icon: "⚡", requirement: "quiz_streak_3" },
  { id: "ach-8", name: "DSA Beast", description: "Unlocked all core DSA modules without bakchodi!", icon: "🏆", requirement: "complete_all_concepts" }
];
