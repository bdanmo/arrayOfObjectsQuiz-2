// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  { Q:'How many planets are in the solar system? (Pluto counts!)',  A:'9'},
  { Q:'How many continents are there?', A:'7'},
  { Q:'How many legs does an insect have?', A:'6'},
  { Q:'What year was JavaScript created?', A:'1995'},  
  { Q: "What is Robert Plant's middle name?", A: "Allen"}
];

let correctAnswers = ["correct"];
let wrongAnswers = ["incorrect"];
let message = ``;

for (let i = 0; i < quiz.length; i++) {
  let question = quiz[i].Q;
  let answer = quiz[i].A;
  let response = prompt(question);
  if ( response.toLowerCase() === answer.toLowerCase() ) {
    correctAnswers.push({...quiz[i], R: response});
  } else {
    wrongAnswers.push({...quiz[i], R: response});
  }
}

//Display results to the user
message += `<h1>You got ${correctAnswers.length - 1} out of ${quiz.length} questions right!</h1>`;

if (correctAnswers.length > 1) {
  message += `
    <h2>Answered Correctly:</h2>
    ${createOrderedList(correctAnswers)}
  `;
}

if (wrongAnswers.length > 1) {
  message += `
    <h2> Answered Incorrectly:</h2>
    ${createOrderedList(wrongAnswers)}
  `;
}

document.querySelector('main').innerHTML = message;

  