import jwtDecode from 'jwt-decode';

export const getUserFromToken = () => {
    const token = localStorage.getItem('authToken');
    return token ? jwtDecode(token) : null;
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};
