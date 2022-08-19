let Hambarger=document.querySelector(".Hambarger");
let nav_list=document.querySelector(".nav_list");
let span=document.querySelectorAll(".Hambarger span");
let Nav_open=false;

Hambarger.addEventListener("click",function(){
    nav_list.classList.toggle("Open_nav");
    if(Nav_open==false){
        span[0].style.transform="rotate(45deg)";
        span[1].style.opacity="0";
        span[2].style.transform="rotate(-45deg)";
        Nav_open=true;
    }else{
        span[0].style.transform="rotate(0)";
        span[1].style.opacity="1";
        span[2].style.transform="rotate(0)";
        Nav_open=false;
    }

})

let body=document.querySelector("body");
window.onload=Mobile_menue;
window.addEventListener("resize",Mobile_menue)

function Mobile_menue(){
    if(innerWidth<860){
        body.classList.add("Mobile")
    }else{
        body.classList.remove("Mobile")
    }
}

