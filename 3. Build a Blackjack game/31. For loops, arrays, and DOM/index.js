let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent


function m(){
    for (let i = 0; i < 5; i += 1) {
        greetingEl.textContent = sentence[i];
      }
    

}
