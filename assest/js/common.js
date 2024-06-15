let maximize = document.getElementById("maximize_area")
let sidebar_section = document.getElementById("sidebar_section")
let info_section = document.getElementById("info_section")
let playground_section = document.getElementById("playground_section")
let header_section = document.getElementById("header_section")
let visualizer_play_ground = document.getElementById("visualizer_play_ground")
let playground_card = document.getElementById("playground_card")

let is_maximized = maximize.getAttribute("is_full")
maximize.setAttribute("is_full",0)
const change_area_of_visualization_playgroud = () =>{
    is_maximized = maximize.getAttribute("is_full")
    if(is_maximized==0){
        maximize.setAttribute("is_full",1)
        sidebar_section.classList.remove('d-none','d-lg-block')
        sidebar_section.style.display = 'none'
        //header_section.style.display = 'none'
        info_section.style.display = 'none'
        playground_section.classList.remove("col-lg-9")
        playground_section.classList.add("col-12")
        playground_card.style.height = (window.innerHeight-110)+"px";
    } else {
        maximize.setAttribute("is_full",0)
        sidebar_section.classList.add('d-none','d-lg-block')
        sidebar_section.style.display = 'block'
        //header_section.style.display = 'block'
        info_section.style.display = 'block'
        playground_section.classList.remove("col-12")
        playground_section.classList.add("col-lg-9")
        playground_card.style.height = "auto";
    }
}

maximize.addEventListener("click",()=>{
    change_area_of_visualization_playgroud()
})

