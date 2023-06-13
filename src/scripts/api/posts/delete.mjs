import { API_URL_PRODUCTS } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

export async function deletePost(id) {
    const deletePostURL = `${API_URL_PRODUCTS}/${id}`;
    
    const response = await fetchToken(deletePostURL, {
        method: "delete"
    });

    return await response.json();
};
