// *********** JS DATA THAT POPULATES THE TABLE ***********

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

