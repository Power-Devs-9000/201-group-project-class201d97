<<<<<<< HEAD
=======
/******GLOBALS w/ DOM*******/
>>>>>>> 64b24739e610e8f259f8cccda59efe52b08f7c18
let highScoresList = document.getElementById("highScoreList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let finalScore = document.getElementById("finalScore");
let recentScore = localStorage.getItem("recentScore");

<<<<<<< HEAD
highScoresList.innerHTML = highScores
// (.map: The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. )(=>: An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage)
  .map(score => { 
    return `<li class="high-score">${score.name} scored ${score.score}</li>`;
  })
  .join("");

=======
>>>>>>> 64b24739e610e8f259f8cccda59efe52b08f7c18

highScoresList.innerHTML = highScores
// (.map: The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. )


// (=>: An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage)
  .map(score => {
    return `<li class="high-score">${score.name} scored ${score.score}</li>`;
  })
  .join("");




finalScore.innerText = recentScore;