'use strict';

const gameNumber = 3000;
console.log(gameNumber)
let cows = 0;
let bulls = 0;
let usernumber;
const promt = function () {
    userNumber = window.prompt(`Enter the 4 digit number: `);
}

promt();

const bullCow = function (gameNumberinput, userNumberinput) {
    for (let i = 0; i < gameNumberinput.length; i++) {
      if (gameNumberinput[i] === userNumberinput[i]) {
        bulls += 1;
      } else cows += 1;
    }
};

const validityCheck = function (number) {
  if (number.length == 4 && number.match(/^[0-9]+$/)) {
    return true;
  } else return false;
};

let userCorrectNumber = validityCheck(userNumber);

while (userCorrectNumber == false) {
    promt();
    userCorrectNumber = validityCheck(userNumber);
    if(userCorrectNumber) {continue} else {
        promt();
        userCorrectNumber = validityCheck(userNumber);
    };
}

bullCow(gameNumber, userNumber);
window.alert(`You got ${bulls} bull/s and ${cows} cow/s!`);
