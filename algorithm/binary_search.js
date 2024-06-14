let msg_box  =document.getElementById("message")
let span_in_binary_search = document.getElementById("span_in_binary_search");


let sppeed_control = document.getElementById("algo_sppeed")
let speed = (32-sppeed_control.value)*100
let first_run = true;

sppeed_control.addEventListener('input',()=>{
    speed = (32-sppeed_control.value)*100
    //alert(speed)
})


let random_array_generate = document.getElementById("random_array_generate")
random_array_generate.addEventListener("click", () => {
    let randomArray = generateRandomArray(16, 100);
    let randomTarget = randomArray[Math.floor(Math.random() * randomArray.length)];
    document.getElementById('arrayInput').value = randomArray.join(',');
    document.getElementById('targetInput').value = randomTarget;
})

function generateRandomArray(size, max) {
    let arr = [];
    while (arr.length < size) {
        let num = Math.floor(Math.random() * max) + 1;
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}

if(first_run){
    span_in_binary_search.classList.add("mt-5","p-5","font-weight-bold");
    span_in_binary_search.style.fontSize = '20px'
    span_in_binary_search.style.fontWeight = '500'
    span_in_binary_search.innerHTML = "Enter Your Array or Create Random array for Binary Search"
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inputForm').addEventListener('submit', function (event) {
        event.preventDefault();
        span_in_binary_search.style.display='none'
        
        let arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
        let target = Number(document.getElementById('targetInput').value);
        let arrayInput_duplicate = [...new Set(arrayInput)];
        if (arrayInput.length!=arrayInput_duplicate.length) {
            document.getElementById('message').innerText = 'Duplicates Numbers are not Allowed';
            return;
        }
        document.getElementById('arrayContainer').innerHTML = '';
        document.getElementById('info').innerText = '';
        document.getElementById('message').innerText = '';
        
        if (arrayInput.some(isNaN) || isNaN(target)) {
            document.getElementById('message').innerText = 'Please enter valid numbers.';
            return;
        }
        
        arrayInput.sort((a, b) => a - b);

        arrayInput.forEach((value, index) => {
            let elem = document.createElement('div');
            elem.className = 'array-element';
            elem.id = `elem-${index}`;
            elem.textContent = value;
            document.getElementById('arrayContainer').appendChild(elem);
        });

        // Perform binary search
        binarySearch(arrayInput, target);
    });
});

function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
    let resultIndex = -1;

    function highlightElements(low, mid, high) {
        document.querySelectorAll('.array-element').forEach((elem, index) => {
            elem.classList.remove('highlight', 'low', 'high', 'hidden');
            if (index < low || index > high) {
                elem.classList.add('hidden');
            }
        });
        document.getElementById(`elem-${low}`).classList.add('low');
        document.getElementById(`elem-${high}`).classList.add('high');
        document.getElementById(`elem-${mid}`).classList.add('highlight');
    }

    function updateInfo(low, mid, high) {
        document.getElementById('info').style.fontWeight = 600
        document.getElementById('info').innerHTML = `Low Index: ${low}<br> Middle Index: ${mid}<br> High Index: ${high}`;
    }

    function searchStep() {
        msg_box.classList.remove("alert","alert-danger","alert-success","font-weight-bold")
        if (low > high || resultIndex !== -1) {
            if (resultIndex !== -1) {
                let resultIndex_f = document.getElementById(`elem-${resultIndex}`)
                resultIndex_f.classList.remove('highlight', 'low', 'high', 'hidden')
                resultIndex_f.classList.add('animate__animated', 'animate__shakeY')
                resultIndex_f.classList.add('element_found')
                msg_box.classList.add("alert","alert-success","font-weight-bold")
                msg_box.innerHTML = `Element found at index : <b>${resultIndex}</b>`
            } else {
                msg_box.classList.add("alert","alert-danger","font-weight-bold")
                msg_box.innerText = 'Element not Present in array.'
            }
            return
        }
        let mid = Math.floor((low + high) / 2)
        highlightElements(low, mid, high)
        updateInfo(low, mid, high)
        if (array[mid] === target) {
            resultIndex = mid
            high = mid - 1
        } else if (array[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
        setTimeout(searchStep, speed)
    }

    searchStep();
}