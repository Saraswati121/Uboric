import React from "react";
import "./style.css";
import { Product1, Imag, Button, P } from "./styled";
import { v4 as uuid } from "uuid";
const Datamap = ({ data }) => {
  const handleCart = async (data) => {
    const payload = {
      ...data,
      id: uuid(),
      price: data.price,
    };
    let res = await fetch("http://localhost:8080/Cartiteam", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    alert(`your item price ${data.price} added`);
  };
  return (
    <>
      <Product1>
        <div>
          <P>{data.offer}</P>
          <Imag src={data.img} alt="" />
          <h4 style={{ fontSize: "16px", letterSpacing: "1px" }}>
            {data.title}
          </h4>
          <h5
            style={{ fontSize: "16px", letterSpacing: ".5px", color: "green" }}
          >
            Rs:{data.price}
          </h5>
          <Button onClick={() => handleCart(data)}>Add to Cart</Button>
        </div>
      </Product1>
    </>
  );
};

export default Datamap;
