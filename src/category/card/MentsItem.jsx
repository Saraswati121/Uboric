import React from "react";
import { v4 as uuid } from "uuid";
import { Button, P, Element, Price } from "./mens.styled";
const MentsItem = ({ elem }) => {
  let offers = elem.offer.split(""); //"[-,5,7,%]"
  offers.pop(); //"[-,5,7]"
  offers.shift(); //"[5,7]"
  offers = +offers.join(""); //57
  // console.log(offers);
  let breakPrice = Math.floor((elem.price * 100) / offers);
  // console.log(breakPrice);
  //add to cart function
  const handleCart = (item) => {
    const payload = {
      ...item,
      id: uuid(),
      breakPrice,
      items: 1,
    };
    fetch("http://localhost:8080/CardItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    alert(`your item price ${elem.price} added`);
  };
  // console.log(elem);
  return (
    <Element>
      <P>{elem.offer}</P>
      <img
        src={elem.img}
        alt="images"
        style={{ width: "100%", height: "250px" }}
      />
      <div
        style={{
          height: "50px",
          fontSize: "18px",
          fontWeight: "500",
          textTransform: "capitalize",
        }}
      >
        {elem.title}
      </div>
      <Price>
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹ {breakPrice}{" "}
        </span>
        <span style={{ color: "green" }}>₹ </span>
        {elem.price}
      </Price>
      <div style={{ height: "50px" }}>
        <Button onClick={() => handleCart(elem)}>Add To Cart</Button>
      </div>
    </Element>
  );
};

export default MentsItem;
