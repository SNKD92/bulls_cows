'use strict';

const gameNumber = '1000';
let cows = 0;
let bulls = 0;

// const validityCheck = function (number) {
//   if (number.length == 4 && number.match(/^[0-9]+$/)) {
//     return true;
//   } else return false;
// };
const validityCheck = function (number) {
  if (number.length == 4 && number.match(/^[0-9]+$/)) {
    return true;
  } else return false;
};

let userNumber = window.prompt('Enter the 4 digit number:');

const userCorrectNumber = validityCheck(userNumber);

// if (userCorrectNumber) {
// } else {
//   window.alert('Wrong number format try again!');
//   userNumber = window.prompt(`Enter the 4 digit number: `);
// }

const bullCow = function (gameNumberinput, userNumberinput) {
  for (let i = 0; i < gameNumberinput.length; i++) {
    if (gameNumberinput[i] === userNumberinput[i]) {
      bulls += 1;
    } else cows += 1;
  }
};

const result = bullCow(gameNumber, userNumber);
window.alert(`You got ${bulls} bull/s and ${cows} cow/s!`);
