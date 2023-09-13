const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // collect values from signup
    const name = document.querySelector("#signupUsername").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();
  
    console.log(name, password)
  
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   redirect to dashboard if successful
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);