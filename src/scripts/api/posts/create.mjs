import { API_URL_PRODUCTS } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";


export async function createPost(postData) {
    const createPostURL = API_URL_PRODUCTS;
    
    const response = await fetchToken(createPostURL, {
        method: "post",
        body: JSON.stringify(postData)
    });

    return await response.json();
};

