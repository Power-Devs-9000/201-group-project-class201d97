'use strict';

//********** GLOBAL VARIABLES*/

let score = [];
let question = document.getElementById('question-box');
let answers = document.getElementById('solution-container');

//********** CONSTRUCTOR FUNCTION(S) */

// function User(name) {
//   this.name = name;
//   this.score = score;
// }


//********** HELPER FUNCTIONS*/

function renderAnswers() {
  let answerRow = document.createElement('tr');
  answers.appendChild(answerRow);
  for (let i = 0; i <= 5; i++) {
    let answerChoices = document.createElement('td');
    answerChoices.textContent = 'test';
    answerChoices.appendChild(answerRow);
  }
}


//****** FORM HANDLING */




//********** EXECUTABLE CODE */


renderAnswers();

