let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl);
  inputElValue = inputEl.value;

  myLeads.push(inputElValue);
  console.log(myLeads);
});
