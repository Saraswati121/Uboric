import React, { useState } from "react";
import "./style.css";
const Productcatagory = ({ filterdata }) => {
  const [data, setData] = useState(1000);
  const handlechange = (e) => {
    // console.log(e.target.value);
    setData(e.target.value);
    filterdata(data);
  };
  return (
    <>
      <h2 style={{ letterSpacing: "5px" }}>By Prize</h2>
      <div
        style={{
          height: "50px",
          width: "200px",
          marginLeft: "40px",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          borderRadius: "10px",
        }}
      >
        <label htmlFor="">
          0
          <input
            style={{ marginTop: "20px", fontSize: "20px" }}
            type="range"
            min="500"
            max="2000"
            step="10"
            name="sortbyprice"
            onChange={handlechange}
          />
          50k
        </label>
      </div>
      <h2
        style={{
          textAlign: "start",
          marginLeft: "20px",
          fontFamily: "sans-serif",
        }}
      >
        Product Category
      </h2>
      <div className="productcatagory">
        <form action="">
          <label htmlFor="">
            <input type="checkbox" name="trimmer" className="input" />
            trimmer
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="mensfootware" />
            Mens Footware
          </label>
          <br />
          <label htmlFor="" style={{}}>
            <input type="checkbox" name="chappal" />
            Casual Chappal
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="casualshoes" />
            Casual shoes
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="casualsandal" />
            Casual Sandal
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="partyshoes" />
            Party shoes
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="slipper" />
            Slipper
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="flipflop" />
            Flip Flop
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="loafer" />
            Loafer
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="mjdi" />
            Mojdi
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="sneaker" />
            Sneaker
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="socks" />
            Socks
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="sandal" />
            Sport Sandal
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="sportshoes" />
            Sport Shoes
          </label>
        </form>
      </div>
      <br />
      <span></span>
      <h2 style={{ textAlign: "start", marginLeft: "20px" }}>By Size</h2>
      <div className="productcatagory">
        <form action="">
          <label htmlFor="">
            <input type="checkbox" name="s" />S
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="xl" />
            XL
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="l" />L
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="m" />M
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="xxl" />
            XXL
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="1" />1
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="2" />2
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="4" />4
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="12" />
            12
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="36" />
            36
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="40" />
            40
          </label>
        </form>
      </div>
      <br />
      <h2 style={{ textAlign: "start", marginLeft: "20px" }}>By Color</h2>
      <div className="productcatagory">
        <form action="">
          <label htmlFor="">
            <input type="checkbox" name="beige" />
            BEIGE
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="black" />
            BLACK
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="blackblue" />
            BLACK/BLUE
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="blackwhite" />
            BLACK/WHITE
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="bluegrey" />
            BLUE/GREY
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="brown" />
            BROWN
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="camel" />
            CAMEL
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="chery" />
            CHERY
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="etan" />
            ETAN
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="rust" />
            RUST
          </label>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="tan" />
            TAN
          </label>
        </form>
      </div>
    </>
  );
};

export default Productcatagory;
