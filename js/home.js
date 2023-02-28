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

let answerCells = document.querySelectorAll('td');
let userName = document.getElementById('user-information');
let attempts = 0;
let score = [];
let question = document.getElementById('question-box');
let answers = document.getElementById('solution-container');

//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}

//!! RANDOM Q start-ish

function randomQ() {
  return Math.floor(Math.random() * renderData.length);
}

// function renderQuestion() {
//   while (renderData.length < 5) {
//     let randomAns = randomQ();

//   }
// };


//********** HELPER FUNCTIONS*/
for(let tdCells of answerCells){
  tdCells.addEventListener('click', selector);
}
// TODO: Create function to have an on click effect attached to TD elements within table
function selector (){
  console.log('Click is working');
}

function renderQuestion() {
  let questionDisplay = document.createElement('h2');
  questionDisplay.textContent = renderData.one.questionOne;
  console.log(renderData.questionOne);
  question.appendChild(questionDisplay);
}

function renderAnswers() {
  let answerRow = document.createElement('tr');
  answers.appendChild(answerRow);

  for (let i = 0; i < renderData.one.questionOnechoices.length; i++) {
    let answerChoices = document.createElement('td');
    answerChoices.textContent = renderData.one.questionOnechoices[i];
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
  console.log('user name submission working.');
}

//*** EVENT HANDLER*** */
// let ansSelected = event.target.questionOnechoices

//********** EXECUTABLE CODE */
userName.addEventListener('submit', handleFormSubmit);
selector();
renderQuestion();
renderAnswers();














































