
// Displays error message 
export function displayErrorMessage(message) {
    var errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
    errorMessageElement.style.display ="block";
  }