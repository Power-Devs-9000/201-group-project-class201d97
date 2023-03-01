
// ******GLOBALS w/ DOM*******/

// let highScoresList = document.getElementById('highScoreList');
// let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// let finalScore = document.getElementById('finalScore');
// let recentScore = localStorage.getItem('recentScore');


// highScoresList.innerHTML = highScores
//   .map(score => {
//     return `<li class="high-score">${score.name} scored ${score.score}</li>`;
//   })
//   .join('');
// finalScore.innerText = recentScore;

let retrievedUsers = JSON.parse(localStorage.getItem('playerArray'));

let table = document.querySelector('table');
if (retrievedUsers) {
  for (let i = 0; i < retrievedUsers.length; i++) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdScore = document.createElement('td');
    tdName.innerText = retrievedUsers[i].name;
    tdScore.innerText = retrievedUsers[i].score;
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    table.appendChild(tr);
  }
}

