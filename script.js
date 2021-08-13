'use strict';

const gameNumber = '2000';
let cows = 0;
let bulls = 0;
let userNumber = window.prompt(`Enter the 4 digit number: `);

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

const userCorrectNumber = validityCheck(userNumber);


if (userCorrectNumber == false) {
    userNumber = window.prompt(`Enter the 4 digit number: `);
} else if(userCorrectNumber) {
    bullCow(gameNumber, userNumber);
    window.alert(`You got ${bulls} bull/s and ${cows} cow/s!`);
}
else {window.alert('Wrong Input!')
};
