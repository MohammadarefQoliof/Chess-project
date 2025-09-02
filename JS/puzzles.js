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
    answer1: "ng6+",
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

let image = document.querySelector(".image")
let input = document.querySelector(".answer")
let checkBtn = document.querySelector(".checkBtn")
let otherPuzzles = document.getElementById("otherPuzzles")
let mateImage = document.querySelector(".mateImage")


image.style.backgroundImage = `url(${puzzle.photo1})`
let flag = true

input.classList.remove("wrongAnswer")
input.classList.remove("allRight")

checkBtn.addEventListener("click", ()=>{
    let answer = input.value.toLowerCase().replaceAll(" ", "")
    if (flag){
        if (answer == puzzle.answer1){
            setTimeout(() => {
                image.style.backgroundImage = `url(${puzzle.photo3})`
            }, 2000);
            image.style.backgroundImage = `url(${puzzle.photo2})`
            input.classList.remove("wrongAnswer")
            flag = false
        }else{
            input.classList.add("wrongAnswer")
        }
    }else{
        if (answer == puzzle.answer2){
            image.style.backgroundImage = `url(${puzzle.photo4})`
            input.classList.remove("wrongAnswer")
            input.classList.add("allRight")
        }else{
            input.classList.remove("allRight")
            input.classList.add("wrongAnswer")
        }
    }
});
let submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", ()=>{
    let selected = document.querySelector("#range").value
    let answerOfMateIn1 = document.querySelector(".mateAnswer")
    let mateCheckBtn = document.querySelector(".mateCheckBtn")
    answerOfMateIn1.classList.remove("allRight")
    answerOfMateIn1.classList.remove("wrongAnswer")
    answerOfMateIn1.value = ""
        
    if (selected == "200-400"){
        mateImage.style.backgroundImage = "url('../images/mate in 1 200-400.png')"
        mateCheckBtn.addEventListener("click", ()=>{
            let mateAnswer = answerOfMateIn1.value.toLowerCase().replaceAll(" ", "")
            if (mateAnswer == "qxh7"){
                mateImage.style.backgroundImage = "url('../images/mate in 1 200-400 page2.png')"
                answerOfMateIn1.classList.remove("wrongAnswer")
                answerOfMateIn1.classList.add("allRight")
            }else{
                answerOfMateIn1.classList.remove("allRight")
                answerOfMateIn1.classList.add("wrongAnswer")
            }
        })
    }else if (selected == "400-600"){
        mateImage.style.backgroundImage = "url('../images/mate in 1 400-600.png')"
        mateCheckBtn.addEventListener("click", ()=>{
            let mateAnswer = answerOfMateIn1.value.toLowerCase().replaceAll(" ", "")
            if (mateAnswer == "qc8"){
                mateImage.style.backgroundImage = "url('../images/mate in 1 400-600 page2.png')"
                answerOfMateIn1.classList.remove("wrongAnswer")
                answerOfMateIn1.classList.add("allRight")
            }else{
                answerOfMateIn1.classList.remove("allRight")
                answerOfMateIn1.classList.add("wrongAnswer")
            }
        })
    }else if (selected == "600-800"){
        mateImage.style.backgroundImage = "url('../images/mate in 1 600-800.png')"
        mateCheckBtn.addEventListener("click", ()=>{
            let mateAnswer = answerOfMateIn1.value.toLowerCase().replaceAll(" ", "")
            if (mateAnswer == ""){
                mateImage.style.backgroundImage = "url('../images/mate in 1 600-800 page2.png')"
                answerOfMateIn1.classList.remove("wrongAnswer")
                answerOfMateIn1.classList.add("allRight")
            }else{
                answerOfMateIn1.classList.remove("allRight")
                answerOfMateIn1.classList.add("wrongAnswer")
            }
        })
    }else if (selected == "800-1000"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "1000-1200"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "1200-1400"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "1400-1600"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "1600-1800"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "1800-2000"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "2000-2200"){
        mateImage.style.backgroundImage = "url('')"
    }else if (selected == "2200+"){
        mateImage.style.backgroundImage = "url('')"
    }
})