import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

// Включаем обработку ошибок
axios.interceptors.response.use(null, error => {
    return error.response;
});

export const post = async (endpoint, params) => {
    return await axios.post(`${API_URL}/${endpoint}`, params);
}