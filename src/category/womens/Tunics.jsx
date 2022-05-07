import React, { useState, useEffect } from "react";
import { Tunic } from "../../api/data";
import { Grid, H1, Product } from "../mens.styled";
import MentsItem from "../MentsItem";
import Productcatagory from "../navbar/Productcatagory";
const Tunics = () => {
  let [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Tunic.filter((elem) => elem.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Tunic);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>tunic</H1>
        <Product>
          {elem.map((elem, ind) => (
            <MentsItem elem={elem} key={ind} />
          ))}
        </Product>
      </div>
    </Grid>
  );
};

export default Tunics;
