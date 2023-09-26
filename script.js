'use strict';

let secretValue = 0;

// generate random number
function getRandomNumber() {
  // Use Math.floor to round down to the nearest integer
  secretValue = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

  return secretValue;
}

// checking wheather the number guesed  is equa;l to secret number or not
function submitHandle() {
  const guessedNumber = parseInt(document.querySelector('.guess').value);
  if (guessedNumber === secretValue) {
    document.querySelector('.secretNumber').textContent = getRandomNumber();
    return alert('Congrats guessed right number');
  } else {
    alert('OPPS! guessed wrong number!');
  }
}

//heading
document.querySelector('#description').textContent = 'Guess the Number';

// secret number assigned
document.querySelector('.secretNumber').textContent = getRandomNumber();

// click event
document.querySelector('.action').addEventListener('click', submitHandle);
