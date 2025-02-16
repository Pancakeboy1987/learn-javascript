const welcomeEl = document.getElementById("welcome-el");
const ki = "Hi";
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(x) {
  welcomeEl.textContent = x + ", Per Harald Borgen 👋";
}

greetUser(ki);
