'use strict';

//********** GLOBAL VARIABLES*/
let renderData = {
  questionOne: 'This is our first test question',
  questionOneAns: ['no', 'yes', 'maybe', 'FML', 'Please help'],
};

let score = [];
let question = document.getElementById('question-box');
let answers = document.getElementById('solution-container');

//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = score;
}


//********** HELPER FUNCTIONS*/
function renderQuestion(){
  let questionDisplay = document.createElement('h1');
  questionDisplay.textContent = renderData.questionOne;
  question.appendChild(questionDisplay);
}

function renderAnswers() {
  let answerRow = document.createElement('tr');
  answers.appendChild(answerRow);

  for (let i = 0; i < renderData.questionOneAns.length; i++) {
    let answerChoices = document.createElement('td');
    answerChoices.textContent = renderData.questionOneAns[i];
    answerRow.appendChild(answerChoices);

  }
}


//******* PROTOTYPE */

// User.prototype.render = function () {
// let answerRow = document.createElement('tr');
// answers.appendChild(answerRow);

// for (let i = 0; i <= 5; i++) {
//   let answerChoices = document.createElement('td');
//   answerChoices.textContent = 'test';
//   answerRow.appendChild(answerChoices);
// }
// };

//****** FORM HANDLING */




//********** EXECUTABLE CODE */

renderQuestion();
renderAnswers();

