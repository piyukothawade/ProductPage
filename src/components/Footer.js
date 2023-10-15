import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
   <Wrapper>
    <section className="contact-short">
        <div className="grid grid-two-column">
            <div>
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>   
            </div>
            <div>
            <NavLink to="/signUp">
            <button className="normalBtn">
                Get Started
            </button>
        </NavLink>
        </div>
        </div>
    </section>

    <footer>
        <div className="container grid grid-four-column">

        <div className="footer-about">
                <h2>Beauty Bliss</h2> 
                <p className="p1">Take Care of Your Skin, <br></br>
                Take Care of Your <span>Beauty!</span>
                </p>
            </div>

            <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                    <input type="email" placeholder="your e-mail"></input>
                    <button className="normalBtn">
                        Subscribe
                    </button>
                </form>

            </div>

            <div className="footer-social">
                <h3>follow us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className="icons"/>
                    </div>
                    <div>
                        <FaInstagram className="icons"/>
                    </div>
                    <div>
    
                        <FaYoutube className="icons"/>
                    </div>
                </div>
            </div>

            <div className="footer-contact">
                <h3>Call us</h3>
                <h3>+91 8080118660</h3>
            </div>
        </div>

        <div className="footer-bottom--section">

            <hr/>
            <div className="container grid grid-three-column">
                <p>@{new Date().getFullYear()} BeautyBliss. All Rights Reserved</p>
                <div>
                   <p>PRIVACY POLICY  </p> 
                </div>
                <div>
                    <p>TERMS & CONDITIONS </p>
                    </div>
                

            </div>
        </div>


    </footer>
   </Wrapper>
  )
};

const Wrapper = styled.section`


.contact-short{
    max-width: 40vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #F5F5F5;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};

    .grid div:last-child{
        justify-self: end;
        align-self: center;
    }
}

footer{
    padding: 10rem 0 5rem 0;
    background-color: #4682A9;
    h2{
        color: #EC53B0;
        font-family: 'Sawarabi Mincho', serif;
        margin-bottom: 2.4rem;
    }
    .p1{
        color: #fff;
       
    }
    span{
        color:#EC53B0;
        font-family: 'Sawarabi Mincho', serif;
    }

    h3{
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
    }

    p{
        color: ${({ theme }) => theme.colors.white};
    }
   
    

    .footer-social--icons{
        display: flex;
        gap: 2rem;

        div {
            padding: 1rem;
            border-radius:50%;
            border: 2px solid ${({ theme }) => theme.colors.white};

            .icons{
                color: #F5F5F5;
                font-size: 2.4rem;
                
                cursor: pointer; 
            }
        }
    }

}

.footer-bottom--section{

    padding-top: 2rem;
    padding-left: 0;

    hr{
        margin-bottom: 2rem;
        color: #fff;
        height: 0.1px;
        width: 100%;
    }

    p{
        color: #fff;
    }
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    .contact-short{
        max-width: 80vw;
        margin-top: 2rem;
        margin-bottom  auto;
        padding: 2rem 1rem;
        text-align: center;
        justify-content: center;

        .grid {
            display: flex;        // Overriding grid layout for mobile view
            flex-direction: column;
            align-items: center;  // Centers content horizontally
            justify-content: center; // Centers content vertically
        }

        h3 {
            font-size: 1.4rem;
        }
    }

    footer{
        padding: 5rem 1rem;
        text-align: center;
        h2{
            font-size: 3rem;
        }
        h3 {
            font-size: 1.7rem;
        }
        .p1, span, p {
            font-size: 1.6rem;
        }
        .footer-subscribe {
            display: flex;
            flex-direction: column;
            align-items: center;


        }
        

        .footer-social--icons{
            justify-content: center;

        }
    }

    .footer-bottom--section{
        padding-top: 1rem;
    }
}

`;

export default Footer
