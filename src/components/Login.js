import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SignImg from './SignImg';
import "./Login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../Context/LoginContext';

const Login = () => {
    const { setIsLoggedIn, setUser } = useLoginContext();
    const navigate = useNavigate();
    
    const [inpVal, setInpVal] = useState({
        email: "",
        password: "",
    });

    const getdata = (e) => {
        const {value, name} = e.target;
        setInpVal({
            ...inpVal,
            [name]:value
        });
    }

    const addData = (e) => {
        e.preventDefault();
        const { email, password } = inpVal;

        const storedUsers = localStorage.getItem("users");

        if (email === "") {
            alert("Email field is required");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address");
        } else if (password === "") {
            alert("Password field is required");
        } else {
            if (storedUsers) {
                const users = JSON.parse(storedUsers);
                const authenticatedUser = users.find(user => user.email === email && user.password === password);

                if (!authenticatedUser) {
                    alert("Invalid Details");
                } else {
                    console.log("User Logged In Successfully");
                    setIsLoggedIn(true);
                    setUser(authenticatedUser);
                    navigate('/');
                    
                }
            } else {
                alert("No users found. Please sign up.");
            }
        }
    };

    return (
        <>
            <div className='signup-container'>
                <section>
                    <div className='left_data col-lg-6'>
                        <h3 className='heading'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" required/>
                            </Form.Group>
                            
                            {/* <Form.Group className="mb-3 check-div" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>  */}

                            <div className='submit-div submit'>
                                <button className="normalBtn col-lg-6" onClick={addData} type="submit" required>
                                    Login
                                </button>
                            </div>     
                        </Form>
                        <p className='mt-3 forgot-password'>Forgot Password? <span> <NavLink to="/forgot">Click here</NavLink> </span></p>
                        <div className="line-with-text">
                            <span>New to BeautyBliss?</span>
                        </div>

                        <div className='btn-container'>
                            <NavLink to="/signup">
                                <button className='new-btn'>Create New Account</button>
                            </NavLink>
                        </div>
                    </div>
                    <SignImg/>
                </section>
            </div>
        </>
    );
}

export default Login;
