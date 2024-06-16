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
  "overview": "Binary Search is a fundamental algorithm in computer science used for finding an element in a sorted array. It follows the principle of dividing the search interval in half repeatedly until the target value is found or the interval is empty. Binary Search is known for its efficiency and speed, making it a widely used algorithm in various applications.",
  "What is Binary Search?": "Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the target element is less than the middle element of the interval, the interval is narrowed to the lower half. Otherwise, it is narrowed to the upper half. The process continues until the target element is found or the interval is empty.",
  "Steps of Binary Search Algorithm": "Step 1: Start with the middle element of the sorted array.\nStep 2: If the middle element is the target value, return its index.\nStep 3: If the target value is less than the middle element, repeat the search on the left half.\nStep 4: If the target value is greater than the middle element, repeat the search on the right half.\nStep 5: Continue until the target value is found or the search interval is empty.",
  "Properties of Binary Search": "Efficiency: Operates in O(log n) time complexity, making it highly efficient for large datasets.\nRequires Sorted Data: Can only be applied to a sorted array or list.\nDivide and Conquer: Utilizes the divide and conquer strategy by repeatedly dividing the search interval.",
  "Applications of Binary Search": "Searching in Databases: Used to quickly find records in large databases.\nDictionary Lookups: Efficiently looks up words and their meanings in a dictionary.\nDebugging: Helps in debugging by quickly narrowing down the location of errors in code.\nData Analysis: Used in various data analysis techniques to efficiently search through data.\nGames: Used in games for various search-related functionalities, such as pathfinding.",
  "Advantages of Using Binary Search": "High Efficiency: Much faster than linear search for large datasets due to its O(log n) time complexity.\nSimplicity: Relatively simple algorithm to understand and implement.\nPredictable Performance: Provides consistent and predictable performance regardless of the dataset size.",
  "Disadvantages of Using Binary Search": "Requires Sorted Data: The array must be sorted prior to performing the binary search.\nStatic Data: Inefficient for datasets that change frequently due to the need for re-sorting.\nIndex-Based: Only applicable to data structures that allow random access, such as arrays.",
  "Real-World Examples of Binary Search": "Looking Up Words: Efficiently searching for words in a dictionary.\nLibrary Catalogs: Finding books in a sorted library catalog.\nOnline Shopping: Searching for products in a sorted list of items.\nVersion Control: Finding changes in a sorted list of versions in version control systems.\nStock Prices: Analyzing historical stock prices for a particular date.",
  "Why is the Time Complexity of Binary Search O(log n)?": "Explanation: Binary Search works by repeatedly dividing the search interval in half. In each step, the size of the interval is halved, leading to a logarithmic reduction in the number of elements to be checked. Therefore, the time complexity is O(log n), where n is the number of elements in the array. The base of the logarithm is 2, but in Big-O notation, the base is not specified because it only affects the constant factor, not the overall complexity."
}
, {
    "content_id": 2078,
    "title": "Bubble Sort Visualiser",
    "overview": "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order, gradually moving the largest element to its correct position.",
    "time complexity": "<b>BestCase: </b>O(n) - when the array is already sorted.<br> <b>AverageCase: </b> O(n^2) <br><b>WorstCase</b> when the array is sorted in reverse order",
    "Space complexity": " O(1)"
  },
  {
    "content_id": 3078,
    "title": "Selection Sort Visualiser",
    "overview": "Selection Sort repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element.",
    "time complexity": " O(n^2)",
    "Space complexity": " O(1)"
  },
  {
    "content_id": 1265,
    "title": "Sliding Window",
    "overview": "The Sliding Window technique is a powerful and versatile method used in computer science for solving problems that involve arrays or lists. It helps optimize the process of calculating sums, averages, or other metrics over a subset of elements by maintaining a window that slides over the data. This technique is essential in scenarios where the data set is large, and a brute-force approach would be inefficient. <img style='width:100%' class='img-fluid mt-2' src='./assest/image/sliding_window.png'>",
    "What is Sliding Window Technique?": "The Sliding Window technique is an algorithmic method used for calculating values over a subset of elements in an array or list. It involves maintaining a window that slides over the data, updating the required values as it moves from one position to the next.",
    "Basic Operations of Sliding Window Technique?": "<b>Initialize Window:</b> Set the initial position and size of the window.<br> <b>Slide Window:</b> Move the window one position to the right (or left, depending on the problem).<br> <b>Update Values:</b> Add the new element entering the window and remove the element exiting the window to update the required values efficiently.",
    "Properties of Sliding Window": "<b>Efficiency:</b> Reduces the time complexity of problems that would otherwise require nested loops.<br> <b>Flexibility:</b> Can be adjusted to handle different window sizes and movements.<br> <b>Locality:</b> Operates on contiguous subsets of the data, maintaining a local view of the window elements.",
    "Applications of Sliding Window": "<b>Maximum/Minimum Values:</b> Finding the maximum or minimum values in subarrays of fixed size.<br> <b>Substring Problems:</b> Solving problems related to finding unique substrings or anagrams in strings.<br> <b>Average Calculations:</b> Computing the average of elements within a sliding window.<br> <b>Pattern Matching:</b> Used in algorithms like the Rabin-Karp algorithm for string matching.<br> <b>Data Stream Processing:</b> Managing real-time data streams for monitoring and analysis.",
    "Advantages of Using Sliding Window": "<b>Reduced Complexity:</b> Minimizes the time complexity by avoiding redundant calculations.<br> <b>Scalability:</b> Efficiently handles large data sets by maintaining a fixed-size window.<br> <b>Versatility:</b> Applicable to a wide range of problems involving contiguous data subsets.",
    "Disadvantages of Using Sliding Window": "<b>Fixed Window Size:</b> May require adjustments or additional logic to handle variable window sizes.<br> <b>Boundary Handling:</b> Requires careful management of window boundaries, especially at the edges of the data set.",
    "Sliding Window Variations": "<b>Fixed-size Sliding Window:</b> The window size remains constant as it slides over the data.<br> <b>Variable-size Sliding Window:</b> The window size can expand or shrink based on the problem's requirements.<br> <b>Two-pointer Technique:</b> A variant that uses two pointers to represent the window's boundaries dynamically.",
    "Real-World Examples of Sliding Window": "<b>Network Traffic Monitoring:</b> Analyzing packet flows over a fixed time window.<br> <b>Stock Price Analysis:</b> Calculating moving averages of stock prices.<br> <b>Sensor Data Processing:</b> Managing and analyzing data from sensors in real-time.<br> <b>Audio/Video Processing:</b> Smoothing signals or frames over time.<br> <b>Algorithm Optimization:</b> Enhancing algorithms like substring search, maximum subarray, and others."
},
  
{
  "content_id": 2265,
  "title": "Two Pointer Technique",
  "overview": "The Two Pointer technique is a fundamental concept in computer science used for solving problems that involve searching or processing elements in an array or list. This technique utilizes two pointers that traverse the data structure from different ends or positions to efficiently solve a variety of problems. It is particularly useful for problems involving sorted arrays and for optimizing the time complexity of algorithms. <img style='width:100%' class='img-fluid mt-2' src='./assest/image/two_pointer.png'>",
  "What is Two Pointer Technique?": "The Two Pointer technique is an algorithmic strategy where two pointers are used to iterate through an array or list from different starting points, typically from the beginning and the end. This method is effective for solving problems such as finding pairs that meet certain criteria, merging sorted arrays, and more.",
  "Basic Operations of Two Pointer Technique?": "<b>Initialize Pointers:</b> Set two pointers at the desired starting positions, usually at the beginning and end of the array.<br> <b>Move Pointers:</b> Adjust the pointers based on the problem's requirements, such as moving one pointer forward and the other backward.<br> <b>Check Condition:</b> Evaluate the condition or criteria for the current elements pointed to by the two pointers.<br> <b>Update Pointers:</b> Modify the positions of the pointers based on the result of the condition check.",
  "Properties of Two Pointer": "<b>Efficiency:</b> Reduces the time complexity of problems by eliminating the need for nested loops.<br> <b>Simplicity:</b> Easy to implement and understand for many common problems.<br> <b>Versatility:</b> Applicable to a wide range of problems involving sorted and unsorted arrays.",
  "Applications of Two Pointer": "<b>Finding Pairs:</b> Identifying pairs of elements that sum to a specific target.<br> <b>Merge Sorted Arrays:</b> Combining two sorted arrays into one sorted array.<br> <b>Partitioning:</b> Dividing an array into parts based on certain conditions.<br> <b>Palindrome Checking:</b> Determining if a string is a palindrome by comparing characters from both ends.<br> <b>Interval Problems:</b> Solving problems that involve overlapping intervals or ranges.",
  "Advantages of Using Two Pointer": "<b>Optimized Performance:</b> Significantly reduces time complexity compared to brute-force methods.<br> <b>Simple Implementation:</b> Straightforward to code and debug.<br> <b>Memory Efficient:</b> Typically requires constant space, making it space efficient.",
  "Disadvantages of Using Two Pointer": "<b>Limited to Specific Problems:</b> Not suitable for problems that do not fit the two-pointer paradigm.<br> <b>Sorted Data Requirement:</b> Often requires the data to be sorted, which may involve additional preprocessing.",
  "Two Pointer Variations": "<b>Fixed Distance Pointers:</b> Pointers move in a fixed pattern relative to each other.<br> <b>Opposite Direction Pointers:</b> Pointers start at opposite ends and move towards each other.<br> <b>Same Direction Pointers:</b> Pointers move in the same direction but at different speeds or steps.",
  "Real-World Examples of Two Pointer": "<b>Array Pair Sum:</b> Finding pairs of numbers in an array that add up to a specific sum.<br> <b>Interval Merging:</b> Combining overlapping intervals in scheduling or booking systems.<br> <b>String Processing:</b> Checking if a string is a palindrome or finding substrings that match a given pattern.<br> <b>Sorting and Merging:</b> Merging sorted files or datasets efficiently.<br> <b>Two-Sum Problem:</b> Solving the classic two-sum problem efficiently."
},


  {
    "content_id": 4078,
    "title": "Merge Sort Visualiser",
    "overview": "Divides the array into halves recursively, sorts each half, and merges them to achieve a sorted array. ",
    "time complexity": "O(n log n)",
    "Space complexity": "O(n) - requires additional memory proportional to the array size"

  },
  {
    "content_id": 5078,
    "title": "Linked List Visualiser",
    "overview": "Visualising Linked List Data Structure",
    "operations": "<b>Insert:</b> Add an element to the list.</br> <b>Delete:</b>  Remove an element from the list.",
    "usage": "<ul> <li>Enter value to add Node to the end of the Linked List</li><li>Enter value and index to add a node at a specific index</li><li>Click delete to delete the last node</li><li>Enter index to delete a node at a specific index</li></ul>",
    "time complexity": "<b>Insert/ Delete Beginning</b>: O(1)</br><b>Insert/Delete End:</b> O(n)",
    "Space complexity": " O(n)"

  },
  {
    "content_id": 1078,
    "title": "Quick Sort Visualiser",
    "overview": "Chooses a pivot, partitions the array based on pivot values, and recursively sorts subarrays",
    "time complexity": "<b>AverageCase: </b> O(n log n), <br><b>WorstCase: </b>  O(n^2) - can be improved with optimal pivot selection",
    "Space complexity":  "O(log n) due to its recursive nature"

  },{
    "content_id": 6078,
    "title": "Sieve of Eratosthenes Visualizer",
    "overview": "The Sieve of Eratosthenes algorithm iteratively marks the multiples of each prime number starting from 2, effectively identifying all prime numbers up to a specified limit.",
    "usage": "Primarily used for finding all prime numbers up to a given limit efficiently.",
    "time complexity": "O(n log log n), where n is the upper limit of the numbers to be checked for primality.",
    "Space complexity": "O(n), where n is the upper limit of the numbers to be checked for primality."
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