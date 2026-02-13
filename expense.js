const expenseNameInput = document.getElementById("expense-name")
const amountInput = document.getElementById("amount")
const addButton = document.getElementById("add")
const expenseList = document.getElementById("expense-list")

// expense.js
const expenses = [];
addButton.addEventListener("click", function () {
  const expenseName = expenseNameInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());
  if (!expenseName || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense name and amount");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${expenseName}: $${amount}`;
  expenseList.appendChild(li);

  expenseNameInput.value = "";
  amountInput.value = "";
});
