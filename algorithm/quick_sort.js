var merge_sort_container = document.querySelector(".ms_bars_container");
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
    merge_sort_container.innerHTML = ""; // Clear existing bars
    let containerWidth = merge_sort_container.clientWidth;
    let barWidth = (containerWidth / array.length) - 2;
    let maxValue = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
        let ms_bar = document.createElement("div");
        ms_bar.classList.add("ms_bar");
        let barHeightPercent = (array[i] / maxValue) * 100;
        ms_bar.style.height = barHeightPercent + "%";
        ms_bar.style.width = barWidth + "px";
        ms_bar.style.backgroundColor = "#fec53c";
        ms_bar.innerHTML = array[i];
        ms_bar.style.color = "white";
        merge_sort_container.appendChild(ms_bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function quickSort(array, low, high) {
    if (low < high) {
        let pi = await partition(array, low, high);
        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    }
}

async function partition(array, low, high) {
    let pivot = array[high];
    let i = (low - 1);
    let ms_bars = document.getElementsByClassName("ms_bar");
    ms_bars[high].style.backgroundColor = "red";
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            ms_bars[i].style.height = (array[i] / Math.max(...array)) * 100 + "%";
            ms_bars[i].innerHTML = array[i];
            ms_bars[j].style.height = (array[j] / Math.max(...array)) * 100 + "%";
            ms_bars[j].innerHTML = array[j];
            ms_bars[i].style.backgroundColor = "brown";
            ms_bars[j].style.backgroundColor = "brown";
            await sleep(speed);
        }
        for (let k = low; k < high; k++) {
            ms_bars[k].style.backgroundColor = "#fec53c";
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    ms_bars[i + 1].style.height = (array[i + 1] / Math.max(...array)) * 100 + "%";
    ms_bars[i + 1].innerHTML = array[i + 1];
    ms_bars[high].style.height = (array[high] / Math.max(...array)) * 100 + "%";
    ms_bars[high].innerHTML = array[high];
    ms_bars[i + 1].style.backgroundColor = "brown";
    ms_bars[high].style.backgroundColor = "brown";
    await sleep(speed);

    for (let k = low; k <= high ; k++) {
        ms_bars[k].style.backgroundColor = "#fec53c";
    }
    return i + 1;
}


sort_button.addEventListener("click", async function () {
    let inputString = input_numbers.value;
    let numbers = inputString.split(",").map(Number);

    if (!numbers.every(Number.isInteger)) {
        alert("Please enter comma-separated numbers only.");
        return;
    }
    // Call mergeSort
    renderBars(numbers.slice());
    await quickSort(numbers.slice(), 0, numbers.length - 1);
});