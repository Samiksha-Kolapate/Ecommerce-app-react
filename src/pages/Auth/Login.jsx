import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';     
import Metapage from '../../Components/common/Metapage';
import { API_ENDPOINTS } from '../../Shared/config';
import LoginContainer from '../../Container/LoginContainer';



const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            formErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0; 
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();           
        if (!validateForm()) {
            return; 
        }

        try {
            const response = await axios.post(API_ENDPOINTS.loginApi, {
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem('token', response.data.access_token);
            setIsAuthenticated(true);
            toast.success('Login successful');
            navigate('/');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'An error occurred';

            if (errorMessage.toLowerCase().includes("unauthorized")) {
                toast.error('Invalid email or password. Please try again.');
                navigate('/login');
            }

            setErrors(errorMessage);
        }
    };

    return (
        <Metapage title="Login e-shopping">
            <LoginContainer handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} />
            
        </Metapage>
    );
};

export default Login;
