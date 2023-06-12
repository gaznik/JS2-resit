import { retrieveAccessToken } from "../localStorage.mjs";

export function userIsLoggedIn() {
    const accessToken = retrieveAccessToken();
    if (!accessToken) return false;
    return true;
};