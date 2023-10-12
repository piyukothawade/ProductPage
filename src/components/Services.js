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
            <div className="grid grid-three-column">
                <div className="services-1">
                    <div>
                        <TbTruckDelivery className="icon"/>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>

                <div className="services-2">
                    <div className="services-column-2">
                        <div>
                            <MdSecurity className="icon"/>
                            <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className="services-column-2">
                        <div>
                            <GiReceiveMoney className="icon"/>
                            <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                </div>
                <div className="services-3">
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

padding: 10rem 0;

.grid{
    gap: 4.8rem;
    display: flex;
    flex-wrap: wrap;
}

.services-1,
.services-2,
.services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #F5F5F5;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.services-2{
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2{
        background-color: #F5F5F5;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0, 0.05) 0px 1px 2px 0px;

    }   

    }

}

div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align_items: center;
    gap: 1rem;

}

h3{
    margin-top: 1.4rem;
    font-size: 2rem;
}

.icon{
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
}
@media (max-width: 768px) {
    padding: 5rem 1rem;

    .services-1,
    .services-2,
    .services-3 {
      height: auto;
      padding: 2rem;
    }

    .services-2 .services-column-2 {
      width: 100%;
      margin-bottom: 2rem;
    }

    .icon {
      width: 6rem;
      height: 6rem;
    }
    
    h3 {
      font-size: 1.6rem;
    }
  }
`;



export default Services
