import React, { useState, useEffect } from "react";
import { Sneaker } from "../footware/data/data";
import Sneakermap from "./Sneakermap";
import { Product, Product1, Flex } from "./styled";
import Productcatagory from "./Productcatagory";
import Nodata from "./Nodata";
const SneakerProduct = () => {
  let [data, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Sneaker.filter((ele) => ele.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Sneaker);
  }, []);
  console.log(data);
  return (
    <>
      <hr />
      <h1
        style={{
          color: "green",
          textDecoration: "underline",
          fontFamily: "sans-serif",
          letterSpacing: "5px",
        }}
      >
        Sneaker
      </h1>
      <Flex>
        <div>
          <Productcatagory filterdata={filterdata} />
        </div>
        {data.length ? (
          <Product>
            {data.map((data) => (
              <Sneakermap data={data} />
            ))}
          </Product>
        ) : (
          <Nodata />
        )}
      </Flex>
    </>
  );
};

export default SneakerProduct;
