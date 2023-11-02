import React, { useState } from "react";
import "./NavbarStyles.css";
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import LoginButton from "./LoginButton";
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';



function Navbar() {
    
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const hideNavbar = () => {
        setClicked(false);
    }


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

                            <div className="buttn">
                                    <NavLink to="/login" onClick={hideNavbar} activeClassName="active">
                                        <LoginButton onClick={hideNavbar} className="normalBtn">Login</LoginButton>
                                    </NavLink>
                                
                            </div>
                        </li>
                        <li>
                            <NavLink to="/cart" onClick={hideNavbar} className="navbar-link cart-trolley--link">
                                <FiShoppingCart className="cart-trolley" />
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
