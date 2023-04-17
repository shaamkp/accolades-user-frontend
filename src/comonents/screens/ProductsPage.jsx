import React, { useState } from "react";
import styled from "styled-components";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
// import { useSelector } from "react-redux";

const ProductsPage = () => {
    // const cart = useSelector((state) => state.cart)
    // console.log("#########", cart);
    const [count, setCount] = useState(0)
    const [active, setActive] = useState([])

    const addtoCart = (item) => {
        setCount(count + 1)
        setActive([...active,item])
    };



    const datas = [
        {
            id: 1,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Milk",
            productprice: "$5",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
        {
            id: 2,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Ghee",
            productprice: "$5",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
        {
            id: 3,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Curd",
            productprice: "$8",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
        {
            id: 4,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Butter",
            productprice: "$8",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
        {
            id: 5,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Butter",
            productprice: "$8",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
        {
            id: 6,
            photo: "https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house5.jpg",
            productname: "Butter",
            productprice: "$8",
            description: `We can handle every detail of the project design including bidding, permitting, subcontractor selection, managing resources, site supervision, all with an emphasis on communication.

            We have the capability to provide`,
        },
    ];
    return (
        <div>
            <div>
                <MainContainer>
                    <Wrapper>
                        <BottomContainer>
                            <Cards>
                                {datas.map((item) => (
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
                                                        {item.productname}
                                                    </ProductName>
                                                    <ProductPrice>
                                                        {item.productprice}
                                                    </ProductPrice>
                                                </TitleContainer>
                                                <DescriptionContainer>
                                                    <Description>
                                                        {item.description}
                                                    </Description>
                                                </DescriptionContainer>
                                            </ContentWrapper>
                                            {console.log("#####",active)}
                                            {!active.includes(item.id)  ? (
                                                <BeforeCart
                                                    addtoCart={addtoCart}
                                                    item={item}
                                                    active={active}
                                                    setActive={setActive}
                                                />
                                            ) : (
                                                <AfterCart />
                                            )}
                                        </ProductDetailContainer>
                                    </Card>
                                ))}
                            </Cards>
                        </BottomContainer>
                    </Wrapper>
                </MainContainer>
            </div>
        </div>
    );
};

export default ProductsPage;

const MainContainer = styled.div``;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const ContentWrapper = styled.div`
    width: 90%;
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
    margin-bottom: 20px;
`;
const AllProducts = styled.h4`
    font-size: 12px;
    color: red;
    font-weight: 700;
`;
const BottomContainer = styled.div``;
const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #c8c6cc;
    padding-top: 80px;
`;
const Card = styled.li`
    width: 30%;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #c8c6cc;
    box-shadow: 4px 10px 17px 0px rgba(0, 0, 0, 0.4);
    transition: all 1s ease;
`;
const ImageContainer = styled.div`
    border-radius: 30px;
    margin-bottom: 20px;
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
    padding: 3%;
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
    margin-bottom: 20px;
`;
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
