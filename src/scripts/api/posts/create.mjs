import { API_URL_CREATE } from "../apiURL.mjs";

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
  } catch (error) {
    console.error(error);
  }
}
