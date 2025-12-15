import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    validateStatus: () => {
        return true; // Resolves promises of responses
    },
    withCredentials: true, // Allows to send cookies stored in the browser
});

export default api;
