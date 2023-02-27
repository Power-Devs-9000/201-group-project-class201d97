let username = document.getElementById("username");
let saveuserBtn = document.getElementById("saveuserBtn");
let finalScore = document.getElementById("finalScore");
let recentScore = localStorage.getItem("recentScore");

let highScore = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScore);

finalScore.innerText = recentScore;
