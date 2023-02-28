'use strict';

//********** GLOBAL VARIABLES*/

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
  return Math.floor(Math.random() * questionList.length);
}


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
  questionDisplay.textContent = questionList.one.questionOne;
  console.log(questionList.questionOne);
  question.appendChild(questionDisplay);
}

function renderAnswers() {
  let answerRow = document.createElement('tr');
  answers.appendChild(answerRow);

  for (let i = 0; i < questionList.one.questionOnechoices.length; i++) {
    let answerChoices = document.createElement('td');
    answerChoices.textContent = questionList.one.questionOnechoices[i];
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

// ****** FORM HANDLING */
function handleFormSubmit(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  console.log('user name submission working.');
}

// *** EVENT HANDLER*** */
// TODO: Create function to have an on click effect attached to div elements within section

let itemClicked = document.querySelector('div');

function clickHandler(event) {
  if (event.type === 'click') {
    console.log('a div was clicked');
  }
  console.log(event.target.textContent);
}

answers.addEventListener('click', clickHandler);


// ********** EXECUTABLE CODE */
userName.addEventListener('submit', handleFormSubmit);
selector();
renderQuestion();
renderAnswers();














































