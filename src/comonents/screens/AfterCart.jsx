import React from 'react'
import styled from "styled-components";


const AfterCart = () => {
  return (
      <Conatiner>
          <CartCounterButton>-</CartCounterButton>
          <CartCount>1</CartCount>
          <CartCounterButton>+</CartCounterButton>
      </Conatiner>
  );
}

export default AfterCart;

const Conatiner = styled.div`
  display: flex;
  align-items: center
`;
const CartCounterButton = styled.button`
    background: blue;
    color: #fff;
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
    width: 50px;
    height: 28px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
`;
const CartCount = styled.h6`
    color : #000;  
    text-align: center;
`;