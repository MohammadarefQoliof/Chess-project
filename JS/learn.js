let li = [...document.querySelectorAll("li")]
li.map((a) =>{
    a.addEventListener("click", ()=>{
        li.forEach(item =>{
            item.style.color = "black"
        })
        a.style.color = "orange"
    })
})

let moves = document.querySelector(".moves")
let rules = document.querySelector(".rules")
let openings = document.querySelector(".openings")
let tactics = document.querySelector(".tactics")
li[0].addEventListener("click", ()=>{
    moves.classList.remove("hide")
    rules.classList.add("hide")
    openings.classList.add("hide")
    tactics.classList.add("hide")
})
li[1].addEventListener("click", ()=>{
    moves.classList.add("hide")
    rules.classList.remove("hide")
    openings.classList.add("hide")
    tactics.classList.add("hide")
})
li[2].addEventListener("click", ()=>{
    moves.classList.add("hide")
    rules.classList.add("hide")
    openings.classList.remove("hide")
    tactics.classList.add("hide")
})
li[3].addEventListener("click", ()=>{
    moves.classList.add("hide")
    rules.classList.add("hide")
    openings.classList.add("hide")
    tactics.classList.remove("hide")
})
