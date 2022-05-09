import React from "react";
import { Routes, Route } from "react-router-dom";
// import ChappalProduct from "../../category/footware/ChappalProduct";
import Mens from "../../category/mens/Mens";
import Womens from "../../category/womens/Womens";
// import MainRoutes from "../Navbar/MainRoutes";
import Cart from "../../Cart/Cart";
import { Home } from "./Home";
import Seller from "../../Cart/Seller";
import Form from "../../signup/Form";
// import FootWarebody from "../../category/footware/FootWarebody";
import Footware from "../../category/footware/Footware";
import Checkout from "../../Cart/Checkout";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="casual" element={<ChappalProduct />} /> */}
        <Route path="/mens/*" element={<Mens />} />
        <Route path="/womens/*" element={<Womens />} />
        <Route path="/footware/*" element={<Footware />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/signUp" element={<Form />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Main;
