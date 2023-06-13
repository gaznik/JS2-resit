import { API_URL_PRODUCTS } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";



export async function updatePost(postData) {
    const updatePostURL = `${API_URL_PRODUCTS}/${postData.id}`;
    
    const response = await fetchToken(updatePostURL, {
        method: "put",
        body: JSON.stringify(postData)
    });

    return await response.json();
};
