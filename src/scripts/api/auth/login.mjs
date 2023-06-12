import { API_URL_LOGIN } from "../apiURL.mjs";

// Add event listener to the login form submission
document.querySelector("#login").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  try {
    const form = document.querySelector("#login");
    const usernameInput = form.querySelector("#floatingInput");
    const passwordInput = form.querySelector("#floatingPassword");

    const response = await fetch(API_URL_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value,
      }),
    });

    const data = await response.json();
    console.log(data);

    // Save the token to localStorage
    localStorage.setItem("token", data.token);

    alert("Login successful");
  } catch (error) {
    console.error('An error occurred during login', error);
  }
});