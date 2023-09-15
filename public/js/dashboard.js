const newExpenseHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#description").value.trim();
  const amount = document.querySelector("#amount").value.trim();

  if (description && amount) {
    const response = await fetch("/api/expenses", {
      method: "POST",
      body: JSON.stringify({ description, amount }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#createNewExpense")
  .addEventListener("submit", newExpenseHandler);

  fetch('/api/expenses')
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then ((expenses) => {
      const expenseAmounts = expenses.map((expense) => expense.amount, 0)

      const totalExpense = expenseAmounts.reduce((total, amount) => total + amount).toFixed(2)

      const totalExpensesElement = document.getElementById('total-expenses')
      totalExpensesElement.textContent = `Total Expenses: $${totalExpense}`
    })

    .catch((error) => {
      console.error('Error fetching expense data:', error)
    })


