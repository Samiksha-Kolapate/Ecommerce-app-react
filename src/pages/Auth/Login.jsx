/* import React, { useState } from 'react'
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
 */



import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';     // hook
// import "../../styles/AuthStyles.css";
import Metapage from '../../components/Layout/Metapage';



const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            localStorage.setItem('userEmail', response.data.email);
            setIsAuthenticated(true);
            toast.success('Login successful');
            navigate('/');
        } catch (err) {
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
           
            <section className="login">
                <div className="container-fluid">
                    <div className="row justify-content-center mx-5 g-0">
                        <div className="col-sm-4 text-black">
                            <div className="d-flex align-items-start h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            name='email'
                                            id="form2Example18"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-0 border-bottom rounded-0"
                                            placeholder='Enter Email'
                                            style={{ boxShadow: 'none', outline: 'none' }}
                                            required
                                        />
                                        <label className="form-label" htmlFor="form2Example18">
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            name='password'
                                            id="form2Example28"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-0 border-bottom rounded-0"
                                            placeholder='Enter Password'
                                            style={{ boxShadow: 'none', outline: 'none' }}
                                            required
                                        />
                                        <label className="form-label" htmlFor="form2Example28">
                                        </label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button
                                            className="w-100 btn btn-info btn-lg btn-block text-white border-0 fw-bold"
                                            type="submit"
                                            style={{ background: "rgb(29, 215, 178)" }}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    <p className="d-flex justify-content-center small mb-5 pb-lg-2">
                                        <a className="link-info text-muted fs-6" href="#!">
                                            Forgot password?
                                        </a>
                                    </p>
                                    <div>
                                        <p className='fs-6 fw-bold text-primary'>
                                            New to e-Shopping?{" "}
                                            <a href="/signup" className="link-info text-primary text-decoration-none">
                                                Create an account
                                            </a>
                                        </p>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-sm-4 px-0 d-none d-sm-block">
                            <div className='text-white  py-5 px-5'
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left", background: "rgb(29, 215, 178)" }}
                            >
                                <h1 className='d-flex justify-content-start' style={{ letterSpacing: "1px" }}>Login</h1>
                                <p className='pt-5 text-large fw-bold'>Get access to your Orders, Cart and Recommendations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </Metapage>
    );
};

export default Login;
