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

    console.log("Is Logged In:", isLoggedIn);


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
                <NavLink to="/"><img className="logo" src="./images/logo1.png" alt="logo" /></NavLink>
                <div>
                    <ul id="navbar1" className={clicked ? "navbar1 active" : "navbar1"}>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                        <li>

                            {isLoggedIn && user && (
                                <div>
                                    <FaUserAlt className="user-icon"/>
                                    {user.Fname} {user.Lname}
                                </div>
                            )}

                            {isLoggedIn ? (
                                // Show Logout when user is logged in
                                <button className="loginBtn" onClick={handleLogout}>Logout</button>
                            ) : (
                                // Show Login when user is not logged in
                                <NavLink to="/login" activeClassName="active">
                                    <LoginButton className="normalBtn">Login</LoginButton>
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <NavLink to="/cart" className="navbar-link cart-trolley--link">
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
