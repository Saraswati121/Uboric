import React, { useEffect, useState } from "react";
import { Product, H1, Grid } from "../style/mens.styled";
import { Tshirts } from "../api/data";
import MentsItem from "../card/MentsItem";
import Productcatagory from "../card/Productcatagory";
import Nodata from "../card/Nodata";
const Tshirt = () => {
  const [elem, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Tshirts.filter((elm) => elm.price < data);
    console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Tshirts);
  }, []);
  return (
    <Grid>
      <div>
        <Productcatagory filterdata={filterdata} />
      </div>
      <div>
        <H1>T-shirt</H1>
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

export default Tshirt;
