'use strict';

var secretValue = 0;

// generate random number
function getRandomNumber() {
  // Use Math.floor to round down to the nearest integer
  secretValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  return secretValue;
}

getRandomNumber();

// checking wheather the number guesed  is equa;l to secret number or not
function submitHandle() {
  const guessedNumber = parseInt(document.querySelector('.guess').value);
  if (guessedNumber === secretValue) {
    document.querySelector('.secretNumber').textContent = secretValue;
    document.querySelector('#description').textContent =
      'Congrats you Won the Game';
  } else {
    alert('OPPS! guessed wrong number!');
  }
}

//heading
document.querySelector('#description').textContent =
  'Guess the Number between 1-10';

// click event
document.querySelector('.action').addEventListener('click', submitHandle);

console.log(secretValue);
// New game event

function newGameHandler() {
  getRandomNumber();
  return (
    (document.querySelector('.secretNumber').textContent = ''),
    (document.querySelector('.guess').value = '')
  );
}

document.querySelector('.newSecret').addEventListener('click', newGameHandler);
