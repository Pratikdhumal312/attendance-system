import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { token, user } = await loginUser(formData);
            localStorage.setItem('authToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            toast.success('Login successful');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error during login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
