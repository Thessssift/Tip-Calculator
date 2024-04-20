const bills = document.querySelector("#billInput");
const people = document.querySelector("#peopleInput");
const fillOne = document.querySelector("#fillOne");
const fillTwo = document.querySelector("#fillTwo");
const rateCustom = document.querySelector("#rateCustom");
const reset = document.querySelector("#reset");
const rating = [...document.querySelectorAll("#rate")];

let table = {
  bill: 0,
  rate: 0,
  people: 1,
};

bills.addEventListener("input", inputToTable);
people.addEventListener("input", peopleToTable);
rateCustom.addEventListener("input", rateCustomToTable);
reset.addEventListener("click", reseted);

rating.forEach((element) => {
  element.addEventListener("click", rateToTable);
});

function rateToTable(element) {
  table.rate = parseInt(element.currentTarget.innerHTML);
  fill();
}
function inputToTable(e) {
  table.bill = parseInt(e.target.value);
  fill();
}
function peopleToTable(e) {
  table.people = parseInt(e.target.value);
  fill();
}

function rateCustomToTable(e) {
  table.rate = parseInt(e.target.value);
  fill();
}

function fill() {
  fillOne.textContent = (table.bill * (table.rate / 100)) / table.people;
  fillTwo.textContent =
    table.bill / table.people +
    (table.bill * (table.rate / 100)) / table.people;
}
function reseted() {
  location.reload();
}
