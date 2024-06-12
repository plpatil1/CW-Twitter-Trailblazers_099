let queue = [];

function enqueue() {
    const input = document.getElementById('queueInput');
    const value = input.value;
    if (value) {
        queue.push(value);
        input.value = '';
        renderQueue(true);
    }
}

function dequeue() {
    if (queue.length > 0) {
        const queueContainer = document.getElementById('queue');
        const firstElement = queueContainer.firstChild;
        if (firstElement) {
            firstElement.classList.add('animate__animated', 'animate__fadeOutLeftBig');
            firstElement.addEventListener('animationend', () => {
                queue.shift();
                renderQueue();
            }, { once: true });
        }
    } else {
        alert("Queue is empty");
    }
}

// function renderQueue(isAdding = false) {
//     const queueContainer = document.getElementById('queue');
//     queueContainer.innerHTML = '';
//     queue.forEach((element, index) => {
//         const div = document.createElement('div');
//         div.className = 'queue-element';
        
    
//         const randomNumber = Math.floor(Math.random() * 12) + 1;
//         // Create an image element
//         const image = document.createElement('img');
//         image.src = `./car_${randomNumber}.png`; // Specify the path to your image
//         image.alt = 'Image'; // Specify the alt text for accessibility
//         div.appendChild(image);
        
//         queueContainer.appendChild(div);

//         if (isAdding && index === queue.length - 1) {
//             div.classList.add('animate__animated', 'animate__bounceInRight');
//         }
//     });
// }


function renderQueue(isAdding = false) {
    const queueContainer = document.getElementById('queue');
    queueContainer.innerHTML = '';
    queue.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = 'queue-element';
        div.textContent = element;
        queueContainer.appendChild(div);

        if (isAdding && index === queue.length - 1) {
            div.classList.add('animate__animated', 'animate__bounceInRight');
        }
    });
}