import { userIsLoggedIn } from "../userIsLoggedIn.mjs";
import { displayErrorMessage } from "../../errorMessage.mjs";
import { API_URL_PRODUCTS } from "../apiURL.mjs";

const isLoggedIn = userIsLoggedIn();

if (!isLoggedIn) {
  alert("Please log in to edit a post.");
  window.location.href = "login.html"; // Redirect to login page
}

// Function to fetch the current title and description of the API item
async function fetchProductDetails(id) {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}${id}`);
    const data = await response.json();
    return { title: data.title, description: data.description };
  } catch (error) {
    console.error(error);
  }
}

// Function to update the product by ID
async function updateProductById(id, title) {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    alert("Post has been updated");
  } catch (error) {
    console.error("An error occurred:", error);
    displayErrorMessage("Something went wrong. Error: " + error);
  }
}

// Populate form with current title and description
window.addEventListener("DOMContentLoaded", async () => {
  const productIdInput = document.getElementById("productId");
  const productTitleInput = document.getElementById("productTitle");
  const productDescriptionInput = document.getElementById("productDescription");

  // Extract the product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const { title, description } = await fetchProductDetails(productId);

  productIdInput.value = productId;
  productTitleInput.value = title;
  productDescriptionInput.value = description;
});

// Event listener form to handle submission
document.getElementById("updateForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const productId = document.getElementById("productId").value;
  const productTitle = document.getElementById("productTitle").value;

  updateProductById(productId, productTitle);
});