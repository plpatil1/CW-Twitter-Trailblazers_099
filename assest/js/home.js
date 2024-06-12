let home_page = document.getElementById("home_page");
cards_data = ''
//console.log("hii")
algorithms_Data.forEach(item => {
    cards_data += `
    <div class="col-lg-4 col-md-3 p-3">
        <div class="card">
            <div class="card-body p-3">
              <a href="${item.redirect_page}">${item.label}</a>
            </div>
        </div>
    </div>`;
});
//console.log(cards_data)
home_page.innerHTML = cards_data