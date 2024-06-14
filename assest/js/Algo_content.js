const data = [
 
  {
    "content_id": 2183,
    "title": "Queue",
    "overview": "A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of 'First In, First Out' (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow. <img style='width:100%' class='img-fluid mt-2' src='./assest/image/queue.png'>",
    "What is Queue in Data Structures?": "A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It operates like a line where elements are added at one end (rear) and removed from the other end (front). The first element added to the queue is the first one to be removed.",
    "Basic Operations of Queue Data Structure?": "<b>Enqueue (Insert):</b> Adds an element to the rear of the queue.<br> <b>Dequeue (Delete):</b> Removes and returns the element from the front of the queue.<br> <b>Peek (Front):</b> Returns the element at the front of the queue without removing it.<br> <b>isEmpty:</b> Checks if the queue is empty.<br> <b>Size:</b> Checks the number of elements in the queue.",
    "Properties of Queue": "<b>Order:</b> Queues maintain the order of elements based on the FIFO principle.<br> <b>Dynamic Size:</b> The size of the queue can change dynamically as elements are added or removed.<br> <b>Access:</b> Elements can be added at the rear and removed from the front of the queue.",
    "Applications of Queue": "<b>Task Scheduling:</b> Used in operating systems for managing tasks and processes.<br> <b>Data Transfer:</b> Utilized in network communication protocols to manage data packets.<br> <b>Simulation:</b> Simulates real-world systems like waiting lines and customer service.<br> <b>Breadth-First Search (BFS):</b> Implements BFS algorithm for graph traversal.<br> <b>Print Spooling:</b> Manages print jobs in a printer queue.",
    "Advantages of Using Queue": "<b>Order Preservation:</b> Maintains the order of elements, ensuring first-come, first-served processing.<br> <b>Efficiency:</b> Provides efficient handling of data in real-time systems and applications.<br> <b>Simplicity:</b> Simple to implement and use for managing data with FIFO order.",
    "Disadvantages of Using Queue": "<b>Limited Access:</b> Can only access the front and rear elements, making random access difficult.<br> <b>Fixed Size (in some implementations):</b> Static queues have a fixed size, which can be limiting if not managed properly.",
    "Queue Variations": "<b>Double-Ended Queue (Deque):</b> Allows insertion and deletion from both ends.<br> <b>Circular Queue:</b> A queue implementation where the last position is connected back to the first position, forming a circle.<br> <b>Priority Queue:</b> Elements are dequeued based on priority rather than the order of insertion.",
    "Real-World Examples of Queues": "<b>Customer Service:</b> Managing customers in a service line or call center.<br> <b>Printer Queue:</b> Handling multiple print jobs sent to a printer.<br> <b>CPU Scheduling:</b> Managing processes in an operating system.<br> <b>Network Buffers:</b> Storing data packets in routers and switches.<br> <b>Message Queuing:</b> Managing messages between distributed systems and applications."
},
  {
    "content_id": 4184,
    "title": "Stack",
    "overview": "A Stack Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of 'Last In, First Out' (LIFO), where the last element added to the stack is the first one to be removed. Stacks are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow. <img style='width:100%' class='img-fluid mt-2' src='./assest/image/stack.png'>",
    "What is Stack in Data Structures?": "A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It operates like a pile of books where elements are added and removed from the top. The most recently added element is the first one to be removed.",
    "Basic Operations of Stack Data Structure?": "<b>Push (Insert):</b> Adds an element to the top of the stack.<br> <b>Pop (Delete):</b> Removes and returns the element from the top of the stack.<br> <b>Peek (Top):</b> Returns the element at the top of the stack without removing it.<br> <b>isEmpty:</b> Checks if the stack is empty.<br> <b>Size:</b> Checks the number of elements in the stack.",
    "Properties of Stack": "<b>Order:</b> Stacks maintain the order of elements based on the LIFO principle.<br> <b>Dynamic Size:</b> The size of the stack can change dynamically as elements are added or removed.<br> <b>Access:</b> Elements can only be accessed, added, or removed from the top of the stack.",
    "Applications of Stack": "<b>Expression Evaluation:</b> Used in evaluating arithmetic expressions, including infix, postfix, and prefix notations.<br> <b>Syntax Parsing:</b> Essential in parsing expressions, code, and syntax in compilers and interpreters.<br> <b>Backtracking Algorithms:</b> Used in algorithms like maze solving, depth-first search (DFS), and finding paths.<br> <b>Function Call Management:</b> Manages function calls and returns in recursion, storing return addresses and local variables.<br> <b>Undo Mechanisms:</b> Implements undo features in text editors and other software applications.<br> <b>Navigation:</b> Manages the history of visited pages in web browsers, allowing users to navigate back and forth.",
    "Advantages of Using Stack": "<b>Simplicity:</b> Easy to implement and use for managing data with LIFO order.<br> <b>Efficiency:</b> Provides efficient access to the most recently added elements.<br> <b>Memory Management:</b> Helps in memory management through function call management in recursion.",
    "Disadvantages of Using Stack": "<b>Limited Access:</b> Can only access the top element, making random access impossible.<br> <b>Fixed Size (in some implementations):</b> Static stacks have a fixed size, which can be limiting if not managed properly.",
    "Stack Variations": "<b>Double-Ended Stack (Deque):</b> Allows insertion and deletion from both ends.<br> <b>Circular Stack:</b> A stack implementation where the last position is connected back to the first position, forming a circle.",
    "Real-World Examples of Stacks": "<b>Call Stack:</b> Used by programming languages to keep track of function calls.<br> <b>Browser History:</b> Back and forward navigation in web browsers.<br> <b>Text Editor Undo:</b> Stores the history of changes to enable undo functionality.<br> <b>Balanced Parentheses:</b> Checking balanced parentheses in an expression.<br> <b>Expression Conversion:</b> Converting infix expressions to postfix or prefix forms."
},
  {
    "content_id": 3183,
    "title": "Binary Search",
    "Binary Search": `Binary Search is a searching algorithm for finding an element's position in a sorted array. In this approach, the element is always searched in the middle of a portion of an array. <br><i>Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.</i>`,
    "Time Complexities": `<b>Best case complexity </b>: O(1)<br>
        <b>Average case complexity </b>: O(log n)<br>
        <b>Worst case complexity </b>: O(log n)`
  }, {
    "content_id": 2078,
    "title": "Bubble Sort Visualiser",
    "overview": "Visualising Bubble sort Algorithm",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"
  },
  {
    "content_id": 3078,
    "title": "Selection Sort Visualiser",
    "overview": "Visualising Selection sort Algorithm",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"
  },

  {
    "content_id": 1265,
    "title": "Sliding WindowVisualiser",
    "overview": "Visualising Sliding Window Algorithm",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"

  },
  {
    "content_id": 4078,
    "title": "Merge Sort Visualiser",
    "overview": "Visualising Merge Sort Algorithm",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"

  }
];



function printData(contentId) {
  const outputDiv = document.getElementById('output');
  let html = '';
  const dsa = data.find(item => item.content_id === contentId);
  document.getElementById("algo_title").innerText = dsa.title
  //console.log(dsa.content_id)
  if (!dsa) {
    outputDiv.innerHTML = 'Data structure not found.';
    return;
  }
  for (const [key, value] of Object.entries(dsa)) {
    if (key != 'content_id' && key != 'title') {
      html += `<p><strong>${key} <br></strong> ${value}</p>`;
    }
  }
  outputDiv.innerHTML = html;
}
//console.log(curre_DSA)
//console.log(curre_DSA[0].content_id)
printData(curre_DSA[0].content_id);