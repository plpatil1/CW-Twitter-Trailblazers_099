var selection_sort_container = document.querySelector(".ss_bars_container");
var input_numbers = document.getElementById("input_numbers");
var sort_button = document.getElementById("sort_button");


let sppeed_control = document.getElementById("algo_sppeed")
let speed = (32-sppeed_control.value)*100
sppeed_control.addEventListener('input',()=>{
    speed = (32-sppeed_control.value)*100
    //alert(speed)
})


let random_array_generate = document.getElementById("random_array_generate")
random_array_generate.addEventListener("click", () => {
    let randomArray = generateRandomArray(13, 100);
    document.getElementById('input_numbers').value = randomArray.join(',');
})

function generateRandomArray(size, max) {
    let arr = [];
    while (arr.length < size) {
        let num = Math.floor(Math.random() * max) + 1;
        if (!arr.includes(num) && num>5) {
            arr.push(num);
        }
    }
    return arr;
}

function renderBars(array) {
    selection_sort_container.innerHTML = ""; // Clear existing bars
    let containerWidth = selection_sort_container.clientWidth;
    let barWidth = (containerWidth / array.length) - 2;
    let maxValue = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
        let ss_bar = document.createElement("div");
        ss_bar.classList.add("ss_bar");
        let barHeightPercent = (array[i] / maxValue) * 100;
        ss_bar.style.height = barHeightPercent + "%";
        ss_bar.style.width = barWidth + "px";
        ss_bar.style.backgroundColor = "aqua";
        ss_bar.innerHTML = array[i];
        ss_bar.style.color = "white";
        selection_sort_container.appendChild(ss_bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function selectionSort(array) {
    renderBars(array);
    let sso_bars = document.getElementsByClassName("ss_bar");
    let l = array.length;

    for (let i = 0; i < array.length; i++) {
        var min_idx = i;
        for (let j = i + 1; j < array.length; j++) {
            for (let k = i; k < sso_bars.length; k++) {
                if (k !== j && k !== min_idx && k < l) {
                    sso_bars[k].style.backgroundColor = "brown";
                }
            }
            if (array[min_idx] > array[j]) {
                min_idx = j;
            }
        }
        
        let temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;

        let tempHeight = sso_bars[i].style.height;
        sso_bars[i].style.height = sso_bars[min_idx].style.height;
        sso_bars[min_idx].style.height = tempHeight;
        sso_bars[min_idx].innerHTML = array[min_idx];
        sso_bars[i].innerHTML = array[i];
        sso_bars[i].style.backgroundColor = "#feb737";
        sso_bars[min_idx].style.backgroundColor = "#feb737";

        await sleep(speed);
        
        sso_bars[i].style.backgroundColor = "#2fb45d";

        await sleep(speed);
    }
    sso_bars[0].style.backgroundColor = "#2fb45d";
}

sort_button.addEventListener("click", async function () {
    let inputString = input_numbers.value;
    let numbers = inputString.split(",").map(Number); 

    if (!numbers.every(Number.isInteger)) {
        alert("Please enter comma-separated numbers only.");
        return; 
    }

    // Call selectionSort
    await selectionSort(numbers.slice()); 
});
