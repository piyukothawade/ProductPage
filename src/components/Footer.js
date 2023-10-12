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
            <NavLink to="/contact">
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
            <div className="container grid grid-two-column">
                <p>@{new Date().getFullYear()} BeautyBliss. All Rights Reserved</p>
                <div>
                   <p>PRIVACY POLICY</p> 
                   <p>TERMS & CONDITIONS</p>
                </div>

            </div>
        </div>


    </footer>
   </Wrapper>
  )
};

const Wrapper = styled.section`
.iSIFGq {
    margin: 0;
}

.contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #F5F5F5;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child{
        justify-self: end;
        align-self: center;
    }
}

footer{
    padding: 14rem 10rem 9rem 10rem;
    background-color: #4682A9;
    h2{
        color: #EC53B0;
        font-family: 'Sawarabi Mincho', serif;
        margin-bottom: 2.4rem;
    }
    .p1{
        color: #fff;
        font-family: 'Sacramento', cursive;
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
                position: relative;
                cursor: pointer; 
            }
        }
    }

}

.footer-bottom--section{

    padding-top: 9rem;
    padding-left: 10rem;

    hr{
        margin-bottom: 2rem;
        color: #fff;
        height: 0.1px;
    }
    p{
        color: #fff;
    }
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    .contct-short{
        max-width: 80vw;
        margin: 4.8rem auto;
        transform: translateY(0%);
        text-align: center;

        .grid div: last-child{
            justify-self: center;
        }
    }

    footer{
        padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section{
        padding-top: 4.8rem;
    }
}

`;

export default Footer
