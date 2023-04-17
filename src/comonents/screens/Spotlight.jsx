import React from 'react'
import Slider from 'react-slick';
import styled from "styled-components";
import BannerImage from "../../assets/images/banner.jpeg";
import ImageSlide from '../includes/ImageSlide';
import Products from './Products';

function Spotlight() {
  const data = [
      {
          id: 1,
          image: BannerImage,
          topTitle: "Best Offer",
          mainTitle: "New Arrivals on Sale",
      },
  ];
  return (
    <>
      <Container>
        <ImageSlide />
        <Content>
          <TopTitle>Welcome</TopTitle>
          <MainTitle>Accolades</MainTitle>
        </Content>
      </Container>
    </>
  )
}

export default Spotlight

const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
`;
const Content = styled.div`
    position: absolute;
    top: 50%;
    right: 35%;
    width: 30%;

`;
const TopTitle = styled.h4`
  color: red;
  font-size: 25px;
`;
const MainTitle = styled.h1`
    font-size: 45px;
    font-weight: 500;
    color: #fff;
`;
