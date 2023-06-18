import { displayErrorMessage } from "./errorMessage.mjs";
import { API_URL_PRODUCTS } from "./api/apiURL.mjs";

const resultContainer = document.querySelector(".resultContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



const url = API_URL_PRODUCTS + id;

async function fetchProduct() {
    try {
        // Retrieve data from the API endpoint
        const response = await fetch(url);
        const product = await response.json();


        // Populate the product data on the HTML page
        document.getElementById('product-name').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `$${product.price}`;
        
        if (product.images && product.images.length > 0) {
            product.images.forEach((image) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = `Image from ${product.title}`;
                container.append(img);
            });
        }

    } catch (error) {
        console.error("An error occurred:", error);
        displayErrorMessage("Something went wrong. Error: " + error);
    }
}

fetchProduct();

const editButton = document.getElementById("updateBtn");
editButton.addEventListener('click', ()=> {
    window.location.href = `update.html?id=${id}`;
})
