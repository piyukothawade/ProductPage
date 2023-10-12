import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from "./Button";


const HeroSection = () => {
  return <Wrapper>
    <div className="container1">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <h1 className="intro-data">Best Seller</h1>
          <p>Take Care of Your Skin, <br></br> Take Care of your <span>Beauty! </span></p>
          <NavLink to="/products">
            <Button>Shop Now</Button>
          </NavLink>
        </div>

    <div className="hero-section-image">
    <figure>
      <img src="images/makeup7.jpg" alt=" Makeup Product" className="hero-style"/>
      <img src="images/makeup3.jpg" alt=" Makeup Product" className="hero-style"/>
    </figure>

    </div> 
     </div>

    </div>
  </Wrapper>
};

const Wrapper = styled.section`
  

  img{
    min-width: 10rem;
    height: 17rem;
    padding: 10px;
    border: 1px solid white;
    
  }

  .hero-section-image{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
 
  .img-style{
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .grid{
      gap:10rem;
    }
  }




`


export default HeroSection
