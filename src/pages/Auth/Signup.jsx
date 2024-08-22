import React,{ useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';     // hook
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import Metapage from '../../components/Layout/Metapage';


const Signup = () => {
    const [formData, setFormData] = useState(
      {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
          setError("Password doesn't match");
        }

        try {
          const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              avatar: 'https://api.lorem.space/image/face?w=150&h=150' // Placeholder avatar
          }
        );
        toast.success("Account created successfully");
          // Navigate to login or another page after successful signup
          navigate('/login');
      } catch (err) {
          setError(err.response?.data?.message || 'An error occurred');
      }
    }
   
   


  return (
    <Metapage title="Signup e-shopping app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>                        {/*custom function to handle submit*/}
          <h4 className="title">Signup</h4>
            <div className="mb-3">
                <input type="text" 
                name='name'
                value={formData.name} 
                onChange={handleChange}
                className="form-control" 
                placeholder='Enter Your Name'
                required />
            </div>

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

            <div className="mb-3">
                <input type="password" 
                name='confirmPassword'
                value={formData.confirmPassword} 
                onChange={handleChange}
                className="form-control" 
                placeholder='Confirm Password'
                required />
            </div>
            
          <button type="submit" className="btn btn-primary">
            SIGNUP
          </button>
        </form>

      </div>
    </Metapage>
  );
};

export default Signup;
