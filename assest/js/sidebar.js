


let curre_DSA = ''
const currentPage = window.location.pathname.split('/').pop();
const container = document.getElementById('radio-buttons-container');
const container_2 = document.getElementById('radio-buttons-container2');
let htmlContent = '';
let htmlContent_2 = '';
algorithms_Data.forEach(item => {
    htmlContent += `
      <div class="position-relative">
        <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" data-parent-id="${item.id}" type="radio" data-href="${item.redirect_page}" name="listGroupRadioGrid" id="${item.id}" ${item.redirect_page==currentPage ? 'checked' : ''}>
        <label class="list-group-item py-3 pe-5" for="${item.id}">
          <strong class="fw-semibold">${item.label}</strong>
          <span class="d-block small opacity-75">${item.text}</span>
        </label>
      </div>
    `;
    htmlContent_2 += `
      <div class="position-relative">
        <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" data-parent-id="${item.id}" type="radio" data-href="${item.redirect_page}" name="listGroupRadioGrid_1" id="${item.id}_1" ${item.redirect_page==currentPage ? 'checked' : ''}>
        <label class="list-group-item py-3 pe-5" for="${item.id}_1">
          <strong class="fw-semibold">${item.label}</strong>
          <span class="d-block small opacity-75">${item.text}</span>
        </label>
      </div>
    `;
});

container.innerHTML = htmlContent;
container_2.innerHTML = htmlContent_2;

const radioButtons = document.querySelectorAll('input[name="listGroupRadioGrid"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            window.location.href = this.getAttribute('data-href')
            //alert(`You selected: ${this.getAttribute('data-href')}`);
        }
    });
});

const radioButtons_2 = document.querySelectorAll('input[name="listGroupRadioGrid_1"]');
radioButtons_2.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            window.location.href = this.getAttribute('data-href')
        }
    });
});


// Select the checked radio button
const checkedRadioButton = document.querySelector('input[name="listGroupRadioGrid"]:checked');
if (checkedRadioButton) {
  //console.log("Checked radio button:", checkedRadioButton.getAttribute('data-parent-id'));
  var selected_DSA = checkedRadioButton.getAttribute('data-parent-id')
  curre_DSA = algorithms_Data.filter(d=>d.id===selected_DSA);
  //console.log(curre_DSA)
} else {
  console.log("No radio button is checked.");
}
