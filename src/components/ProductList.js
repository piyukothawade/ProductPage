import React, { useState } from 'react';
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
import styled from 'styled-components';
import FilterSection from './FilterSection';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();


  return (
    <>
     

      {/* Products Display based on grid_view */}
      {grid_view ? <GridView products={filter_products} /> : <ListView products={filter_products} />}
    </>
  );
};



export default ProductList;
