'use strict';
// variable being called on reece.js
let questionList = {
  one: {
    question: 'What does HTML stand for?',
    questionChoices: ['Hyper Text Multiple Listing', 'Hyper Text Mark Up Language', 'Hyper Text Machine Lingo', 'Hyper Text Mass Linux','Hovering Text Manipulation Language'],
    correct: 'Hyper Text Mark Up Language'
  },

  two: {
    question: 'What would be the shorthand version of... const welcome = "You have logged in as " + first +" "+ last +" ".',
    questionChoices: ['`You + have logged + in as + First + Last', 'You have logged in as.exe.shorthand','`You have logged in as ${first} ${last}`', 'You have logged in as + "const.welcome" + "."' ],
    correct: '`You have logged in as ${first} ${last}`'
  },

  three: {
    question: 'You have declared a function that takes in an array of numbers and returns the sum of those numbers. How do you get your function to run?',
    questionTwochoices: ['Pick up one of those rocks, get behind a boulder. In a few minutes the man in black will come running around the bend. The minute his head is in view, hit it with the rock.', 'You have to get on spotify and play "Call Me, Maybe" by Carly Rae Jepsen on repeat.', 'The code inside of the function is automatically executed after the function has been defined.', 'The function must be called upon with a given set of arguments.', 'You only have to invoke functions that are nested within another function, and this is most certainly bad practice.'],
    correct: 'The function must be called upon with a given set of arguments.'
  },

  four: {
    question: 'How would you remove the first element item from an array?',
    questionChoices: [ 'Impossiblé!', 'the pop() method', 'the shift() method', 'the FM() method',],
    correct: 'the shift() method'
  },

  five: {
    question: 'What is the difference between em and rem in CSS?',
    questionChoices: ['They are totes the same obvi!', 'em is just shorthand for rem', 'em is relative to the font size of the parent and rem is relative to the font size of an html element.', 'em is a measurement for CSS to scale with the page size and rem is a measurement that does not allow scaling with the page size.'],
    correct: 'em is relative to the font size of the parent and rem is relative to the font size of an html element.'
  },

  six: {
    question: 'What is Event Bubbling?',
    questionChoices: ['When an element receives an event and that event is transmitted to its parent elements in the DOM tree until it gets to the root element.', 'Event Bubbling happens when you invoke a nested function that resides within another function.', 'This is the process that dictates how elements should be rendered on screen.', 'Event Bubbling takes place when the arguments passed within a function spill out of the parentheses and leak into the curly brackets.','You keep using that word. I do not think it means what you think it means.'],
    correct: 'When an element receives an event and that event is transmitted to its parent elements in the DOM tree until it gets to the root element.'
  },
  
  seven: {
    question: 'How do you add your CSS styling to the HTML page?',
    questionChoices: ['Mawwage. Mawwage is what bwings us togeva today. Mawwage, that bwessed awwangement, that dweam within a dweam.', 'You can use Inline, Internal, or External styling method. An external link element is generally best practice, however.', 'You just plop your CSS style sheet into a folder with the desired HTML document, and since they are neighbors, they will figure it out.', 'What even is CSS? Did you just make that up on the fly?','The only way to add styling to an HTML page is to ask ChatGPT to do it.'],
    correct: 'You can use Inline, Internal, or External styling method. An external link element is generally best practice, however.'
  },
  
  eight: {
    question: 'How does local storage store data?',
    questionChoices: ['You simply copy the data you wish to save for later and plop it into a Microsoft Word document.', 'It is quite simple, really. It just does.', 'Rest well and dream of large women.', 'It converts everything into ones and zeros which is puter talk for remember this forever please.','The keys and values are always stored in the UTF-16 string format. As with objects, integer keys are automatically converted to strings.'],
    correct: 'The keys and values are always stored in the UTF-16 string format. As with objects, integer keys are automatically converted to strings.'

  },
  nine: {
    question: 'The h1 tag is used to create:',
    questionChoices: ['Paragraphs', 'Colors', 'Cookies', 'Headings', 'Text'],
    correct: 'Headings'
  },
  ten: {
    question: 'Which property specifies the color of a border?',
    questionChoices: [':border-color', ':border-witdth', ':border-style', 'border-line-color', 'border-rgb'],
    correct: ':border-color'
  }
};
