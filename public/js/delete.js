const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/expenses/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to delete Expense!");
      }
    }
  };

document
  .querySelector(".expense-list")
  .addEventListener("click", delButtonHandler);