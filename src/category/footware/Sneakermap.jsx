import React from "react";
import { Product1, Imag, Button, P } from "./styled";

const Sneakermap = ({ data }) => {
  return (
    <>
      <Product1>
        <div>
          <P>{data.offer}</P>
          <Imag src={data.img} alt="" />
          <h4 style={{ fontSize: "16px", color: "grey" }}>{data.title}</h4>
          <h5 style={{ color: "green" }}>Rs:{data.price}</h5>
          <Button>Add to Cart</Button>
        </div>
      </Product1>
    </>
  );
};

export default Sneakermap;
