'use strict';

//********** GLOBAL VARIABLES*/

let answerCells = document.querySelectorAll('td');
let userName = document.getElementById('user-information');
let attempts = 0;
let score = [];
let question = document.getElementById('question-box');
let answers = document.getElementById('solution-container');
let playerArray = [];

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
for (let tdCells of answerCells) {
  tdCells.addEventListener('click', selector);
}
// TODO: Create function to have an on click effect attached to TD elements within table
function selector() {
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


//*** EVENT HANDLER*** */
// let ansSelected = event.target.questionOnechoices
// console.dir(ansSelected); // prints the selected answer in console
// for loop that iterates through the array of possible answers
// attempts --; // decrease the number of attempts by 1
// render function

//********** LOCAL STORAGE STARTS HERE **********
//TODO: Convert data to a string and store it in local storage
// if (attempts === 0) {
// solutionContainer.removeEventListener('click', handler); // remove event listener
// let stringifiedUsers = JSON.stringify(playerArray);
// console.log('playerArray stringified >>>', stringifiedUsers);

// //TODO: Set stringified user name to local storage
// localStorage.setItem('playerArray', stringifiedUsers);
// }

// function handleShowScore() {
//   if attempts === 0) {
//     scoreBtn.removeEventListener('click', handleShowScore);
//     renderSomething();
//   }
// }

// //TODO: Retrieve the stringified user names from local storage
// let retrievedUsers = localStorage.getItem('playerArray');
// console.log('Retrieved User Name >>>', retrievedUsers);

// //TODO: Convert stringifiedUsers back to usable code
// let parsedUsers = JSON.parse(retrievedUsers);
// console.log('Parsed User Names >>>', parsedUsers);

// //********** REBUILD W/CONSTRUCTOR FUNCTION **********
// if (retrievedUsers) {
//   for (let i = 0; i < retrievedUsers.length; i++) {
//     let reconstructedUsers = new User (parsedUsers[i].name);
//     reconstructedUsers.score = parsedUsers[i].score;
//     playerArray.push(reconstructedUsers);
//   }
// }

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














































