import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Styled from "../Navbar/Style.module.css";
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
  height: 400px;
  background-color: black;
  color: white;
  width: 100%;
  border: 1px solid black;
`;
const FooterImg = styled.img`
  margin: auto;
`;

const FooterPara = styled.p`
color: #fff
font-weight:400
cursor:pointer;
`;
const Fotdiv = styled.div`
  border: 1px solid black;
  background-color: rgb(255, 206, 97);
  border-radius: 50%;
  padding: 14px;
  font-size: 18px;
  color: black;
`;

const Footer = () => {
  return (
    <FooterDiv style={{ padding: "0px" }}>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <FooterImg
          src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png"
          alt=""
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "white", refresh: "true" }}
        >
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            About Us
          </FooterPara>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Contact
          </FooterPara>
        </Link>
        <Link to="/shipping" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Shipping & Returns
          </FooterPara>
        </Link>
        <Link to="/account" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            My Account
          </FooterPara>
        </Link>
        <Link to="/privecy" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Privecy police
          </FooterPara>
        </Link>
        <Link to="/seller" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Become A Seller
          </FooterPara>
        </Link>
        <Link to="/terms" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Terms & Conditions
          </FooterPara>
        </Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <FooterPara>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</FooterPara>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <Fotdiv id={Styled.divho1}>
          <a
            href="https://www.facebook.com/Uboricllp/"
            style={{ color: "black", padding: "0px" }}
          >
            <FaFacebookF />
          </a>
        </Fotdiv>
        <Fotdiv id={Styled.divho1}>
          <a
            href="https://www.instagram.com/uboric_shoes/?igshid=1scv9g4eccoi5"
            style={{ color: "black" }}
          >
            <BsInstagram />
          </a>
        </Fotdiv>
      </div>
    </FooterDiv>
  );
};

export default Footer;
