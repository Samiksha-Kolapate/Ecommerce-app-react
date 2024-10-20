import React from 'react'

const LoginContainer = (props) => {
    const { handleSubmit, handleChange, formData, errors } = props;

    return (
        <>
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
                                            className={`form-control form-control-lg border-0 border-bottom rounded-0 ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder='Enter Email'
                                            style={{ boxShadow: 'none', outline: 'none' }}

                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            name='password'
                                            id="form2Example28"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`form-control form-control-lg border-0 border-bottom rounded-0 ${errors.password ? 'is-invalid' : ''}`}
                                            placeholder='Enter Password'
                                            style={{ boxShadow: 'none', outline: 'none' }}

                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}

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
        </>
    )
}

export default LoginContainer