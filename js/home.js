'use strict';

//********** GLOBAL VARIABLES*/
let questionListKeys = ['one', 'two', 'three', 'four', 'five'];
let userName = document.getElementById('user-information');
let questionBox = document.getElementById('question-box');
let answers = document.getElementById('solution-container');
// let attempts = 0; // stretch goal
let score = 0;
let playerArray = [];

//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}

//!! RANDOM Q start-ish


//********** HELPER FUNCTIONS*/

// TODO: Create function to have an on click effect attached to TD elements within table
let questionDisplay = document.createElement('h2');
let questionIndex = 0;
questionBox.appendChild(questionDisplay);
// let randomQuestion = Math.floor(Math.random() * questionListKeys.length);

function renderQuestion() {
  questionDisplay.textContent = questionList[questionListKeys[questionIndex]].question;
  // console.log(questionList);
  renderAnswers(); // number that was generated to select question randomly
}

function renderAnswers() {

  // console.log(questionList[questionListKeys[questionIndex]].questionChoices.length);
  for (let i = 0; i < questionList[questionListKeys[questionIndex]].questionChoices.length; i++) {
    let answerChoices = document.createElement('div');
    answerChoices.id = 'answerChoices';
    answerChoices.textContent = questionList[questionListKeys[questionIndex]].questionChoices[i]; //
    answers.appendChild(answerChoices);

  }

}


//******* PROTOTYPE */


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

// ********** LOCAL STORAGE STARTS HERE **********
// TODO: Convert data to a string and store it in local storage
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

console.log(questionIndex);
function clickHandler(event) {
  if (event.type === 'click') {
    console.log(event.target.textContent);
  }
  if(questionIndex === 0 && event.target.textContent === 'b'){
    alert('Your guess for Q1 was correct!');
    score++;
    console.log(`Your score is ${score}`);
  }
  if(questionIndex === 1 && event.target.textContent === 'a2'){
    alert('Your guess for Q2 was correct!');
    score++;
    console.log(`Your score is ${score}`);
  }
  if(questionIndex < 5){
    questionIndex++;
  }

  console.dir(answers);
  document.querySelectorAll('#answerChoices').forEach(element => element.remove()); // audrey told me to do it 2/28/23 @ 11:55
  renderQuestion();
}




// ********** EXECUTABLE CODE */
userName.addEventListener('submit', handleFormSubmit);
answers.addEventListener('click', clickHandler);

renderQuestion();















































