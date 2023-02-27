'use strict';

//********** GLOBAL VARIABLES*/
let renderData = {
  one: {
    questionOne: 'This is our first test question',
    questionOnechoices: ['a', 'b', 'c', 'd']
  },

  two: {
    question: 'Q2',
    questionTwochoices: ['a2, b2, c2, d2']
  }
};

let attempts = 0;
let score = [];
let question = document.getElementById('question-box');
let answers = document.getElementById('solution-container');

//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}

!// RANDOM Q start-ish

  function randomQ() {
    return Math.floor(Math.random() * renderData.length);
  }

// function renderQuestion() {
//   while (renderData.length < 5) {
//     let randomAns = randomQ();

//   }
// };


//********** HELPER FUNCTIONS*/


function renderQuestion() {
  let questionDisplay = document.createElement('h2');
  questionDisplay.textContent = renderData.one.questionOne;
  console.log(renderData.questionOne);
  question.appendChild(questionDisplay);
}

function renderAnswers() {
  let answerRow = document.createElement('tr');
  answers.appendChild(answerRow);

  for (let i = 0; i < renderData.questionOnechoices.length; i++) {
    let answerChoices = document.createElement('td');
    answerChoices.textContent = renderData.questionOnechoices[i];
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
function handleFormSubmit(event) {
  event.preventDefault();
}
for (let i = 0; i < answers.length; i++) {
  if (question === answers[i].questionOnechoices) { }
}
//*** EVENT HANDLER*** */
let ansSelected = event.target.questionOnechoices

//********** EXECUTABLE CODE */

renderQuestion();
renderAnswers();














































