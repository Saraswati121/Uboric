import React, { useState, useEffect } from "react";
import { Fabric } from "../../api/data";
import { Product, H1, Grid } from "../mens.styled";
import MentsItem from "../MentsItem";
import Productcatagory from "../navbar/Productcatagory";
const FabricElegent = () => {
  let [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Fabric.filter((elem) => elem.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Fabric);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>Vraj Elegant Fabrics</H1>
        <Product>
          {elem.map((elem, ind) => (
            <MentsItem elem={elem} key={ind} />
          ))}
        </Product>
      </div>
    </Grid>
  );
};

export default FabricElegent;
