import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '/images/logo.png'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaHeart } from 'react-icons/fa';
import { connect } from "react-redux";
import SearchInput from '../SearchInput';
// import { Badge } from "antd";


const Header = (props) => {

    const { cart, wishlist, isAuthenticated, setIsAuthenticated, onSearch } = props;

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');


      useEffect(() => {
          const token = localStorage.getItem('token');
          setIsAuthenticated(!!token);
      }, []);

    const handleLogout = () => {
        console.log(22222);
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        setIsAuthenticated(false);
        // window.location.href = '/login';
        navigate('/login');
    };

    // const userEmail = localStorage.getItem("userEmail")

    const handleSearch = (event) => {
        if (onSearch) {
            onSearch(event.target.value);
        } else {
            console.warn("onSearch function is not defined.");
        }
    };


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
                                <form className="d-flex" onSubmit={handleSearch}>
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        // placeholder="Search"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>

                            {isAuthenticated ? (
                                <>

                                    <li className="nav-item">
                                        <NavLink to="/wishlist" className="nav-link">
                                            < FaHeart style={{ fontSize: '24px' }} />
                                            <sup>
                                            <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.wishlist.length}</span>
                                               
                                            </sup>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/cart" className="nav-link">
                                            <PiShoppingCartBold style={{ fontSize: '24px' }} />
                                            <sup>
                                            <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill badge bg-info"> {props.cart.length}</span>
                                               
                                            </sup>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handleLogout}>Logout</button>
                                    </li>

                                    {/* <li className="nav-item">
                                        <h5>{userEmail} </h5>
                                            
                                    </li> */}
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
       cart : state.cartProduct.cart,
       wishlist : state.wishlistProduct.wishlist
    };
  };
  
  export default connect(mapStateToProps)(Header);