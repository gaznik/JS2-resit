import { userIsLoggedIn } from "../userIsLoggedIn.mjs";
import { displayErrorMessage } from "../../errorMessage.mjs";
const isLoggedIn = userIsLoggedIn();

async function deleteProductById(id) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
    } catch (error) {
      console.error("An error occurred:", error);
      displayErrorMessage("Something went wrong. Error: " + error);
    }
  }
  
  // Eventlistener that executes the code on click
  document.getElementById('deleteBtn').addEventListener('click', async function() {
    // Retrieve the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!isLoggedIn) {
        alert("Please log in to delete a post.");
    window.location.href = "login.html"; // Redirect to login page
} else {
    // Confirm message to user before deleting
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      await deleteProductById(productId);
      alert("Post has been deleted")
      // Redirect after post is deleted
      window.location.href = '/products.html'; 
    }}
  })