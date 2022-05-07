import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 4fr;
  gap: 10px;
  padding: 7px;
`;
export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-ttemplate-rows: auto;
  gap: 10px;
  justifycontent: space-between;
`;
export const H = styled.div`
  text-align: center;
  text-transform: upperCase;
  font-size: 18px;
  cursor: pointer;
`;
export const H1 = styled.h3`
  text-align: center;
  text-transform: upperCase;
  font-size: 25px;
  cursor: pointer;
  fontweight: 900;
  margin: 5px;
`;
export const Img = styled.img`
  width: 150px;
  height: 200px;
  cursor: pointer;
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: blue;
  padding: 10px;
  width: 130px;
  border-radius: 10px;
  background-color: pink;
  margin-bottom: 5px;
  &:hover {
    background-color: red;
    transition: all 0.3s;
    color: white;
    font-size: 19px;
    font-weight: 700;
  }
`;
export const P = styled.p`
  position: absolute;
  left: 5px;
  display: inline-block;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  textalign: center;
  padding: 5px;
  color: white;
`;
export const Element = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  position: relative;
  fontfamily: Lato, sans-serif;
  letter-spacing: 0.2px;
  color: rgb(61, 60, 60);
  padding: 10px;
`;
export const Price = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
`;
