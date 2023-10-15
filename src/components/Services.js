import React from 'react'
import styled from 'styled-components';
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri"

const Services = () => {
  return (
    <Wrapper>
        <div className="container">
            <div >
                <div className="services-1">
                    <div>
                        <TbTruckDelivery className="icon"/>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>

                <div className="services-1">
                    <div>
                            <MdSecurity className="icon"/>
                            <h3>Non-contact Shipping</h3>
                    </div>
                </div>
                <div className="services-1">
                    <div>
                            <GiReceiveMoney className="icon"/>
                            <h3>Money-back Guaranteed</h3>
                    </div>
                </div>
                <div className="services-1">
                    <div>
                        <RiSecurePaymentLine className="icon"/>
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
  
};

const Wrapper = styled.section`

padding: 4rem 0;
background-color: #4F4557;

.grid{
    gap: 4.8rem;
    display: flex;
    flex-wrap: wrap;
}

.services-1 {
    width: auto;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align_items: center;
    padding: 2rem 0;
    gap: 2rem;
    

}

h3{
    margin-top: 2rem;
    margin-right: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

.icon{
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    margin: 0 auto;
}
@media (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin-top: 1.5rem;

    .services-1 {
      height: auto;
      padding: 1rem;
      
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align_items: center;
        gap: 2rem;
    
    }


    .icon {
      width: 6rem;
      height: 6rem;
      padding: 0.6rem;
    }
    
    h3{
        margin-top: 1rem;
        margin-right: 1rem;
        font-size: 1.6rem;
        font-weight: bold;
    }
    
  }
`;
export default Services