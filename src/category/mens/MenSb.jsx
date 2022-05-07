import React, { useEffect, useState } from "react";
import { Product, H1, Grid } from "./mens.styled";
import { SB } from "../api/data";
import MentsItem from "./MentsItem";
import Productcatagory from "./navbar/Productcatagory";
const MenSb = () => {
  let [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = SB.filter((elem) => elem.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(SB);
  }, []);

  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>

      <div>
        <H1>Shirt&Boxer</H1>
        <Product>
          {elem.map((elem, ind) => (
            <MentsItem elem={elem} key={ind} />
          ))}
        </Product>
      </div>
    </Grid>
  );
};

export default MenSb;
