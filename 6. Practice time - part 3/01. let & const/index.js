// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = true;
let button_1 = document.getElementById("btn-1");
let button_2 = document.getElementById("btn-2");
let button_3 = document.getElementById("btn-3");

button_1.addEventListener("click", function () {
  hasWon = true;
});

button_2.addEventListener("click", function () {
  hasWon = false;
});

// ANNOUNCING THE WINNER
function render() {
  if (hasWon === true) {
    console.log(`${player} got ${points} points and won the ${game} game!`);
  } else {
    console.log(`The winner is  ${opponent} ! ${player} lost the game`);
  }
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
