import React, { useState, useEffect } from "react";

import { Product, H1, Grid } from "./mens.styled";
import { shirt } from "../api/data";
import MentsItem from "./MentsItem";
import Productcatagory from "./navbar/Productcatagory";
import Nodata from "./navbar/Nodata";

const Shirt = () => {
  const [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = shirt.filter((elm) => elm.price < data);
    console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(shirt);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>Shirt</H1>
        {elem.length ? (
          <Product style={{}}>
            {elem.map((elem, ind) => (
              <MentsItem elem={elem} key={ind} />
            ))}
          </Product>
        ) : (
          <Nodata />
        )}
      </div>
    </Grid>
  );
};

export default Shirt;
