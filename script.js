const btn = document.getElementById("btn");
const nameInput = document.getElementById("name-input");
const dateInput = document.getElementById("date-input");
const amountInput = document.getElementById("amount-input");
const table = document.getElementById("content-table");

btn.addEventListener("click", () => {
  valueName = nameInput.value;
  valueDate = dateInput.value;
  valueAmount = amountInput.value;

  const itemName = document.createElement("tr");
  itemName.id = "item";
  itemName.innerHTML =
    "<td>" +
    valueName +
    "</td>" +
    "<td>" +
    valueDate +
    "</td>" +
    "<td>" +
    valueAmount +
    "</td>";
  table.appendChild(itemName);

  let btnRemove = document.createElement("button");
  btnRemove.className = "btn-remove";
  btnRemove.innerHTML = "Remove";
  btnRemove.onclick = function () {
    itemName.remove();
  };
  itemName.appendChild(btnRemove);
});
