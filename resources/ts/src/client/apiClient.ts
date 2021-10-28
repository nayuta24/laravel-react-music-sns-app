import axios from 'axios';

const apiClient = axios.create({
    baseURL: '',
    withCredentials: true,
});

export default apiClient;
