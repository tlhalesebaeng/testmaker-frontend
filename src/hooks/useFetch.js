import { useState } from 'react';
import api from '../utils/axiosInstance.js';

const functions = {
    get: (url, options) => api.get(url, options),
    post: (url, data, options) => api.post(url, data, options),
    patch: (url, data, options) => api.patch(url, data, options),
    delete: (url, options) => api.delete(url, options),
};

const useFetch = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetch = async (url, method, data = {}, options = {}) => {
        try {
            setIsLoading(true);
            const response = await functions[method](url, data, options);
            setIsLoading(false);

            if (response.status === 404) {
                setError(`${url} does not exist`);
                return undefined;
            }

            if (response.status < 200 || response.status >= 300) {
                if (response.data) setError(response.data.message);
                else setError('Something went wrong! Please try again later');
                return undefined;
            }

            return response;
        } catch (err) {
            setIsLoading(false);
            setError('Something went wrong! Please try again later');
        }
    };

    return { error, setError, isLoading, fetch };
};

export { useFetch };
