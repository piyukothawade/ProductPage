import React from 'react'
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const AddToCart = ({ product, showControls = true }) => {
    const { AddToCart } = useCartContext();
    
    const { product_id, available_units } = product;

    const[amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < available_units ? setAmount(amount + 1) : setAmount(available_units);
    };
    
  return (
    <Wrapper>
    {showControls && (
        <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />
    )}
    
    <NavLink to="/cart" onClick={() => AddToCart(product_id, amount, product)}>
        <button className="normalBtn">
            Add to Cart
        </button>
    </NavLink>
</Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    padding-left: 10px;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 5px;
    }
    

    .amount-style {
      font-size: 2.4rem;
      color: #4682A9;
    }
  }
`;

export default AddToCart
