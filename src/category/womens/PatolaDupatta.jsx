import React, { useState, useEffect } from "react";
import { Patola } from "../../api/data";
import { Product, H1, Grid } from "../mens.styled";
import MentsItem from "../MentsItem";
import Productcatagory from "../navbar/Productcatagory";
const PatolaDupatta = () => {
  let [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Patola.filter((elem) => elem.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Patola);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>Patola, Dupatta & Saree</H1>
        <Product>
          {elem.map((elem, ind) => (
            <MentsItem elem={elem} key={ind} />
          ))}
        </Product>
      </div>
    </Grid>
  );
};

export default PatolaDupatta;
