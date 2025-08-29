let puzzles = [
{
    photo1: "../images/puzzle1page1.png",
    photo2: "../images/puzzle1page2.png",
    photo3: "../images/puzzle1page3.png",
    photo4: "../images/puzzle1page4.png",
    answer1: "qe4+",
    answer2: "qxa8"
},
{
    photo1: "../images/puzzle2page1.png",
    photo2: "../images/puzzle2page2.png",
    photo3: "../images/puzzle2page3.png",
    photo4: "../images/puzzle2page4.png",
    answer1: "e5+",
    answer2: "exf6",
},
{
    photo1: "../images/puzzle3page1.png",
    photo2: "../images/puzzle3page2.png",
    photo3: "../images/puzzle3page3.png",
    photo4: "../images/puzzle3page4.png",
    answer1: "ng6",
    answer2: "nxf8",
},
{
    photo1: "../images/puzzle4page1.png",
    photo2: "../images/puzzle4page2.png",
    photo3: "../images/puzzle4page3.png",
    photo4: "../images/puzzle4page4.png",
    answer1: "nf6+",
    answer2: "qxd8"
},
{
    photo1: "../images/puzzle5page1.png",
    photo2: "../images/puzzle5page2.png",
    photo3: "../images/puzzle5page3.png",
    photo4: "../images/puzzle5page4.png",
    answer1: "rd8",
    answer2: "qxe6"
},
{
    photo1: "../images/puzzle6page1.png",
    photo2: "../images/puzzle6page2.png",
    photo3: "../images/puzzle6page3.png",
    photo4: "../images/puzzle6page4.png",
    answer1: "ne7+",
    answer2: "nxg6"
},
{
    photo1: "../images/puzzle7page1.png",
    photo2: "../images/puzzle7page2.png",
    photo3: "../images/puzzle7page3.png",
    photo4: "../images/puzzle7page4.png",
    answer1: "ne6+",
    answer2: "nxc5"
},
]
const today = new Date()
const index = today.getDate() % puzzles.length;
const puzzle = puzzles[index]

let image = document.getElementById("image")
let input = document.querySelector("#answer")
let checkBtn = document.getElementById("checkBtn")

image.style.backgroundImage = `url(${puzzle.photo1})`
let flag = true


checkBtn.addEventListener("click", ()=>{
    let answer = input.value.toLowerCase()
    if (flag){
        if (answer == puzzle.answer1){
            setTimeout(() => {
                image.style.backgroundImage = `url(${puzzle.photo3})`
            }, 2000);
            image.style.backgroundImage = `url(${puzzle.photo2})`
            flag = false
        }
    }else{
        if (answer == puzzle.answer2){
            image.style.backgroundImage = `url(${puzzle.photo4})`
        }
    }
});