import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import "./cart.css";
import CartItems from "./CartItems";
import { Grid } from "../mens.styled";
const Cart = () => {
  const [elem, setElem] = useState([]);
  const [count, setCount] = useState(0);
  const [prices, setPrices] = useState(0);
  const handlebtn = (el, els) => {
    // console.log(els);
    fetch(`http://localhost:8080/CardItem/${els.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        ...els,
        items: count,
      }),
    });

    setCount(count + el);
    fettchs();
  };
  console.log(count);
  const handleDelet = (id) => {
    fetch(`http://localhost:8080/CardItem/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    fettchs();
  };

  function fettchs() {
    fetch("http://localhost:8080/CardItem")
      .then((res) => res.json())
      .then((d) => setElem(d));
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
      let total = elem[i].price * elem[i].items;
      sum = sum + total;
    }
    setPrices(sum);
  }
  useEffect(() => {
    fettchs();
  }, []);
  //   console.log()
  return (
    <Grid>
      <div className="grids">
        <div className="cart">
          <div className="intro">
            <h1>Cart products</h1>
            <h4>
              <a href="#">Home</a>----- Cart
            </h4>
          </div>
          <button className="offer">Amazing Offers on Checkout</button>

          <div className="fetchdata">
            <div className="left">
              <div className="data">
                {/* <img></img> */}
                <h4>Product</h4>
                <h4>Price:{prices}</h4>
                <h4>Quantity:{elem.length}</h4>
                <h4>Subtotal</h4>
              </div>
              <button>UPGRADE CART</button>
            </div>
            <div className="right">
              <h2>Cart Totals</h2>
              <h3>
                Total: <span style={{ color: "green" }}>{prices}</span>{" "}
              </h3>
              <button>Proceed To Checkout - </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {elem.map((elm) => (
          <CartItems
            elem={elm}
            key={elm.id}
            handlebtn={handlebtn}
            handleDelet={handleDelet}
          />
        ))}
      </div>
    </Grid>
  );
};

export default Cart;
