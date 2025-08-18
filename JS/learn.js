let li = [...document.querySelectorAll("li")]
console.log(li);
li.map((a, i) =>{
    a.addEventListener("click", ()=>{
        li.forEach(item =>{
            item.style.color = "black"
        })
        a.style.color = "orange"
    })
})