import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import { userConfig } from "../../axiosConfig";


const Gallery = () => {
    const[galleries, setGalleries] = useState([])
    useEffect(() => {
        userConfig.get("web/galleries/").then((response) => {
            const {StatusCode, data} = response.data
            console.log(response,"0000000000000");
            if (StatusCode === 6000){
                setGalleries(data.data)
            }
        })
    },[])
  return (
      <div>
          <MainContainer>
              <Wrapper>
                  <MainTitle>Gallery</MainTitle>
                  <BottomContainer>
                      <Cards>
                          {galleries.map((gallery) => (
                              <Card key={gallery.id}>
                                  <ImageContainer>
                                      <ProductImage
                                          src={gallery.photo}
                                          alt="Milk"
                                      />
                                  </ImageContainer>
                              </Card>
                          ))}
                      </Cards>
                  </BottomContainer>
              </Wrapper>
          </MainContainer>
      </div>
  );
}

export default Gallery

const MainContainer = styled.div`
    padding-top: 100px;
`;
const MainTitle = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 700;
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const BottomContainer = styled.div`
    margin-top: 50px;
`;
const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 80px;
`;
const Card = styled.li`
    width: 30%;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #c8c6cc;
    box-shadow: 4px 10px 17px 0px rgba(0, 0, 0, 0.4);
    transition: all 1s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        transition: all 1s ease;
    }
`;
const ImageContainer = styled.div`
    border-radius: 30px;
`;
const ProductImage = styled.img`
    width: 100%;
    display: block;
`;