import styled from 'styled-components'
export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-ttemplate-rows: 300px;
  padding-bottom: 20px;
  gap: 20px;

  justifycontent: space-between;
  margin-top: 30px;
  font-family: sans-serif;
`
export const Product1 = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-left: 30px;
  position: relative;
  &:hover {
    transform: scale(1.05);
    transition: 0.25s;
  }
`
export const Imag = styled.img`
  height: 200px;
  width: 250px;
`
export const Button = styled.button`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: blue;
  padding: 10px;
  width: 160px;
  border-radius: 10px;
  background-color: pink;
  margin-bottom: 20px;
  letter-spacing: 2px;
  &:hover {
    background-color: red;
    transition: all 0.3s;
    color: white;
    font-size: 19px;
    font-weight: 700;
  }
`
export const Flex = styled.div`
  display: flex;
  margin-top: 100px;
`
export const P = styled.p`
  position: absolute;
  left: 5px;
  display: inline-block;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  textalign: center;
  padding: 5px;
  color: white;
  po
`
