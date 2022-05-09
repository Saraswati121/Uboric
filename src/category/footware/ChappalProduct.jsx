import React, { useState, useEffect } from "react";
import { Data } from "../Api/data";
import Datamap from "./Datamap";
import { Product, Flex } from "./styled";
import Productcatagory from "./Productcatagory";
import Nodata from "./Nodata";
const ChappalProduct = () => {
  let [data, setElem] = useState([]);
  const filterdata = (data) => {
    let datas = Data.filter((ele) => ele.price < data);
    // console.log(datas);
    setElem(datas);
  };
  useEffect(() => {
    setElem(Data);
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
        Slipper
      </h1>
      <Flex>
        <div>
          <Productcatagory filterdata={filterdata} />
        </div>
        {data.length ? (
          <Product>
            {data.map((data) => (
              <Datamap data={data} />
            ))}
          </Product>
        ) : (
          <Nodata />
        )}
      </Flex>
    </>
  );
};

export default ChappalProduct;
