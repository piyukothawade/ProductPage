import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar"



const App = () => {
 
  const theme = {
    colors:{
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243, 0.5)",
      border:"",
      hr:"#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }

  };
  
  return (
    
    <ThemeProvider theme = {theme}>

        <Router>
        <GlobalStyle/>
        <Navbar />
    <Routes>
      
      <Route path = "/products" element={<Products/>} /> 
      <Route path = "/products" element={<Products/>} />
      <Route path = "/singleProduct/:id" element={<SingleProduct/>} />
      
    </Routes>
   
    </Router>
 
</ThemeProvider>
  
  );
};

export default App;
