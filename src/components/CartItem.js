import React from 'react';
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../Context/CartContext';


const CartItem = ({ product_id, name, image, price, amount }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();
    //const setDecrease = () => {
        //amount > 1 ? setAmount(amount - 1) : setAmount(1);
    //};
    //const setIncrease = () => {
        //amount < available_units ? setAmount(amount + 1) : setAmount(available_units);
    //};

  return (
    <div className='cart_heading grid grid-five-column'>
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={product_id}/>
                </figure>
            </div>
            <p>{name}</p>
        </div>

        <div className='cart-hide'>
            <p><FormatPrice price={price} /> </p>
        </div>

        <CartAmountToggle

        amount={amount}
        setDecrease = { () => setDecrease(product_id)}
        setIncrease = { () => setIncrease(product_id)}
        />

        <div className='cart-hide'>
            <p>
                <FormatPrice price={price * amount}/>
                </p>
        </div>

        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(product_id)}/>
        </div>

      
    </div>
  );
};

export default CartItem;
