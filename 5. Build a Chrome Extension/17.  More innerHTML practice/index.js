const container = document.getElementById("container");

container.innerHTML = "<button>Buy!</button>";

container.addEventListener("click", function () {
  container.innerHTML += "<p>" + "Thank you for buying!" + "</p>";
});
// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
