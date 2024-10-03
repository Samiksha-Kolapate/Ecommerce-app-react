import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '/images/logo.png'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaHeart, FaYenSign } from 'react-icons/fa';
import { connect } from "react-redux";
import SearchInput from '../SearchInput';


const Header = (props) => {

    const { isAuthenticated, setIsAuthenticated } = props;

    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    useEffect(() => {
          const token = localStorage.getItem('token');
          setIsAuthenticated(!!token);
      }, [setIsAuthenticated]);

    /* const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if(confirmLogout){
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            setIsAuthenticated(false);
            navigate('/login');
        }
    }; */

    const handleLogout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            setIsAuthenticated(false);
            setShowLogoutModal(false);
            navigate('/login');
    };

    const toggleLogoutModal = () => {
        setShowLogoutModal(!showLogoutModal);
    };


   /*  const handleSearch = (event) => {
        if (onSearch) {
            onSearch(event.target.value);
        } else {
            console.warn("onSearch function is not defined.");
        }
    }; */


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
                                                {props.wishlist.length>0 && (
                                                <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.wishlist.length}</span>
                                                )}
                                            </sup>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/cart" className="nav-link">
                                            <PiShoppingCartBold style={{ fontSize: '24px' }} />
                                            <sup>
                                                {props.cart.length>0 && (
                                            <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.cart.length}</span>
                                                )}
                                            </sup>
                                        </NavLink>
                                    </li>
                                   {/*  <li className='nav-item'>
                                                <Profile 
                                                isAuthenticated = {props.isAuthenticated}
                                                setIsAuthenticated = {props.setIsAuthenticated}
                                                />
                                    </li> */}

                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={toggleLogoutModal}>Logout</button>
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

            <div className={`modal fade ${showLogoutModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Logout</h5>
                            <button type="button" className="btn-close" onClick={toggleLogoutModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to log out?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleLogoutModal}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    
    return {
       cart : state.cartProduct.cart,
       wishlist : state.wishlistProduct.wishlist
    };
  };
  
  export default connect(mapStateToProps)(Header);