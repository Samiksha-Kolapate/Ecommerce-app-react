import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";


const Login = () => {

    const [username, setName] = useState("");                //getter,setter
    const [password, setPassword] = useState("");                //getter,setter




    //form function
    const handleSubmit = async (e) => {                        // TARGETTING EVENT
        e.preventDefault();                                // by preventing default will not refresh and single page app will stay as it is
        
        try {
            const res = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })
                .then(res => res.json())
                .then(json => console.log(json));
            

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout title="Login e-shopping app">
            <div className="form-container">
                <form onSubmit={handleSubmit}>                        
                    <h4 className="title">Login</h4>

                    <div className="mb-3">
                        <input type="text"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="username"
                            placeholder='Enter Your Name'
                            required />
                    </div>

                    <div className="mb-3">
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter Your Password'
                            required />
                    </div>
                    <div className="mb-3">
                        <button
                            type="button"
                            className="btn forgot-btn"
                            onClick={() => {
                                navigate("/forgot-password");
                            }}
                        >
                            Forgot Password
                        </button>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>

            </div>
        </Layout>
    );
};

export default Login;
