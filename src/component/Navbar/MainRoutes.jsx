import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../Pages/Category";
import Coustomer from "../Pages/Coustomer";
import Merchant from "../Pages/Merchant";
import Seller from "../Pages/Seller";

import Baneer from "./Baneer";
import Footer from "../footer/Footer";
import Navbar from "./Navbar";
<<<<<<< Updated upstream
import { Home } from "../HomePage/Home";
=======
import Home from "../HomePage/Home";
>>>>>>> Stashed changes
import FooterAbove from "../footer/FooterAbove";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Terms from "../Pages/Terms";
import Privecy from "../Pages/Privecy";
import Shipping from "../Pages/Shipping";
<<<<<<< Updated upstream
import ChappalProduct from "../../category/footware/ChappalProduct";
import Mens from "../../category/mens/Mens";
=======
>>>>>>> Stashed changes

const MainRoutes = () => {
  return (
    <div>
      <Baneer />
      <Navbar />
      {/* <Home/> */}
      <Routes>
<<<<<<< Updated upstream
        <Route path="/*" element={<Home />} />
        <Route path="/category" element={<Mens />} />
=======
        <Route path="http://localhost:3000/" element={<Home />} />
        <Route path="category" element={<Category />} />
>>>>>>> Stashed changes
        <Route path="coustomer" element={<Coustomer />} />
        <Route path="merchant" element={<Merchant />} />
        <Route path="seller" element={<Seller />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privecy" element={<Privecy />} />
        <Route path="shipping" element={<Shipping />} />
<<<<<<< Updated upstream
        <Route path="/casual" element={<ChappalProduct />} />
=======
>>>>>>> Stashed changes
      </Routes>
      <Home />
      <FooterAbove />
      <Footer />
    </div>
  );
};

export default MainRoutes;
