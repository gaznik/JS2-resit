// Saves token to local storage
export function save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
};

// Retrieve value from local storage with key
export function load(key, value){
    try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
    } catch {
        return null
    }
};

// Retrieve the token from local storage
export function retrieveAccessToken() {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) return null;
    return accessToken;
};