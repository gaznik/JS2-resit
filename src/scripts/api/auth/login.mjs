import { API_URL_LOGIN } from "../apiURL.mjs";
import { userIsLoggedIn } from "../userIsLoggedIn.mjs";
const isLoggedIn = userIsLoggedIn();
if(isLoggedIn){
  window.location.href = "products.html"; // Redirect to login page if user is already logged inn and tries accessing login page
}

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
    window.location.href = "products.html"; // Redirect to product page after logging in
    

  } catch (error) {
    console.error('An error occurred during login', error);
  }
});