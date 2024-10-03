import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';     // hook
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import Metapage from '../../components/Layout/Metapage';


const Signup = () => {
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
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
      <section className="signup">
        <div className="container-fluid">
          <div className="row justify-content-center mx-5 g-0">
            <div className="col-sm-4 text-black">           
              <div className="d-flex align-items-start h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                  <div className="form-outline mb-4">
                    <input
                      type="name"
                      name='name'
                      id="form2Example18"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg border-0 border-bottom rounded-0"
                      placeholder='Enter Name'
                      style={{ boxShadow: 'none', outline: 'none' }}
                      required
                    />
                    <label className="form-label" htmlFor="form2Example18">
                    </label>
                  </div>


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

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name='confirmPassword'
                      id="form2Example28"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-control form-control-lg border-0 border-bottom rounded-0"
                      placeholder='Confirm Password'
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
                      Signup
                    </button>
                  </div>

                </form>
              </div>
            </div>

            <div className="col-sm-4 px-0 d-none d-sm-block">
              <div className='text-white  py-5 px-5'
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left", background: "rgb(29, 215, 178)" }}
              >
                <h1 className='d-flex justify-content-start' style={{ letterSpacing: "1px" }}>Register here</h1>
                <p className='pt-5 text-large fw-bold'>Get access to your Orders, Cart and Recommendations</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Metapage>
  );
};

export default Signup;
