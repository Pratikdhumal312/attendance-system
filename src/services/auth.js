import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = (data) => {
    return axios.post(`${API_URL}/login`, data).then((response) => response.data);
};
export const registerUser = (data) => {
    return axios.post(`${API_URL}/register`, data);
};
