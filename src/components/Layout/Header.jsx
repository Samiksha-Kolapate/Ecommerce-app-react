import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '/images/logo.png'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaHeart } from 'react-icons/fa';
// import { Badge } from "antd";


const Header = (props) => {

   const { cartCount,wishlistCount} = props;


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} style={{ width: '50px', height: '50px' }} />
                            e-Shopping
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/wishlist" className="nav-link">
                                < FaHeart />
                                <sup>
                                    
                                    {wishlistCount > 0 && (
                                        <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info">{wishlistCount}</span>
                                    )}
                                </sup>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                <PiShoppingCartBold style={{ fontSize: '24px' }} />
                                <sup>
                                    
                                    {cartCount > 0 && (
                                        <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info">{cartCount}</span>
                                    )}
                                </sup>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

    </>
  )
}

export default Header