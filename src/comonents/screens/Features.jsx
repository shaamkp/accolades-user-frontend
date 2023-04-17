import React from 'react'
import styled from 'styled-components';
import ContentImage from "../../assets/images/background.jpeg"

const Features = () => {
  return (
      <div>
          <MainContainer>
              <Wrapper>
                  <TopContainer>
                      <MainTitle>Features</MainTitle>
                  </TopContainer>
                  <BottomContainer>
                      <LeftContainer>
                          <Question>Looking for the best features ?</Question>
                          <FeaturesList>
                              <List>Society</List>
                              <List>Farmers</List>
                              <List>Factory</List>
                              <List>Farm</List>
                          </FeaturesList>
                      </LeftContainer>
                      <RightContainer>
                          <Content>
                              <Image src={ContentImage} alt="Image" />
                          </Content>
                      </RightContainer>
                  </BottomContainer>
              </Wrapper>
          </MainContainer>
      </div>
  );
}

export default Features

const MainContainer = styled.div``;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const TopContainer = styled.div`
    border-bottom: 1px solid black;
    margin-bottom: 30px;
`;
const MainTitle = styled.h2`
    margin-bottom: 20px;
`;
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40vh;
`;
const Question = styled.h4``;
const FeaturesList = styled.ul``;
const List = styled.li``;
const RightContainer = styled.div`
    width:50%;
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const Content = styled.div`
    width: 40%;
    display: flex;
    justify-content: right;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;