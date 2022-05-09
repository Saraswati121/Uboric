import React from "react";
import { Img, H, Grid } from "./mens.styled";
// import {  useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import MenSb from "./MenSb";
import Shirt from "./Shirt";
import Tshirt from "./Tshirt";
import Trunks from "./Trunks";
import Productcatagory from "./navbar/Productcatagory";

const Mens = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid>
        <div style={{ margin: "auto", fontSize: "40px" }}>Mens Catagory➡️</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2021/11/CO-ORDS_BKT0030_uboric.jpg"
              alt="img"
              onClick={() => navigate("/mens/shirtboxer")}
            />
            <H onClick={() => navigate("/mens/shirtboxer")}>Shirt&Boxer</H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2021/11/30-Best-Charcoal-Grey-Suits-with-Black-Shoes-For-Men-400x533.jpg"
              alt="img"
              onClick={() => navigate("/mens/")}
            />
            <H onClick={() => navigate("/mens/")}>Shirts</H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2021/11/Cool-Beard-Styles-You-Should-Try.jpg"
              alt="img"
              onClick={() => navigate("/mens/tshirt")}
            />
            <H onClick={() => navigate("/mens/tshirt")}>T-Shirt</H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2022/02/61JWVokXDCL._UL1000_-400x400.jpg"
              alt="img"
              onClick={() => navigate("/mens/trunks")}
            />

            <H onClick={() => navigate("/mens/trunks")}>Trunk&Briefs</H>
          </div>
        </div>
      </Grid>
      <hr />

      <Routes>
        <Route path="/" element={<Shirt />} />
        <Route path="/shirtboxer" element={<MenSb />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/trunks" element={<Trunks />} />
      </Routes>
    </div>
  );
};

export default Mens;
