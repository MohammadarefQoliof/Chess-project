let puzzles = [
{
    photo: "../images/puzzle1page1.png",
    answer: "qe4+"
},
{
    photo: "../images/puzzle2page1.png",
    answer: "bb5"
},
{
    photo: "../images/puzzle3page1.png",
    answer: ""
},
{
    photo: "../images/puzzle4page1.png",
    answer: ""
},
{
    photo: "../images/puzzle5page1.png",
    answer: ""
},
{
    photo: "../images/puzzle6page1.png",
    answer: ""
},
{
    photo: "../images/puzzle7page1.png",
    answer: ""
},
]
const today = new Date()
const index = today.getDate() % puzzles.length;
let puzzle = puzzles[index]
console.log(index);

let image = document.getElementById("image")
let input = document.getElementById("answer")
console.log(image);
console.log(puzzle.photo);

image.style.backgroundImage = `url(${puzzle.photo})`
