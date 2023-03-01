'use strict';

//********** GLOBAL VARIABLES*/
let questionListKeys = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let userName = document.getElementById('user-information');
let questionBox = document.getElementById('question-box');
let answers = document.getElementById('solution-container');
let score = 0;
let playerArray = [];

// !! Stretch Goals
// let attempts = 1;
// let randomQuestion = Math.floor(Math.random() * questionListKeys.length);
//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}



//********** HELPER FUNCTIONS*/

// TODO: Create function to have an on click effect attached to TD elements within table
let questionDisplay = document.createElement('h2');
questionDisplay.id = 'questionDisplay';
let questionIndex = 0;
questionBox.appendChild(questionDisplay);

function renderQuestion() {
  questionDisplay.textContent = questionList[questionListKeys[questionIndex]].question;
  // console.log(questionList);
  renderAnswers();
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
  let Username = event.target.userName.value;
  console.log('user name submission working.');
}


//*** EVENT HANDLER*** */
function handleUsersubmit(event){

  //**Identify when submit clicked for username */
  let subClick = event.target.Username;
  console.dir(subClick);
}
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

function clickHandler(event) {
  console.log(event.target.textContent);
  if(questionIndex === 0 && event.target.textContent === questionList.one.correct ){
    alert('Your guess for Q1 was correct!');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 0 && event.target.textContent !== questionList.one.correct){
    alert('sorry that was incorrect');
    console.log(questionIndex);
  }

  if(questionIndex === 1 && event.target.textContent === questionList.two.correct){
    alert('Your guess for Q2 was correct!');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if(questionIndex === 1 && event.target.textContent !== questionList.two.correct){
    alert('Sorry that was incorrect!');
    console.log(questionIndex);
  }

  if(questionIndex === 2 && event.target.textContent === questionList.three.correct){
    alert('Your guess for Q3 was correct!');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 2 && event.target.textContent !== questionList.three.correct){
    alert('sorry that was incorrect!');
    console.log(questionIndex);
  }

  if(questionIndex === 3 && event.target.textContent === questionList.four.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 3 && event.target.textContent !== questionList.four.correct){
    alert('sorry that was incorrect!');
    console.log(questionIndex);
  }

  if(questionIndex === 4 && event.target.textContent === questionList.five.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 4 && event.target.textContent !== questionList.five.correct){
    alert('sorry that was incorrect!');
  }

  if(questionIndex === 5 && event.target.textContent === questionList.six.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 5 && event.target.textContent !== questionList.six.correct){
    alert('sorry that was incorrect!');
  }

  if(questionIndex === 6 && event.target.textContent === questionList.seven.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 6 && event.target.textContent !== questionList.seven.correct){
    alert('sorry that was incorrect!');
  }

  if(questionIndex === 7 && event.target.textContent === questionList.eight.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 7 && event.target.textContent !== questionList.eight.correct){
    alert('sorry that was incorrect!');
  }

  if(questionIndex === 8 && event.target.textContent === questionList.nine.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 8 && event.target.textContent !== questionList.nine.correct){
    alert('sorry that was incorrect!');
  }

  if(questionIndex === 9 && event.target.textContent === questionList.ten.correct){
    alert('Your guess for Q4 was correct');
    score++;
    console.log(`User score is ${score}`);
    console.log(questionIndex);
  } else if (questionIndex === 8 && event.target.textContent !== questionList.ten.correct){
    alert('sorry that was incorrect!');
  }



  if(questionIndex < 10){
    questionIndex++;
  }

  if(questionIndex >= 10){
    document.querySelectorAll('#answerChoices').forEach(element => element.remove());
    let gameOver = document.createElement('h1');
    gameOver.textContent = 'Thank you for playing our game!';
    answers.appendChild(gameOver);
  }

  document.querySelectorAll('#answerChoices').forEach(element => element.remove()); // audrey told me to do it 2/28/23 @ 11:55
  renderQuestion();
}




// ********** EXECUTABLE CODE */
userName.addEventListener('submit', handleFormSubmit);
answers.addEventListener('click', clickHandler);

renderQuestion();















































