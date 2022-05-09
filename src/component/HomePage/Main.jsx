import React from "react";
import { Routes, Route } from "react-router-dom";
import ChappalProduct from "../../category/footware/ChappalProduct";
import Mens from "../../category/mens/Mens";
import Womens from "../../category/womens/Womens";
import MainRoutes from "../Navbar/MainRoutes";
import Cart from "../../Cart/Cart";
import { Home } from "./Home";
import Seller from "../../Cart/Seller";
import Form from "../../signup/Form";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="casual" element={<ChappalProduct />} /> */}
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/chappal" element={<ChappalProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/signUp" element={<Form />} />
      </Routes>
    </>
  );
};

export default Main;
