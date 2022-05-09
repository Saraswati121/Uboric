import React from "react";
// import styled from 'styled-components'
import Styled from "./Style.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = () => {
  return (
    <div
      id={Styled.main}
      style={{ display: "flex", justifyContent: "center", gap: "30px" }}
    >
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        {/* <div onClick="window.location.reload();">Home</div> */}Home
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
        <div>
          MENS
          {/* <IoMdArrowDropdown style={{ marginBottom: "-5px" }} /> */}
        </div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
        {" "}
        <div>WOMENS</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/chappal">
        <div>Shoes</div>
      </Link>
      {/* <Link style={{ textDecoration: "none", color: "black" }} to="/merchant">
        <div>Merchant/Bulk Order</div>
      </Link> */}
      <Link style={{ textDecoration: "none", color: "black" }} to="/seller">
        <div>Become A Seller</div>
      </Link>
    </div>
  );
};

export default Menu;
