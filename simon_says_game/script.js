
let gameSeq = [];
let userSeq = [];
let colors = ["yellow","green","purple","red"];

let started = false;
let level = 0;
let highestScore = 0;
let h2 = document.querySelector("h2");
let highestScoreDisplay = document.getElementById("highestScore");
document.addEventListener("click", function () {
    if (!started){
        console.log (" game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp (){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;



    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
gameSeq.push (randColor);

console.log (gameSeq);
    gameFlash(randbtn);
 
}


function checkAns (idx){
    if (userSeq[idx] === gameSeq[idx]){
if (userSeq.length == gameSeq.length){
    setTimeout(levelUp,1000);
}
    }
    else{
            if (level > highestScore) {
                highestScore = level;
                highestScoreDisplay.innerText = `Highest Score: ${highestScore}`;
            }

        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> `;
        // console.log( h2.innerHTML);
          setTimeout(reset,3000);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        
    }

}
function btnPress() {
    let btn = this;
    userFlash(btn);

   let  userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns (userSeq.length-1);
}
let allcolors = document.querySelectorAll(".btn")
for ( let btn of allcolors){
    btn.addEventListener("click",btnPress);
}
function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

     h2.innerHTML = "Press any key to continue";

}