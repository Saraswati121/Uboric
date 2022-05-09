import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const initData = {
  firstName: "",
  lastName: "",
  companyName: "",
  contry: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  county: false,
  zip: "",
  phone: "",
  email: "",
};

const Checkout = () => {
  const navigate = useNavigate();
  const [fdata, setData] = useState(initData);
  const handleChange = (e) => {
    console.log("change");
    let { name, value } = e.target;
    setData({ ...fdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    alert("Order will be placed Soon");
    try {
      console.log(e);
      let res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(fdata),
      });
    } catch (err) {
      console.log(err);
    }

    navigate("/");
  };
  return (
    <div className="checkout">
      <div className="intro">
        <h1>Checkout</h1>
        <h4>
          <span onClick={() => navigate("/")}>Home</span>----- Checkout{" "}
        </h4>
        <div className="coupon">
          <p>
            Have a Coupon ? <a href="">Click Here to enter your code</a>
          </p>
        </div>
      </div>
      <div className="payment">
        <form onSubmit={handleSubmit}>
          <h2>Billing details</h2>
          <label> FIRST NAME</label>
          <input
            name="firstName"
            type="text"
            id="small"
            value={fdata.firstName}
            onChange={handleChange}
            required
          />
          <label>LAST NAME</label>
          <input
            name="lastName"
            value={fdata.lastName}
            type="text"
            id="small"
            onChange={handleChange}
            required
          />
          <br />
          <label>COMPANY NAME(OPTIONAL)</label>
          <input
            name="companyName"
            value={fdata.companyName}
            type="text"
            id="long"
            onChange={handleChange}
            required
          />
          <br />
          <label>COUNTRY / REGION</label>
          <input
            name="country"
            value={fdata.country}
            type="text"
            id="small"
            onChange={handleChange}
            required
          />
          <br />
          <label>ADDRESS</label>
          <input
            name="address"
            value={fdata.address}
            type="text"
            id="small"
            onChange={handleChange}
            required
          />
          <br />
          <label>TOWN / CITY</label>
          <input
            name="city"
            value={fdata.city}
            type="text"
            id="small"
            onChange={handleChange}
            required
          />
          <label>STATE / COUNTY *</label>
          <input
            name="city"
            value={fdata.city}
            type="text"
            id="small"
            onChange={handleChange}
            required
          />
          <br />
          <label>POSTCODE / ZIP</label>
          <input
            name="zip"
            checked={fdata.zip}
            type="text"
            id="small"
            onChange={handleChange}
          />
          <label>PHONE</label>
          <input
            name="Number"
            checked={fdata.phone}
            type="number"
            id="small"
            onChange={handleChange}
          />
          <br />
          <label>ALTERNATE PHONE</label>
          <input
            name="Number"
            value={fdata.aphone}
            type="number"
            id="small"
            onChange={handleChange}
            required
          />
          <label>EMAIL ADDRESS</label>
          <input
            name="email"
            value={fdata.email}
            type="email"
            id="small"
            onChange={handleChange}
            required
          />
          <br />
          <h2>Additional information</h2>
          <label>Order notes (optional)</label>
          <textarea rows="6" cols="95"></textarea>
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
