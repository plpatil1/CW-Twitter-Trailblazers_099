$(document).ready(function () {
    $('#inputForm').submit(function (event) {
        event.preventDefault();

        // Get inputs
        let arrayInput = $('#arrayInput').val().split(',').map(Number);
        let target = Number($('#targetInput').val());

        // Clear previous results
        $('#arrayContainer').empty();
        $('#info').text('');
        $('#message').text('');

        // Validate inputs
        if (arrayInput.some(isNaN) || isNaN(target)) {
            $('#message').text('Please enter valid numbers.');
            return;
        }

        // Sort the array
        arrayInput.sort((a, b) => a - b);

        // Display the sorted array
        arrayInput.forEach((value, index) => {
            $('#arrayContainer').append(`<div class="array-element" id="elem-${index}">${value}</div>`);
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
        $('.array-element').removeClass('highlight low high hidden');
        for (let i = 0; i < array.length; i++) {
            if (i < low || i > high) {
                $(`#elem-${i}`).addClass('hidden');
            } else {
                $(`#elem-${i}`).removeClass('hidden');
            }
        }
        $(`#elem-${low}`).addClass('low');
        $(`#elem-${mid}`).addClass('highlight');
        $(`#elem-${high}`).addClass('high');
    }

    function updateInfo(low, mid, high) {
        $('#info').html(`Low: ${low}, Mid: ${mid}, High: ${high}`);
    }

    function searchStep() {
        if (low > high) {
            if (resultIndex !== -1) {
                $('#message').text(`Target found at index ${resultIndex}.`);
            } else {
                $('#message').text('Target not found.');
            }
            return;
        }

        let mid = Math.floor((low + high) / 2);
        highlightElements(low, mid, high);
        updateInfo(low, mid, high);

        if (array[mid] === target) {
            resultIndex = mid;
            high = mid - 1; // Continue to search on the left side
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        setTimeout(() => {
            searchStep();
        }, 1000); // Delay for visualization
    }

    searchStep();
}