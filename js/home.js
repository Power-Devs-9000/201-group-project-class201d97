'use strict';

//********** GLOBAL VARIABLES*/
let questionListKeys = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let questionDisplay = document.createElement("h2");
let startBtn = document.getElementById("startGame");
let userName = document.getElementById("user-information");
let questionBox = document.getElementById("question-box");
let answers = document.getElementById("solution-container");
let score = 0;
let questionIndex = 0;
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

function startGame() {
  questionDisplay.id = "questionDisplay";
  questionBox.appendChild(questionDisplay);
  renderQuestion();
  document.getElementById("intro").style.visibility = "hidden";
}

function renderQuestion() {
  questionDisplay.textContent =
    questionList[questionListKeys[questionIndex]].question;
  renderAnswers();
}
function renderAnswers() {
  for (
    let i = 0;
    i < questionList[questionListKeys[questionIndex]].questionChoices.length;
    i++
  ) {
    let answerChoices = document.createElement("div");
    answerChoices.id = "answerChoices";
    answerChoices.textContent =
      questionList[questionListKeys[questionIndex]].questionChoices[i]; //
    answers.appendChild(answerChoices);
  }
}

//******* PROTOTYPE */

//*** EVENT HANDLER*** */

function handleStartGame() {
  document.getElementById("startGame").style.visibility = "hidden";
  startGame();
}
//********** LOCAL STORAGE STARTS HERE **********
//TODO: Convert data to a string and store it in local storage

function storeData() {
  let stringifiedUsers = JSON.stringify(playerArray);
  //console.log('User stringified >>>', stringifiedUsers);
  //TODO: Set stringified user name to local storage
  localStorage.setItem("playerArray", stringifiedUsers);
}

// storeData();
// TODO: If there is anything in LS, return that data
function readData() {
  // What data is coming to us, what data can we manipulate
  let rawData = localStorage.getItem("playerArray");
  console.log(rawData);

  let parsedData = JSON.parse(rawData);
  console.log(parsedData);
}

readData();

// *********** REBUILD USER USING CONSTRUCTOR **********
// *********** probably don't need to do this **********

// *** EVENT HANDLER*** */
// TODO: Create function to have an on click effect attached to div elements within section

function clickHandler(event) {
  console.log(event.target.textContent);
  if (
    questionIndex === 0 &&
    event.target.textContent === questionList.one.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 0 &&
    event.target.textContent !== questionList.one.correct
  ) {
    alert('Sorry, the correct answer was Hyper Text Mark Up Language');
  }

  if (
    questionIndex === 1 &&
    event.target.textContent === questionList.two.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 1 &&
    event.target.textContent !== questionList.two.correct
  ) {
    alert('Sorry, the correct answer was `You have logged in as ${first} ${last}`!');
  }

  if (
    questionIndex === 2 &&
    event.target.textContent === questionList.three.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 2 &&
    event.target.textContent !== questionList.three.correct
  ) {
    alert('Sorry, the correct answer was The function must be called upon with a given set of arguments!');
  }

  if (
    questionIndex === 3 &&
    event.target.textContent === questionList.four.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 3 &&
    event.target.textContent !== questionList.four.correct
  ) {
    alert('Sorry, the correct answer was the shift() method!');
  }

  if (
    questionIndex === 4 &&
    event.target.textContent === questionList.five.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 4 &&
    event.target.textContent !== questionList.five.correct
  ) {
    alert('Sorry, the correct answer was em is relative to the font size of the parent and rem is relative to the font size of an html element!');
  }

  if (
    questionIndex === 5 &&
    event.target.textContent === questionList.six.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 5 &&
    event.target.textContent !== questionList.six.correct
  ) {
    alert('Sorry, the correct answer was When an element receives an event and that event is transmitted to its parent elements in the DOM tree until it gets to the root element!');
  }

  if (
    questionIndex === 6 &&
    event.target.textContent === questionList.seven.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 6 &&
    event.target.textContent !== questionList.seven.correct
  ) {
    alert('Sorry, the correct answer was You can use Inline, Internal, or External styling method. An external link file is generally best practice, however!');
  }

  if (
    questionIndex === 7 &&
    event.target.textContent === questionList.eight.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 7 &&
    event.target.textContent !== questionList.eight.correct
  ) {
    alert('Sorry, the correct answer was The keys and values are always stored in the UTF-16 string format. As with objects, integer keys are automatically converted to strings!');
  }

  if (
    questionIndex === 8 &&
    event.target.textContent === questionList.nine.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 8 &&
    event.target.textContent !== questionList.nine.correct
  ) {
    alert('Sorry, the correct answer was Headings!');
  }

  if (
    questionIndex === 9 &&
    event.target.textContent === questionList.ten.correct
  ) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (
    questionIndex === 9 &&
    event.target.textContent !== questionList.ten.correct
  ) {
    alert('Sorry, the correct answer was :border-color !');
  }

  if (questionIndex < 10) {
    questionIndex++;
  }

  if (questionIndex >= 10) {
    document
      .querySelectorAll("#answerChoices")
      .forEach((element) => element.remove());
    let gameOver = document.createElement("h1");
    gameOver.textContent =
      "Thank you for playing our game, please enter your name!";
    answers.appendChild(gameOver);
    userName.style.visibility = "visible";
    questionDisplay.style.visibility = "hidden";
  }
  document
    .querySelectorAll("#answerChoices")
    .forEach((element) => element.remove()); // audrey told me to do it 2/28/23 @ 11:55
  renderQuestion();
}

// ****** FORM HANDLING */
function handleFormSubmit(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  let scoreStore = { score, userName };
  playerArray.push(scoreStore);
  storeData();
}

// ********** EXECUTABLE CODE */
userName.addEventListener("submit", handleFormSubmit);
startBtn.addEventListener("click", handleStartGame);
answers.addEventListener("click", clickHandler);
userName.style.visibility = "hidden"; // !! HIDE FORM AT START OF GAME, REAPPEAR AT COMPLETION
