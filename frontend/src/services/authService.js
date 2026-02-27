import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Server unreachable" };
    }
};

const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Server unreachable" };
    }
};

const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, { email });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Server unreachable" };
    }
};

const resetPassword = async (resetData) => {
    try {
        const response = await axios.post(`${API_URL}/reset-password`, resetData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Server unreachable" };
    }
};

const logout = () => {
    localStorage.removeItem("token");
};

const getToken = () => {
    return localStorage.getItem("token");
};

const isAuthenticated = () => {
    return !!getToken();
};

export default {
    register,
    login,
    forgotPassword,
    resetPassword,
    logout,
    getToken,
    isAuthenticated
};
