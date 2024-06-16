
document.getElementById('findPairsBtn').addEventListener('click', async () => {
    const arrayInput = document.getElementById('arrayInput').value;
    const targetSum = parseInt(document.getElementById('targetSum').value);

    if (isNaN(targetSum)) {
        alert('Please enter a valid number for the target sum.');
        return;
    }

    const array = arrayInput.split(',').map(num => parseInt(num.trim()));

    if (array.some(isNaN)) {
        alert('Please enter a valid array of numbers (comma separated).');
        return;
    }

    const resultContainer = document.getElementById('resultContainer');
    const arrayContainer = document.getElementById('arrayContainer');

    resultContainer.innerHTML = '';
    arrayContainer.innerHTML = '';

    // Sort the array
    array.sort((a, b) => a - b);

    // Display the sorted array
    array.forEach((num, index) => {
        const element = document.createElement('div');
        element.classList.add('array-element');
        element.id = `element-${index}`;
        element.textContent = num;
        arrayContainer.appendChild(element);
    });

    // Two pointer algorithm with visualization
    let left = 0;
    let right = array.length - 1;
    let pairFound = false;

    while (left < right) {
        // Clear previous pointers
        document.querySelectorAll('.array-element').forEach(element => element.classList.remove('pointer'));

        // Highlight the pointers
        document.getElementById(`element-${left}`).classList.add('pointer');
        document.getElementById(`element-${right}`).classList.add('pointer');

        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for visualization

        const sum = array[left] + array[right];

        if (sum === targetSum) {
            const pairResult = document.createElement('div');
            pairResult.textContent = `Pair found: ${array[left]} + ${array[right]} = ${targetSum}`;
            resultContainer.appendChild(pairResult);
            pairFound = true;
            left++;
            right--;
        } else if (sum < targetSum) {
            document.getElementById(`element-${left}`).classList.remove('pointer');
            left++;
        } else {
            document.getElementById(`element-${right}`).classList.remove('pointer');
            right--;
        }
    }

    if (!pairFound) {
        const noPairResult = document.createElement('div');
        noPairResult.textContent = 'No pairs found.';
        resultContainer.appendChild(noPairResult);
    }

    // Clear pointers after completion
    document.querySelectorAll('.array-element').forEach(element => element.classList.remove('pointer'));
});