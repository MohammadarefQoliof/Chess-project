let phoneList = document.querySelector(".listBtn")
let tabs = document.querySelector(".tabs")
flag = true
phoneList.addEventListener("click", ()=>{
    if (flag){
        tabs.classList.remove("hide")
        flag = false
        console.log("made false");
    }else{
        tabs.classList.add("hide")
        flag = true
        console.log("made true");
    }
})