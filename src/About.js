import React from 'react';
import {useProductContext} from "./Context/ProductContext";
import styled from 'styled-components';



const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Piyu Kothawade",
  };


  return (
    <Wrapper className='about-section'>
      <div className='container'>
        <h2>Our Story</h2>
        <h3>India's Most Trusted Beauty Destination</h3>
        <p>Since our launch, we have not only redefined the art of e-retailing beauty and personal care in India,
          but also have been instrumental in fostering the growth of a previously relatively nascent ecosystem.
          From bringing you domestic brands, international brands, luxury and prestige brands, premium brands, 
          niche and cult brands and expert advice and videos, coupled with our understanding of the needs and 
          preferences of the consumers,and On-Trend and Kiosk Stores, an ever growing online 
          community for beauty buffs, and a Beauty Helpline, we go out of our way to give you only the very best. 
          With 2400+, 100% authentic brands we offer a well curated comprehensive selection of makeup, skincare, 
          haircare, bath and body, fragrance, grooming appliances, personal care, and health and wellness categories.
         </p>
         <div className='grid grid-two-column'>
          <div className='card-1'>
            <h2>Our Vision</h2>
            <p>Bring inspiration and joy to people, everywhere, everyday.</p>
          </div>

          <div className='card-2'>
            <h2>Our Mision</h2>
            <p>To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit.</p>
          </div>
          

         </div>

       
    
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.section `

padding: 5rem 0;


.brand-section{
    padding: 12rem 0 0 0;

}

h2 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
   
   
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  text-decoration: underline;
  text-decoration-color: #EC53B0;
  text-decoration-weight: bolder;

}
p{
  text-align: center;
  padding: 30px;
  color: #7393B3;
}

.card-1,
.card-2 {
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-content: center;
    background-color: #F5F5F5;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    margin-bottom: 20px;
    
}

.card-3{
  
    margin-top: 30px;
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-content: center;
    background-color: #F5F5F5;
    text-align: center;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  

}

`;
export default About
