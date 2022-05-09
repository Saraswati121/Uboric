import React from "react";
import { Grid, H, Img } from "../style/mens.styled";
// import {  useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import KurtiLahanga from "./KurtiLahanga";

import Tunics from "./Tunics";
import PatolaDupatta from "./PatolaDupatta";
import FabricElegent from "./FabricElegent";
import Navbar from "../../component/Navbar/Navbar";

const Mens = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Grid>
        <div style={{ margin: "auto", fontSize: "35px" }}>
          Womens Category➡️
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2021/04/new-style-muslin-kurti-pattern-5937-e1618666507311-400x479.jpg"
              alt="img"
              onClick={() => navigate("/womens/")}
            />
            <H onClick={() => navigate("/womens/")}>
              Kurti set & <br /> lehenga set
            </H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2021/08/sr25460.jpg"
              alt="img"
              onClick={() => navigate("/womens/patola")}
            />
            <H onClick={() => navigate("/womens/patola")}>
              Patola, Dupatta <br />& Saree
            </H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2022/01/UBO-400x533.jpg"
              alt="img"
              onClick={() => navigate("/womens/tunics")}
            />
            <H onClick={() => navigate("/womens/tunics")}>TUNICS</H>
          </div>
          <div>
            <Img
              src="https://www.uboric.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-25-at-4.45.00-PM-1-400x500.jpeg"
              alt="img"
              onClick={() => navigate("/womens/febric")}
            />

            <H onClick={() => navigate("/womens/febric")}>
              Vraj Elegant <br />
              Fabrics
            </H>
          </div>
        </div>
      </Grid>
      <hr />

      <Routes>
        <Route path="/" element={<KurtiLahanga />} />
        <Route path="/tunics" element={<Tunics />} />
        <Route path="/patola" element={<PatolaDupatta />} />
        <Route path="/febric" element={<FabricElegent />} />
      </Routes>
    </div>
  );
};

export default Mens;
