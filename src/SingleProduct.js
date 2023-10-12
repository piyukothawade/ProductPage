import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./Context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./components/Container";
import FormatPrice from "./Helpers/FormatPrice";
import {FiCheckSquare} from "react-icons/fi";
import {TbTruckDelivery} from "react-icons/tb";
import {TbReplace} from "react-icons/tb";
import {MdFaceRetouchingNatural} from "react-icons/md";
import Star from "./components/Star";

import AddToCart from "./components/AddToCart";

//const API = "https://localhost:44320/api/Product";
//const API = "http://localhost:5000/api/products";
const API = "https://restapi-production-acb3.up.railway.app/api/products";

const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px',
}

const SingleProduct = () => {
  const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
  //console.log("~ file: SingleProduct.js ~ line 10 ~ SingleProduct ~ singleProduct",
  //singleProduct
  //);
  const { id } = useParams();

  const {
    product_id,
    name,
    description,
    discount,
    available_units,
    size,
    color,
    weight,
    price, 
    category,
    image,
    reviews,
    rating,
    company,

  } = singleProduct;

  
  useEffect(() =>{
    getSingleProduct(`${API}/${id}`);

  }, []);

  if(isSingleLoading){
    return <div className="page_loading">Loading....</div>
  }

  return (
    <Wrapper>
      <PageNavigation title={category}/>
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_image">
            <img src={image} alt="Product Image" ></img>
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <Star rating={rating} reviews={reviews}/>
            
            <p className="product-data-price">MRP:
            <del>
              <FormatPrice price={price + 500}/>
            </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <p>color : <span>{color}</span></p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon"/>
                <p>10 Days Replacement</p>
              </div>
              
              <div className="product-warranty-data">
                <FiCheckSquare className="warranty-icon"/>
                <p>Best Quality</p>
                
              </div>
              <div className="product-warranty-data">
                <MdFaceRetouchingNatural className="warranty-icon"/>
                <p>No harm to skin</p>
                
              </div>
            </div>

            <div className="product-data-info">
                <p>Available: <span>{available_units > 0 ? "In Stock" : "Not Available"}</span></p>
                <p> ID : <span>{product_id}</span></p>
                <p> Company : <span>{company}</span></p>
              </div>
              <hr/>

              {available_units > 0 && <AddToCart product={singleProduct} />}

          </div>
        </div>
      </Container>
    </Wrapper>
  );

};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .grid {
    display: flex;  // Using flex instead of grid
    flex-direction: column;  // Stack the children vertically
    align-items: center;  // Center the children horizontally
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      padding-right: 170px;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product_image {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 150px;
    
  }
  img{
    height: 400px;
    width: 400px;
    
  }

  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    
  }
`;

export default SingleProduct;
