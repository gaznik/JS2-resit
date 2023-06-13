import { API_URL_PRODUCTS } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

export async function readPost(id) {
    const readPostURL = `${API_URL_PRODUCTS}/${id}`;
    
    const response = await fetchToken(readPostURL);

    return await response.json();
};

export async function readPosts() {
    const readPostURL = `${API_URL_PRODUCTS}`;
    
    const response = await fetchToken(readPostURL);

    return await response.json();
};
