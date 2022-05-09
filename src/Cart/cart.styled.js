import styled from "styled-components";

export const Image = styled.img`
  width: 150px;
`;
export const Buttons = styled.button`
  background-color: pink;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
    font-size: 18px;
  }
`;
export const Subutton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: red;
  font-weight: 800;
  background-color: white;
`;
export const Head = styled.div`
  font-size: 18px;
  margin: 0px;
`;
