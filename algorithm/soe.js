document.addEventListener("DOMContentLoaded", function () {
    var soe_container = document.querySelector(".soe_container")
    var soe_grid = document.querySelector(".soe_grid")
    var flag = false;


    let sppeed_control = document.getElementById("algo_sppeed")
    let ms = (32 - sppeed_control.value) * 100
    let first_run = true;

    sppeed_control.addEventListener('input', () => {
        ms = (32 - sppeed_control.value) * 100
        //alert(speed)
    })

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    var display_grid = async function () {
        soe_grid.innerHTML = ''; // Clear the previous grid if any

        let count = 1;
        for (let i = 0; i < 10; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < 10; j++) {
                let col = document.createElement("td")
                row.append(col);
                col.id = `idx${count}`;
                col.innerHTML = count;
                count++;
            }
            soe_grid.append(row);
        }
        //await soe_algo();
    }

    var soe_algo = async function () {
        await display_grid();
        let arr = new Array(101).fill(false);
        arr[0] = true;
        if (flag) {
            return;
        }
        for (let i = 1; i < 101; i++) {
            if (flag) {
                return;
            }
            if (i == 1) {
                arr[i] = true;
                var cur = document.getElementById(`idx${i}`);
                cur.classList.add("current_cell");
                await sleep(ms);
                cur.classList.remove("current_cell");
                cur.classList.add("not_prime")
                if (flag) {
                    return;
                }
                await sleep(ms);
            } else {
                if (!arr[i]) {
                    var cur = document.getElementById(`idx${i}`);
                    cur.classList.add("current_cell");
                    if (flag) {
                        return;
                    }
                    await sleep(ms);
                    for (let j = 2; j * i < 101; j++) {
                        var multiples = document.getElementById(`idx${i * j}`);
                        multiples.classList.add("multiple");
                    }
                    if (flag) {
                        return;
                    }
                    await sleep(ms);
                    for (let j = 2; j * i < 101; j++) {
                        var multiples = document.getElementById(`idx${i * j}`);
                        multiples.classList.remove("multiple");
                        arr[i * j] = true;
                        if (flag) {
                            return;
                        }
                        multiples.classList.add("not_prime");
                    }
                    if (flag) {
                        return;
                    }
                    await sleep(ms);
                    cur.classList.remove("current_cell");
                }
            }
        }
        for(let idx = 1; idx< 101; idx++){
            if(arr[idx] == false){
                var cur = document.getElementById(`idx${idx}`);
                cur.classList.add("current_cell")
            }else{
                var cur1 = document.getElementById(`idx${idx}`);
                cur1.classList.remove("not_prime")
            }
        }
    }

    var start = document.querySelector("#start_button")
    start.addEventListener("click", function () {
        flag = false;
        soe_algo();
    });

    var clear = document.querySelector("#clear_button")
    clear.addEventListener("click", function () {
        flag = true;
        display_grid();
    });
});