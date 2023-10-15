import React, { useState } from "react";
import "./NavbarStyles.css";
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import LoginButton from "./LoginButton";
import { useCartContext } from "../Context/CartContext";
import { useLoginContext } from "../Context/LoginContext";
import Login from "./Login";
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';



function Navbar() {
    
    const { isLoggedIn, setIsLoggedIn, user, setUser } = useLoginContext();
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const { total_item } = useCartContext();

    const hideNavbar = () => {
        setClicked(false);
    }

    // console.log("Is Logged In:", isLoggedIn);


    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    };

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <nav>
                <NavLink to="/" onClick={hideNavbar}>
                    <img className="logo" src="./images/logo1.png" alt="logo" /></NavLink>
                <div>
                    <ul id="navbar1" className={clicked ? "navbar1 active" : "navbar1"}>
                        <li><NavLink exact to="/" onClick={hideNavbar} activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" onClick={hideNavbar}  activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/products" onClick={hideNavbar} activeClassName="active">Products</NavLink></li>
                        <li><NavLink to="/contact" onClick={hideNavbar} activeClassName="active">Contact</NavLink></li>
                        <li>
                            <div className="name">

                            {isLoggedIn && user && (
                                <div>
                                    <FaUserAlt className="user-icon"/>
                                    {user.Fname} {user.Lname}
                                </div>
                            )}
                            </div>

                            <div className="buttn">

                                {isLoggedIn ? (
                                    // Show Logout when user is logged in
                                    <button className="loginBtn" onClick={handleLogout}>Logout</button>
                                ) : (
                                    // Show Login when user is not logged in
                                    <NavLink to="/login" onClick={hideNavbar} activeClassName="active">
                                        <LoginButton onClick={hideNavbar} className="normalBtn">Login</LoginButton>
                                    </NavLink>
                                )}
                            </div>
                        </li>
                        <li>
                            <NavLink to="/cart" onClick={hideNavbar} className="navbar-link cart-trolley--link">
                                <FiShoppingCart className="cart-trolley" />
                                <span className="cart-total--item"> {total_item} </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
