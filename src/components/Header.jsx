import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import logo from '/images/logo.png'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaHeart, FaYenSign } from 'react-icons/fa';
import { connect } from "react-redux";
import SearchInput from "./SearchInput"
import Profile from './Profile';


const Header = (props) => {

    const { isAuthenticated, setIsAuthenticated } = props;

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, [setIsAuthenticated]);

    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
                                <SearchInput />
                            </li>

                            {isAuthenticated ? (
                                <>

                                    <li className="nav-item">
                                        <NavLink to="/wishlist" className="nav-link">
                                            < FaHeart style={{ fontSize: '24px' }} />
                                            <sup>
                                                {props.wishlist.length > 0 && (
                                                    <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.wishlist.length}</span>
                                                )}
                                            </sup>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/cart" className="nav-link">
                                            <PiShoppingCartBold style={{ fontSize: '24px' }} />
                                            <sup>
                                                {props.cart.length > 0 && (
                                                    <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.cart.length}</span>
                                                )}
                                            </sup>
                                        </NavLink>
                                    </li>
                                    <li className='d-flex justify-content-center align-items-center nav-item dropdown'>
                                        
                                        <NavLink
                                        className='nav-link dropdown-toggle'
                                        to="/profile"
                                        data-bs-toggle="dropdown"
                                        >
                                            Profile
                                            <Profile 
                                            isAuthenticated = {props.isAuthenticated}
                                            setIsAuthenticated = {props.setIsAuthenticated}
                                            />
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>

                                    <li className="nav-item">
                                        <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </li>

                                </>
                            )}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {

    return {
        cart: state.cartProduct.cart,
        wishlist: state.wishlistProduct.wishlist
    };
};

export default connect(mapStateToProps)(Header);