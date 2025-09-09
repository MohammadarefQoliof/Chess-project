let phoneList = document.querySelector(".listBtn")
let tabs = document.querySelector(".tabs")
flag = false
phoneList.addEventListener("click", ()=>{
    if (flag){
        tabs.classList.add("animateLeft")
        tabs.classList.remove("animateRight")
        flag = false
        console.log("made false");
    }else{
        tabs.classList.remove("animateLeft")
        tabs.classList.add("animateRight")
        flag = true
        console.log("made true");
    }
})