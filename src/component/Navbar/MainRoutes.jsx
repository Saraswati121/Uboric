<<<<<<< Updated upstream
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from "../Pages/Category"
import Coustomer from "../Pages/Coustomer"
import Merchant from "../Pages/Merchant"
import Seller from "../Pages/Seller"



import Baneer from "./Baneer";
 import Footer from '../footer/Footer';
import Navbar from './Navbar';
import {Home} from '../HomePage/Home'
 import FooterAbove from '../footer/FooterAbove'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Terms from '../Pages/Terms'
import Privecy from '../Pages/Privecy'
import Shipping from '../Pages/Shipping'



=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Coustomer from "../Pages/Coustomer";
import Merchant from "../Pages/Merchant";
import Seller from "../Pages/Seller";

import Baneer from "./Baneer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FooterAbove from "./FooterAbove";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Terms from "../Pages/Terms";
import Privecy from "../Pages/Privecy";
import Shipping from "../Pages/Shipping";
>>>>>>> Stashed changes

const MainRoutes = () => {
  return (
    <div>
<<<<<<< Updated upstream
        <Baneer/>
      <Navbar/>
      <Home/>
        <Routes>
          <Route path='http://localhost:3000/' element={<Home/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path='coustomer' element={<Coustomer/>}/>
          <Route path='merchant' element={<Merchant/>}/>
          <Route path='seller' element={<Seller/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='terms' element={<Terms/>}/>
          <Route path='privecy' element={<Privecy/>}/>
          <Route path='shipping' element={<Shipping/>}/>
        </Routes>

        <FooterAbove/>
      <Footer/>
=======
      <Baneer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="coustomer" element={<Coustomer />} />
        <Route path="merchant" element={<Merchant />} />
        <Route path="seller" element={<Seller />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privecy" element={<Privecy />} />
        <Route path="shipping" element={<Shipping />} />
      </Routes>

      <FooterAbove />
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
};

export default MainRoutes;
