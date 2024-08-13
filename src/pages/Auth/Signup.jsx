import React,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';     // hook
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";


const Signup = () => {
    const [username,setName] = useState("");                //getter,setter
    const [email,setEmail] = useState("");                //getter,setter
    const [password,setPassword] = useState("");                //getter,setter
    const [phone,setPhone] = useState("");                //getter,setter

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
    <Layout title="Signup e-shopping app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>                        {/*custom function to handle submit*/}
          <h4 className="title">Signup</h4>
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
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" 
                id="email" 
                placeholder='Enter Your Email'
                required />
            </div>

            <div className="mb-3">
                <input type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="form-control" 
                id="phone" 
                placeholder='Enter Your Phone Number'
                required />
            </div>

            <div className="mb-3">
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" 
                id="password" 
                placeholder='Enter Your Password'
                required />
            </div>

            
          <button type="submit" className="btn btn-primary">
            SIGNUP
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Signup;
