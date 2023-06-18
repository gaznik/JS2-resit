import { retrieveAccessToken } from "../localStorage.mjs";

// Checks if user is logged in / if there is a token in local storage
export function userIsLoggedIn() {
    const accessToken = retrieveAccessToken();
    if (!accessToken) return false;
    return true;
};