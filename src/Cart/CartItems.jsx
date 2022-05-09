import React from "react";
import { Grid } from "../category/style/mens.styled";
import { Buttons, Image, Subutton } from "./cart.styled";

const CartItems = ({ elem, handlebtn, handleDelet }) => {
  //   console.log(elem.id);
  return (
    <Grid style={{ border: "1px solid gray", margin: "10px" }}>
      <div>
        <Image src={elem.img} />
      </div>
      <div>
        <div>
          Product-Name:{" "}
          <span style={{ fontSize: "20px", textTransform: "capitalize" }}>
            {elem.title}
          </span>
        </div>
        <div style={{ margin: "5px" }}>
          Price:
          <span style={{ textDecoration: "line-through" }}>
            {" "}
            ₹ {elem.breakPrice}
          </span>
          <span>
            <span style={{ color: "green", fontSize: "20px" }}> ₹</span>{" "}
            {elem.price}
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          Item: <Subutton onClick={() => handlebtn(-1, elem)}>-</Subutton>
          <span>{elem.items}</span>
          <Subutton onClick={() => handlebtn(1, elem)}>+</Subutton>
        </div>
        <div style={{ height: "20px" }}>
          <Buttons onClick={() => handleDelet(elem.id)}>Remove</Buttons>
        </div>
      </div>
    </Grid>
  );
};

export default CartItems;
