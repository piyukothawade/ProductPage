import React, { useState } from 'react';
import SignImg from './SignImg';
import Form from 'react-bootstrap/Form';
import "./Forgot.css";

const Forgot = () => {
    const [inpVal, setInpVal] = useState({ email: "", newPassword: "" });
    const [userExists, setUserExists] = useState(false);
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpVal({
            ...inpVal,
            [name]: value
        });
    }

    const checkUser = (e) => {
        e.preventDefault();
        const { email } = inpVal;
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const user = users.find(user => user.email === email);
            if (user) {
                setUserExists(true);
            } else {
                alert("No user found with this email.");
            }
        }
    };

    const resetPassword = (e) => {
        e.preventDefault();
        const { email, newPassword } = inpVal;
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const userIndex = users.findIndex(user => user.email === email);
            if (userIndex !== -1) {
                users[userIndex].password = newPassword; // Updating password
                localStorage.setItem("users", JSON.stringify(users));
                setIsResetSuccessful(true);
            }
        }
    }

    return (
        <div className='forgot-container'>
            <section>
                <h3 className='heading'>Forgot Password</h3>
                <Form>
                    {!userExists ? (
                        <>
                            <Form.Group className="mb-3 col-lg-4 inpt" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" required />
                            </Form.Group>
                            <div className='submit-div2 inpt'>
                                <button className="normalBtn col-lg-6" onClick={checkUser} type="button">
                                    Submit
                                </button>
                            </div>
                        </>
                    ) : !isResetSuccessful ? (
                        <>
                            <Form.Group className="mb-3 col-lg-4 inpt" controlId="formBasicPassword">
                                <Form.Control type="password" name="newPassword" onChange={getdata} placeholder="Enter New Password" required />
                            </Form.Group>
                            <div className='submit-div2 inpt'>
                                <button className="normalBtn col-lg-6" onClick={resetPassword} type="button">
                                    Reset Password
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Password reset successful! Please <a href="/login">login</a>.</p>
                    )}
                </Form>
                <SignImg />
            </section>
        </div>
    );
}

export default Forgot;



