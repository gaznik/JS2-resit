import { userIsLoggedIn } from "./api/userIsLoggedIn.mjs";


    if (userIsLoggedIn()) {
    window.location.pathname = '/products.html';
    } else {
    window.location.pathname = '/login.html';
    }
