let queue = [];
let msg_show = document.getElementById("msg_show")

function enqueue() {
    msg_show.classList.remove("alert-danger","alert-success","alert-warning","alert-info")
    const input = document.getElementById('queueInput');
    const value = input.value;
    if (value) {
        msg_show.classList.add("alert-info")
        queue.push(value);
        msg_show.innerText=`Enqeue/Add : ${value}`
        input.value = '';
        renderQueue(true);
    } 
}

function dequeue() {
    msg_show.classList.remove("alert-danger","alert-success","alert-warning","alert-info")
    if (queue.length > 0) {
        const queueContainer = document.getElementById('queue');
        const firstElement = queueContainer.firstChild;
        msg_show.classList.add("alert-info")
        if (firstElement) {
            firstElement.classList.add('animate__animated', 'animate__fadeOutLeftBig');
            firstElement.addEventListener('animationend', () => {
                var temp = queue.shift();
                msg_show.innerText=`Dequeue/Remove : ${temp}`
                renderQueue();
            }, { once: true });
        }
    } else {
        msg_show.classList.add("alert-danger")
        msg_show.innerText=`Queue is Empty`
    }
}

function size(){
    msg_show.classList.remove("alert-danger","alert-success","alert-warning","alert-info")
    if(queue.length>0){
        msg_show.classList.add("alert-info")
        msg_show.innerHTML = `Size : ${queue.length}`
    } else {
        msg_show.classList.add("alert-danger")
        msg_show.innerText=`Queue is Empty`
    } 
}

function peek(){
    msg_show.classList.remove("alert-danger","alert-success","alert-warning","alert-info")
    if(queue.length>0){
        msg_show.classList.add("alert-warning")
        msg_show.innerHTML = `Peek/Front : ${queue[0]}`
    } else {
        msg_show.classList.add("alert-danger")
        msg_show.innerText=`Queue is Empty`
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
function isEmpty_check(){
    msg_show.classList.remove("alert-danger","alert-success","alert-warning","alert-info")
    msg_show.classList.add("alert-primary")
    if(queue.length==0){
        msg_show.innerHTML = "isEmpty : true"
    } else {
        msg_show.innerHTML = "isEmpty : false"
    }
}

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