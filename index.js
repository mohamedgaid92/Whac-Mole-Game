const score = document.querySelector("#your-score");

const timeRemaining = document.querySelector("#time-remaining");

const circles  = document.querySelectorAll(".circle");

const moles = document.querySelectorAll(".mole");
const button = document.querySelector(".message button");
const overlay = document.querySelector(".overlay");
let result = 0;
let countDown = 60;

function startGame(){
function randomCircle(){
  circles.forEach(
  function(circle){
      circle.classList.remove("mole")
    })
   let randomPosition =circles[Math.floor(Math.random() * 9)];

    randomPosition.classList.add("mole");
  return  randomPositionId = randomPosition.id;
}


let randomInterval = setInterval(randomCircle,1000)

circles.forEach(
               function(circle){
               circle.addEventListener("mouseup",function(){
               if(circle.id === randomPositionId){
               result++
               score.textContent = result
      }


    })
})


function countDownTimer(){
  countDown--;
  timeRemaining.textContent = countDown;
  if(countDown === 0){
    alert("start new game");
    clearInterval(timelimit);
    clearInterval(randomInterval);
  }

}

let timelimit =setInterval(countDownTimer,1000)
}


button.addEventListener("click",function(){
  startGame()
 
 overlay.style.display="none";
})
