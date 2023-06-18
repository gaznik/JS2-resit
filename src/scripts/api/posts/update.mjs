import { userIsLoggedIn } from "../userIsLoggedIn.mjs";
import { displayErrorMessage } from "../../errorMessage.mjs";
const isLoggedIn = userIsLoggedIn();

if (!isLoggedIn) {
    alert("Please log in to edit a post.");
    window.location.href = "login.html"; // Redirect to login page
}
// Function to fetch the current title of the API item
async function fetchProductTitle(id) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      return data.title;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Function to update the product by ID
  async function updateProductById(id, title) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const data = await response.json();
      alert("Post has been updated")
    } catch (error) {
      console.error("An error occurred:", error);
      displayErrorMessage("Something went wrong. Error: " + error);
    }
  }
  
  // Populate form with current title
  window.addEventListener('DOMContentLoaded', async () => {
    const productIdInput = document.getElementById('productId');
    const productTitleInput = document.getElementById('productTitle');
  
     // Extract the product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
    const productTitle = await fetchProductTitle(productId);
  
    productIdInput.value = productId;
    productTitleInput.value = productTitle;
  });
  
  // Event listener form to handle submission
  document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    const productId = document.getElementById('productId').value;
    const productTitle = document.getElementById('productTitle').value;
  
    updateProductById(productId, productTitle);
  });