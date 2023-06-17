import { API_URL_CREATE } from "../apiURL.mjs";
import { userIsLoggedIn } from "../userIsLoggedIn.mjs";
import { displayErrorMessage } from "../../errorMessage.mjs";

const isLoggedIn = userIsLoggedIn();

if (!isLoggedIn) {
    alert("Please log in to create a post.");
    window.location.href = "login.html"; // Redirect to login page
}

// Event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', postData);

// Prevent the default form submission 
async function postData(event) {
  event.preventDefault(); // Prevent the form from being submitted

  try {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const media = document.getElementById('media').value;

    const response = await fetch(API_URL_CREATE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        media
      })
    });

    const data = await response.json();
    console.log(data);
    alert("Post has been created")
  } catch (error) {
    console.error("An error occurred:", error);
    displayErrorMessage("Something went wrong. Error: " + error);
  }
}
