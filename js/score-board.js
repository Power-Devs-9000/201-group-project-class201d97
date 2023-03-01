
/******GLOBALS w/ DOM*******/

let userName = document.getElementById("userName");
let saveScoreBtn = document.getElementById("saveScoreBtn");
let highScoresList = document.getElementById("highScoreList");
let finalScore = document.getElementById("finalScore");
let recentScore = localStorage.getItem("recentScore");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


const maxHighScores = 5;

finalScore.innerText = recentScore;

userName.addEventListener("keyup", () => {
  saveScoreBtn.disable = !userName.value;
});

highScoresList.innerHTML = highScores
  .map(score => { 
    return `<li class="high-score">${score.name} scored ${score.score}</li>`;
  })
  .join("");