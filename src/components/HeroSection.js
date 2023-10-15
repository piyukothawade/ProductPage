import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from "./Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container1">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 className="intro-data">Welcome to <br/> Beauty Bliss</h1>
            <p>Take Care of Your Skin, <br /> Take Care of your <span>Beauty! </span></p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img src="images/makeup7.jpg" alt="Makeup Product" className="hero-style" />
              <img src="images/makeup3.jpg" alt="Makeup Product" className="hero-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    
  }
  .intro-data{
    font-size: 4rem;
  }

  .hero-style {
    flex: 1;
    max-width: 49%;
    height: 17rem; 
    border: 1px solid white;
    object-fit: cover; 
  }

  // For tablet devices
  @media (min-width: 768px) {
    .hero-style {
      max-width: 49%;
    }
  }

  // For desktop devices
  @media (min-width: 1024px) {
    .hero-style {
      max-width: 49%;
    }

  }

  // Your original media query for mobile
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 2rem;
    }
  }
`

export default HeroSection;
