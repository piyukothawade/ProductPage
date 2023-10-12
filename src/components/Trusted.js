import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
  <Wrapper className="brand-section">
    <div className="container">
        <h3>Trusted by 1000+ Companies</h3>
        <div className="brand-section-slider">
            <div className="slide">
                <img src="./icons/lipstick.png" alt="icon"/>
            </div>
            <div className="slide">
                <img src="./icons/skin-care.png" alt=""/>
            </div>
            <div className="slide">
                <img src="./icons/makeup-brushes.png" alt=""/>
            </div>
            <div className="slide">
                <img src="./icons/lipstick.png" alt=""/>
            </div>
            <div className="slide">
                <img src="./icons/makeup.png" alt=""/>
            </div>
        </div>
    </div>

  </Wrapper>
  )
};

const Wrapper = styled.section `

padding: 5rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.brand-section{
    padding: 12rem 0 0 0;

}

h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
}

img {
    min-width: 10rem;
    height: 10rem;
}

.brand-section-slider{
    margin-top: 3.2rem;
    padding-left: 20rem;
    padding-right: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}



@media (max-width: ${({ theme }) => theme.media.mobile}){
    .brand-section-slider{
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
    }
}
`;

export default Trusted
