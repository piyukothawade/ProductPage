import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./SignUp.css";
import SignImg from './SignImg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../Context/LoginContext';

const SignUp = () => {

    const [inpVal, setInpVal] = useState({
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
        date: "",
        password: "",

    })

    const [data, setData] = useState([]);

    console.log(inpVal);

    const getdata = (e) => {
        // console.log(e.target.value);

        const {value, name} = e.target;
        //console.log(value, name);

        setInpVal(() => {
            return {
                ...inpVal,
                [name]:value

            }
        })
    }

    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn, setUser } = useLoginContext();

    const addData = (e) => {
        e.preventDefault();
        const { Fname,Lname,email,phone,date,password} = inpVal;

        if (Fname === ""){
            alert("First Name field is required")
        } else if(Lname === ""){
            alert("Last Name field is required")
        } else if(email === ""){
            alert("Email field is required")
        } else if(!email.includes("@")){
            alert("Please enter a valid email address")
        } else if(phone === ""){
            alert("Phone number is required")
        } else if(phone.length !== 10){
            alert("Please Enter a valid phone number")
        } else if(date === ""){
            alert("Date field is required")
        } else if(password === ""){
            alert("Password field is required")
        }else if(password.length < 5){
            alert("Password should be greater than 5 characters")
        }else{
            console.log("Data added succesfully")

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        
            // Check if user already exists based on email
            const userExists = existingUsers.some(user => user.email === email);
            if (userExists) {
                alert("User with this email already exists!");
                return;
            }
            
            // Add the new user to the list of existing users
            existingUsers.push(inpVal);
            
            // Save updated user list to local storage
            localStorage.setItem("users", JSON.stringify(existingUsers));

            setUser(inpVal);
            setIsLoggedIn(true);
            navigate('/');
        }
    }

  return (
    <div className='signup-container'>
        <section >
            <div className='left_data col-lg-6'>
                <h3 className='heading'>Sign Up</h3>
                <Form>
                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" name="Fname" onChange={getdata} placeholder="Fname" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" name="Lname" onChange={getdata} placeholder="Lname" required />
                    </Form.Group>
                    

                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="tel" name="phone" onChange={getdata} placeholder="Enter Phone number" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control onChange={getdata} name="date" type="date" required/>
                    </Form.Group>


                    <Form.Group className="mb-3 col-lg-6 inp" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" required/>
                    </Form.Group>
                    
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <div className='submit-div'>
                        <button className="normalBtn col-lg-6" onClick={addData} variant="primary" type="submit" required>
                            Sign Up
                        </button>
                    </div>     

                </Form>
                <p className='mt-3 aldredy-user'>Aldredy Have an Account?  <span> <NavLink to="/Login"> Sign In </NavLink> </span></p>
  
            </div>
            <SignImg/>
            
        </section>

      
    </div>
  )
}

export default SignUp
