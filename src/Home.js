import React from 'react';
import styled from 'styled-components';
import HeroSection from "./components/HeroSection";
import Trusted from './components/Trusted';
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";


const Home = () => {
  return <>
  <HeroSection/>
  <FeaturedProducts/>
  <Services/>
  <Trusted/>
  
  </>
  
};  


export default Home
