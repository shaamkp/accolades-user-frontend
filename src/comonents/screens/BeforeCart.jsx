import React from 'react'
import styled from 'styled-components';

const BeforeCart = ({ addtoCart,active,setActive ,item}) => {
    return (
        <Container
        // onclick={() => setActive([...active, item])}
        >
            <Button onClick={() => addtoCart(item.id)}>Add to Cart</Button>
        </Container>
    );
};

export default BeforeCart

const Button = styled.button`
    background: blue;
    color: #fff;
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
    width: 200px;
    height: 28px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
`;
const Container = styled.div``;