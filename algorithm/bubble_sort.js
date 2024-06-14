
var bubble_sort_container = document.querySelector(".bs_bars_container");
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
    bubble_sort_container.innerHTML = ""; // Clear existing bars
    let containerWidth = bubble_sort_container.clientWidth;
    let barWidth = (containerWidth / array.length) - 2;
    let maxValue = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
        let bs_bar = document.createElement("div");
        bs_bar.classList.add("bs_bar");
        let barHeightPercent = (array[i] / maxValue) * 100;
        bs_bar.style.height = barHeightPercent + "%";
        bs_bar.style.width = barWidth + "px";
        bs_bar.style.backgroundColor = "aqua";
        bs_bar.innerHTML = array[i];
        bs_bar.style.color = "white";
        bubble_sort_container.appendChild(bs_bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    renderBars(array);
    let bso_bars = document.getElementsByClassName("bs_bar");
    let l = array.length;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            for (let k = 0; k < bso_bars.length; k++) {
                if (k !== j && k !== j + 1 && k < l) {
                    bso_bars[k].style.backgroundColor = "brown";
                }
            }
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                let tempHeight = bso_bars[j].style.height;
                bso_bars[j].style.height = bso_bars[j + 1].style.height;
                bso_bars[j + 1].style.height = tempHeight;
                bso_bars[j].innerHTML = array[j];
                bso_bars[j + 1].innerHTML = array[j + 1];
                bso_bars[j].style.backgroundColor = "#feb737";
                bso_bars[j + 1].style.backgroundColor = "#feb737";

                await sleep(speed);
            }
        }
        l--;
        bso_bars[l].style.backgroundColor = "#2fb45d";

        await sleep(speed);
    }
    bso_bars[0].style.backgroundColor = "#2fb45d";
}

sort_button.addEventListener("click", async function () {
    // Get input value, split into numbers, and parse to integers
    let inputString = input_numbers.value;
    let numbers = inputString.split(",").map(Number); // Parse to integers

    // Error handling (optional): Check for invalid input
    if (!numbers.every(Number.isInteger)) {
        alert("Please enter comma-separated numbers only.");
        return; // Prevent sorting if input is invalid
    }

    // Call bubbleSort
    await bubbleSort(numbers.slice()); // Use a copy to avoid modifying original array
});
