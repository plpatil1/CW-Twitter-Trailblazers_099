let stack = [];
let msg_show = document.getElementById("msg_show");
let stack_outer_box = document.getElementById("stack")
function push() {
    msg_show.classList.remove("alert-danger", "alert-success", "alert-warning", "alert-info");
    const input = document.getElementById('stackInput');
    const value = input.value;
    if (value) {
        msg_show.classList.add("alert-info");
        stack.push(value);
        msg_show.innerText = `Push/Add : ${value}`;
        input.value = '';
        renderStack(true);
    } 
}

function pop() {
    msg_show.classList.remove("alert-danger", "alert-success", "alert-warning", "alert-info");
    if (stack.length > 0) {
        const stackContainer = document.getElementById('stack');
        const topElement = stackContainer.lastChild;
        msg_show.classList.add("alert-info");
        if (topElement) {
            topElement.classList.add('animate__animated', 'animate__backOutUp');
            topElement.addEventListener('animationend', () => {
                var temp = stack.pop();
                msg_show.innerText = `Pop/Remove : ${temp}`;
                renderStack();
            }, { once: true });
        }
    } else {
        msg_show.classList.add("alert-danger");
        msg_show.innerText = `Stack is Empty`;
    }
}

function size() {
    stack_outer_box.classList.remove('animate__animated', 'animate__headShake')
    stack_outer_box.classList.add('animate__animated', 'animate__headShake')
    msg_show.classList.remove("alert-danger", "alert-success", "alert-warning", "alert-info");
    if (stack.length > 0) {
        msg_show.classList.add("alert-info");
        msg_show.innerHTML = `Size : ${stack.length}`;
    } else {
        msg_show.classList.add("alert-danger");
        msg_show.innerText = `Stack is Empty`;
    } 
}

function peek() {
    msg_show.classList.remove("alert-danger", "alert-success", "alert-warning", "alert-info");
    if (stack.length > 0) {
        msg_show.classList.add("alert-warning");
        msg_show.innerHTML = `Peek/Top : ${stack[stack.length - 1]}`;
    } else {
        msg_show.classList.add("alert-danger");
        msg_show.innerText = `Stack is Empty`;
    }
}

function isEmpty_check() {
    msg_show.classList.remove("alert-danger", "alert-success", "alert-warning", "alert-info");
    msg_show.classList.add("alert-primary");
    if (stack.length === 0) {
        msg_show.innerHTML = "isEmpty : true";
    } else {
        msg_show.innerHTML = "isEmpty : false";
    }
}

function renderStack(isAdding = false) {
    const stackContainer = document.getElementById('stack');
    stackContainer.innerHTML = '';
    stack.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = 'stack-element';
        div.textContent = element;
        stackContainer.appendChild(div);

        if (isAdding && index === stack.length - 1) {
            div.classList.add('animate__animated', 'animate__backInDown');
        }
    });
}
