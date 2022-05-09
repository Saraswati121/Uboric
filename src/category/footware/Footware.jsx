import React from "react";
import "./style.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import ChappalProduct from "./ChappalProduct";
import SneakerProduct from "./SneakerProduct";
const Footware = () => {
  let nevigate = useNavigate();
  return (
    <>
      <div className="footware">
        <div onClick={() => nevigate("/chappal")}>
          <img
            src="https://www.uboric.com/wp-content/uploads/2019/12/fe4618c043ad5d860331149ed80888ef_result-400x400.jpg"
            alt=""
          />
          <h2 style={{ color: "darkgreen", letterSpacing: "5px" }}>
            Casual Chappal/Slipper
          </h2>
        </div>
        <div onClick={() => nevigate("/sneaker")}>
          <img
            src="https://www.uboric.com/wp-content/uploads/2019/12/5ca7752dd0d34782f3b46e5c94cc0f3b_result-400x400.jpg"
            alt=""
          />
          <h2 style={{ color: "darkgreen", letterSpacing: "5px" }}>Sneaker</h2>
        </div>
        <div onClick={() => nevigate("/sneaker")}>
          <img
            src="https://www.uboric.com/wp-content/uploads/2019/12/1de99999291951b1f3799b8a82464aa3_result-400x400.jpg"
            alt=""
          />
          <h2 style={{ color: "darkgreen", letterSpacing: "5px" }}>
            Partyshoes
          </h2>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/chappal" element={<ChappalProduct />} />
          <Route path="/sneaker" element={<SneakerProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default Footware;
