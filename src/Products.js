
import React, { useState } from "react";
import styled from "styled-components";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";
import ProductData from "./components/ProductData";
import ProductList from "./components/ProductList"; // Import the ProductList component

const Products = () => {
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* Toggle Button */}
        <button
          className="toggle-filters"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filter Section */}
        <div className={`filter-section ${showFilters ? "show" : ""}`}>
          <FilterSection />
        </div>

        {/* Products Section */}
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList products={ProductData} /> {/* Pass ProductData to ProductList */}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  .toggle-filters {
    display: none;  // Hidden by default
    background-color: rgba(255, 255, 255, 0.7);  // Making it white with some transparency
    color: #333;  // Setting text color to dark
    padding: 10px 15px;  // Padding around the button
    width: auto;  // Adjust width based on content
    border: none;
    cursor: pointer;
    margin-top: 2rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);  // Adding a shadow to the button
    border-radius: 5px;  // Rounding the button corners for aesthetics
    transition: 0.3s ease;  // Smooth transition effect on hover

    &:hover {
        background-color: rgba(255, 255, 255, 0.85);  // Darken a bit on hover for effect
    }
}


  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }

    .toggle-filters {
      display: block;  // Show the button on smaller screens
    }

    .filter-section {
      display: none;  // Hide the filters by default on smaller screens
    }

    .filter-section.show {
      display: block;  // Display the filters when toggled
    }

    .main-product {
      width: 100%;
    }
  }
`;

export default Products;