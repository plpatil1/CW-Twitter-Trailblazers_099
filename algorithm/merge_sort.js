var merge_sort_container = document.querySelector(".ms_bars_container");
var input_numbers = document.getElementById("input_numbers");
var sort_button = document.getElementById("sort_button");
var speed_select = document.getElementById("speed_select");
var ms = parseInt(speed_select.value); // Initial speed based on selection

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

async function mergeSort(array, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);

        await mergeSort(array, start, mid);
        await mergeSort(array, mid + 1, end);

        await merge(array, start, mid, end);
    }
}

async function merge(array, start, mid, end) {
    let n1 = mid - start + 1;
    let n2 = end - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++)
        left[i] = array[start + i];
    for (let j = 0; j < n2; j++)
        right[j] = array[mid + 1 + j];

    let i = 0, j = 0, k = start;
    let ms_bars = document.getElementsByClassName("ms_bar");

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            ms_bars[k].style.height = (left[i] / Math.max(...array)) * 100 + "%";
            ms_bars[k].innerHTML = left[i];
            ms_bars[k].style.backgroundColor = "brown"; // Different color for sorted part
            i++;
        } else {
            array[k] = right[j];
            ms_bars[k].style.height = (right[j] / Math.max(...array)) * 100 + "%";
            ms_bars[k].innerHTML = right[j];
            ms_bars[k].style.backgroundColor = "brown"; // Different color for sorted part
            j++;
        }
        k++;
        await sleep(ms);
    }

    while (i < n1) {
        array[k] = left[i];
        ms_bars[k].style.height = (left[i] / Math.max(...array)) * 100 + "%";
        ms_bars[k].innerHTML = left[i];
        ms_bars[k].style.backgroundColor = "brown"; // Different color for sorted part
        i++;
        k++;
        await sleep(ms);
    }

    while (j < n2) {
        array[k] = right[j];
        ms_bars[k].style.height = (right[j] / Math.max(...array)) * 100 + "%";
        ms_bars[k].innerHTML = right[j];
        ms_bars[k].style.backgroundColor = "brown"; // Different color for sorted part
        j++;
        k++;
        await sleep(ms);
    }

    for (let i = start; i <= end; i++) {
        ms_bars[i].style.backgroundColor = "black";
    }
}

sort_button.addEventListener("click", async function () {
    let inputString = input_numbers.value;
    let numbers = inputString.split(",").map(Number);

    if (!numbers.every(Number.isInteger)) {
        alert("Please enter comma-separated numbers only.");
        return;
    }

    // Update speed based on selection
    ms = parseInt(speed_select.value);

    // Call mergeSort
    renderBars(numbers.slice());
    await mergeSort(numbers.slice(), 0, numbers.length - 1);
});

speed_select.addEventListener("change", function () {
    ms = parseInt(speed_select.value); // Update speed based on selection
});