import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';     // hook
import "../../styles/AuthStyles.css";
import Metapage from '../../components/Layout/Metapage';



const Login = ({setIsAuthenticated}) => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const [error, setError] = useState(null); 
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();             // by preventing default will not refresh and single page app will stay as it is

        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: formData.email,
                password: formData.password,
            });

            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('userEmail', formData.email);
            setIsAuthenticated(true);
            toast.success('Login successful');
            navigate('/');
        }  catch (err) {
            const errorMessage = err.response?.data?.message || 'An error occurred';
            
            if (errorMessage.toLowerCase().includes("unauthorized")) {
                toast.error('Invalid email or password. Please try again.');
                navigate('/login');
            }
    
            setError(errorMessage);
        }
    };

    return (
        <Metapage title="Login e-shopping">
            <div className="form-container">
                <form onSubmit={handleSubmit}>                        
                    <h4 className="title">Login</h4>

                    <div className="mb-3">
                        <input type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Your Email'
                            required />
                    </div>

                    <div className="mb-3">
                        <input type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Your Password'
                            required />
                    </div>
                  
                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>

            </div>
        </Metapage>
    );
};

export default Login;
