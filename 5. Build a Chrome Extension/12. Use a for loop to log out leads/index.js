let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i += 1) {
  console.log(myLeads[i]);
}
// Log out the items in the myLeads array using a for loop
