let home_page = document.getElementById("home_page");
cards_data = ''
//console.log("hii")
algorithms_Data.forEach(item => {
    cards_data += `
    <div class="col-md-4 col-lg-3 mb-3 mt-3">
        <div class="card">
            <a href="${item.redirect_page}">
            <img class="card-img-top" src="./assest/image/${item.image}">
            <div class="card-body">
                <p class="card-text text-center">${item.label}</p>
            </div>
            </a>
        </div>
    </div>`;
});
//console.log(cards_data)
home_page.innerHTML = cards_data