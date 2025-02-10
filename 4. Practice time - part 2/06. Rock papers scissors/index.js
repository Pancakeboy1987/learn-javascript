let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function rps() {
  let num = Math.floor(Math.random() * 3);
  alert(hands[num]);
}
