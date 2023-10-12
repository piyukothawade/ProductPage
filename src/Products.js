import React, { useState } from "react";
import styled from "styled-components";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";
import { useFilterContext } from "./Context/FilterContext";

const Products = () => {
  const { filter_products } = useFilterContext();
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters
  
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* Toggle Button */}
        <button className="toggle-filters" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filter Section */}
        <div className={`filter-section ${showFilters ? 'show' : ''}`}>
          <FilterSection/>
        </div>

        {/* Products Section */}
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort/>
          </div>
          <div className="main-product">
            <ProductList/>
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
    background-color: #333;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .filter-section {
    display: block; // Displayed on larger screens
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
