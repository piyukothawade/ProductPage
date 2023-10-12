import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart.js";
import ErrorPage  from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import CustomButton from "./components/CustomButton";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import Forgot from "./components/Forgot";
import Checkout from "./components/Checkout";
import { LoginProvider } from "./Context/LoginContext";



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
  // function App() {
  //   const handleButtonClick = () => {
  //       alert('Login logic here');
  //   };

  //   return (
  //       <div>
  //           {/* You can now customize the button text using the buttonText prop */}
  //           <CustomButton buttonText="Shop Now" onButtonClick={handleButtonClick} />
  //       </div>
  //   );
// }
  return (
    
    <ThemeProvider theme = {theme}>
      <LoginProvider>
        <Router>
        <GlobalStyle/>
        <Navbar />
    <Routes>
      
      <Route path = "/" element={<Home/>} />
      <Route path = "/about" element={<About/>} />
      <Route path = "/products" element={<Products/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path = "/singleProduct/:id" element={<SingleProduct/>} />
      <Route path = "/login" element={<Login/>} />
      <Route path = "/signup" element={<SignUp/>} />
      <Route path = "/forgot" element={<Forgot/>} />
      <Route path = "/cart" element={<Cart/>} />
      <Route path = "/buy" element={<Checkout/>} />
      <Route path = "*" element={<ErrorPage/>} />
      
    </Routes>
    <Footer/>
    </Router>
  </LoginProvider>
</ThemeProvider>
  
  );
};

export default App;
