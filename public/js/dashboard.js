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


