import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../Styles/AuthStyles.css";
import Metapage from '../../Components/common/Metapage';
import { API_ENDPOINTS } from '../../Shared/config';
import SignUpContainer from '../../Container/SignUpContainer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }

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

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
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
      const response = await axios.post(API_ENDPOINTS.signUpApi, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        avatar: 'https://api.lorem.space/image/face?w=150&h=150' 
      });

      toast.success("Account created successfully");
      navigate('/login');
    } catch (err) {
      setErrors({ api: err.response?.data?.message || 'An error occurred' });
    }
  };

  return (
    <Metapage title="Signup e-shopping app">
     <SignUpContainer handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} />
    </Metapage>
  );
};

export default Signup;
