const data = [
  {
    "content_id": 1,
    "title": "template",
    "overview": "Basic Layout Creted",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"
  },
  {

    "content_id": 2183,
    "title": "Queue",
    "overview": `A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of “First in, First out” (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.
        <img style="width:100%" class="img-fluid mt-2" src ='./assest/image/queue.png'>`,
    "What is Queue in Data Structures?": "A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It operates like a line where elements are added at one end (rear) and removed from the other end (front).",
    "Basic Operations of Queue Data Structure?": `<b>Enqueue (Insert):</b> Adds an element to the rear of the queue.<br>
        <b>Dequeue (Delete):</b> Removes and returns the element from the front of the queue.<br>
        <b>Peek:</b> Returns the element at the front of the queue without removing it.<br>
        <b>Empty:</b> Checks if the queue is empty.<br>
        <b>Size:</b> Checks number of elements in it.`,
    "Applications of Queue": `Task scheduling in operating systems
        Data transfer in network communication
        Simulation of real-world systems (e.g., waiting lines)
        Priority queues for event processing queues for event processing`,
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

  },
  {
    "content_id": 5078,
    "title": "Linked List Visualiser",
    "overview": "Visualising Linked List Data Structure",
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