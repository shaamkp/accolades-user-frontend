import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { userConfig } from "../../axiosConfig";

function Products() {
    const [items, setItems] = useState([])
    useEffect(() =>{
        userConfig.get('products/products/')
        .then((response) => {
            const { StatusCode, data } = response.data.app_data;
            if(StatusCode === 6000){
                setItems(data.data);
            }
        })
    },[])
    console.log(items,"-=-=-=-=-=-=-=-");
    // const datas = [
    //     {
    //         id: 1,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Milk",
    //         productprice: "$5",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    //     {
    //         id: 2,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Ghee",
    //         productprice: "$5",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    //     {
    //         id: 3,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Curd",
    //         productprice: "$8",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    //     {
    //         id: 4,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Butter",
    //         productprice: "$8",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    //     {
    //         id: 5,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Butter",
    //         productprice: "$8",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    //     {
    //         id: 6,
    //         photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
    //         productname: "Butter",
    //         productprice: "$8",
    //         description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.`,
    //     },
    // ];
  return (
      <div>
          <MainContainer>
              <Wrapper>
                  <TopContainer>
                      <ProductTitle>Latest Products</ProductTitle>
                      <AllProducts activeClassName="active" to="/products">
                          VIEW ALL PRODUCTS
                      </AllProducts>
                  </TopContainer>
                  <BottomContainer>
                      <Cards>
                          {items.map((item) => (
                              <Card key={item.id}>
                                  <ImageContainer>
                                      <ProductImage
                                          src={item.photo}
                                          alt="Milk"
                                      />
                                  </ImageContainer>
                                  <ProductDetailContainer>
                                      <ContentWrapper>
                                          <TitleContainer>
                                              <ProductName>
                                                  {item.name}
                                              </ProductName>
                                              <ProductPrice>
                                                  {item.price}
                                              </ProductPrice>
                                          </TitleContainer>
                                          <DescriptionContainer>
                                              <Description>
                                                  {item.description}
                                              </Description>
                                          </DescriptionContainer>
                                      </ContentWrapper>
                                  </ProductDetailContainer>
                              </Card>
                          ))}
                      </Cards>
                  </BottomContainer>
              </Wrapper>
          </MainContainer>
      </div>
  );
}

export default Products

const MainContainer = styled.div`
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const ContentWrapper = styled.div`
    width:90%;
    margin: 0 auto;
`;
const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c8c6cc;
    margin-bottom: 30px;
`;
const ProductTitle = styled.h2`
    font-size: 24px;
`;
const AllProducts = styled(NavLink)`
    font-size: 12px;
    color: red;
    font-weight: 700;
    margin-bottom: 20px;
`;
const BottomContainer = styled.div``;
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
    margin-bottom:20px;
`;
const ProductImage = styled.img`
    width: 100%;
    display: block;
`;
const ProductDetailContainer = styled.div``;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductName = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #1a6692;
`;
const ProductPrice = styled.h3`
    font-weight: bolder;
`;
const DescriptionContainer = styled.div`
    padding: 3px;
`;
const Description = styled.p`
    line-height: 1.5em;
    font-weight: 200;
`;
