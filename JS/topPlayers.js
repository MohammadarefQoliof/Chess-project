let no1 = document.querySelector(".no1")
let no2 = document.querySelector(".no2")
let no3 = document.querySelector(".no3")
let no4 = document.querySelector(".no4")
let no5 = document.querySelector(".no5")
let no6 = document.querySelector(".no6")
let no7 = document.querySelector(".no7")
let no8 = document.querySelector(".no8")
let no9 = document.querySelector(".no9")
let no10 = document.querySelector(".no10")
let no11 = document.querySelector(".no11")
let no12 = document.querySelector(".no12")
let listOfPlayers = [no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11, no12]


let previousBtn = document.querySelector("#previous")
let nextBtn = document.querySelector("#next")
let num = 1
no1.querySelector("a").style.zIndex = "1"

function changeCards(flag){
    listOfPlayers.forEach(i  => {
        let classNamesOfCards = i.className.split(" ")[0]
        if (classNamesOfCards.slice(2) == num){
            i.style.opacity = "0"
            if (flag){
                i.classList.add("animateNext")
                setTimeout(() => {
                    i.classList.remove("animateNext")
                }, 1000);
            }else{
                i.classList.toggle("animatePrevious")
                setTimeout(() => {
                    i.classList.remove("animatePrevious")
                }, 1000);
            }
        }
    });
    if (flag){
        num += 1
        if (num >= 13){
            num = 1
        }
    }else{
        num -= 1;
        if (num <= 0){
            num = 12
        }
    }
    listOfPlayers.forEach(i  => {
        let classNamesOfCards = i.className.split(" ")[0]
        if (classNamesOfCards.slice(2) == num){
            i.style.opacity = "1"
            i.querySelector("a").style.zIndex = "1"
        }
        if (flag){
            i.classList.add("animateNext")
            setTimeout(() => {
                i.classList.remove("animateNext")
            }, 1000);
        }else{
            i.classList.toggle("animatePrevious")
            setTimeout(() => {
                i.classList.remove("animatePrevious")
            }, 1000);
        }
    })
}

previousBtn.addEventListener("click", ()=>{
    changeCards(false)
})
nextBtn.addEventListener("click", ()=>{
    changeCards(true)
})