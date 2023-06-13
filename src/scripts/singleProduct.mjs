import * as postMethods from "./api/posts/index.mjs";

const resultContainer = document.querySelector(".resultContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



const url = "https://dummyjson.com/products/" + id;

async function fetchProduct() {
    try {
        // Retrieve data from the API endpoint
        const response = await fetch(url);
        const product = await response.json();

   

        // Populate the product data on the HTML page
        document.getElementById('product-name').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `$${product.price}`;
        document.getElementById('product-img').innerText = product.images;
        
        if (product.images && product.images.length > 0) {
            product.images.forEach((image) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = `Image from ${product.title}`;
                container.append(img);
            });
        }

    } catch (error) {
        console.error(error);
    }
}

fetchProduct();