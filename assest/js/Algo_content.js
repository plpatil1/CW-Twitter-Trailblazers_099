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
    "content_id": 2078,
    "title": "Bubble Sort Visualiser",
    "overview": "Visualising Bubble sort Algorithm",
    "operations": "As per your DSA/Algorithm",
    "usage": "As per your DSA/Algorithm",
    "time complexity": "As per your DSA/Algorithm",
    "Space complexity": "As per your DSA/Algorithm"
  }
  {
    "content_id": 3078,
    "title": "Selection Sort Visualiser",
    "overview": "Visualising Selection sort Algorithm",
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