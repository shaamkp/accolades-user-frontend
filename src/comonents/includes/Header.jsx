import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CartSvg from "../../assets/images/cart.svg"
import styled from "styled-components"
import "../../assets/css/style.css"

function Header() {
    const [active, setActive] = useState("Home");

    const logoutFunction = () => {
        window.localStorage.clear();
        window.location.reload()
    };

  return (
      <>
          <MainContainer>
              <Wrapper>
                  <RightContainer>
                      <LogoTitle>ACCOLADES</LogoTitle>
                  </RightContainer>
                  <LeftContainer>
                      <NavList>
                          <List
                              to="/"
                              onClick={() => {
                                  setActive("Home");
                              }}
                              className={active === "Home" ? "active" : ""}
                          >
                              Home
                          </List>
                          <List
                              to="/about"
                              onClick={() => {
                                  setActive("About");
                              }}
                              className={active === "About" ? "active" : ""}
                          >
                              About
                          </List>
                          <List
                              to="/services"
                              onClick={() => {
                                  setActive("Services");
                              }}
                              className={active === "Services" ? "active" : ""}
                          >
                              Services
                          </List>
                          <List
                              to="/gallery"
                              onClick={() => {
                                  setActive("Gallery");
                              }}
                              className={active === "Gallery" ? "active" : ""}
                          >
                              Gallery
                          </List>
                          <List
                              to="/contact"
                              onClick={() => {
                                  setActive("Contact");
                              }}
                              className={active === "Contact" ? "active" : ""}
                          >
                              Contact
                          </List>
                      </NavList>
                  </LeftContainer>
                  {/* <CartConatiner to="/cart">
                      <CartImage src={CartSvg} alt="Cart" />
                  </CartConatiner> */}
                  <LeftMostContainer>
                      <Button onClick={() => logoutFunction()}>Log Out</Button>
                  </LeftMostContainer>
              </Wrapper>
          </MainContainer>
          <Outlet />
      </>
  );
}

export default Header

const MainContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #232323;
    
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
`;
const LogoTitle = styled.h1`
    color: lightblue;
    cursor: pointer;
    span{
        color: yellow;
    }
`;
const RightContainer = styled.div``;
const LeftContainer = styled.div`   
    width: 40%;
    margin: 0 auto;
    
`;
const NavList = styled.ul`
    display: flex;
    color: #fff;
    /* justify-content: space-between; */
`;
const List = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    margin-left: 70px;
    position: relative;
    color: #fff;
    &::after {
        content: "";
        width: 62px;
        height: 5px;
        background-color: red;
        position: absolute;
        top: 54px;
        left: -5px;
        transform: translateY(-20px);
        opacity: 0;
        transition: 0.5s ease-out;
    }
    &.active {
        &::after {
            transform: translateY(0px);
            opacity: 100;
        }
    }
    &:nth-child(2) {
        &::after {
            width: 80px;
            left: 14px;
        }
    }
    &:nth-child(3) {
        &::after {
            left: 6px;
        }
    }
    &:nth-child(4) {
        &::after {
            left: 12px;
        }
    }
    &:hover {
        &::after {
            transform: translateY(0px);
            opacity: 100;
        }
    }
`;
const LeftMostContainer = styled.div``;
const Button = styled.button`
    color: #fff;
    background: blue;
    width: 80px;
    height: 30px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
`;
const CartConatiner = styled(NavLink)`
    width: 35px;
`;
const CartImage = styled.img`
    width: 100%;
    display: block;
    filter: invert(1);
    cursor: pointer;
`;