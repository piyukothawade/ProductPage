import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const Product = (curElem) => {
    const { product_id, name, price, category, image} = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleProduct/${product_id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name}/>
                <figcaption className="caption">{category}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    
                    <p className="card-data--price">{<FormatPrice price={price} /> }</p>
                    
                </div>
                <div className='btnn'>
                <AddToCart product={curElem} showControls={false} />
                </div>
                
               
            </div>

        </div>

    </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 100%;
    .btnn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
    }
    img {
        width: 400px;
        height: 400px;
    }

    .card figure img {
        @media (max-width: 768px) {
            width: 100%;
            height: 300px;
        }
    }

`;

export default Product
