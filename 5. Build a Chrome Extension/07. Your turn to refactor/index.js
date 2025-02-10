// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
  console.log("Button clicked!");
}

let inputButton = document.getElementById("input-btn");

inputButton = addEventListener("click", function () {
  console.log("saved!");
});
