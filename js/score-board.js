
/******GLOBALS w/ DOM*******/

let highScoresList = document.getElementById("highScoreList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let finalScore = document.getElementById("finalScore");
let recentScore = localStorage.getItem("recentScore");


highScoresList.innerHTML = highScores
  .map(score => { 
    return `<li class="high-score">${score.name} scored ${score.score}</li>`;
  })
  .join("");
finalScore.innerText = recentScore;