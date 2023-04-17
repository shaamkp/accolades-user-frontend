import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
      <>
          <MainContainer>
              <FooterContent>
                  <FooterContentTitle>
                      COPYRIGHT © 2020 ACCOLADES PRIVATE CO., LTD.
                  </FooterContentTitle>
              </FooterContent>
          </MainContainer>
      </>
  );
}

export default Footer

const MainContainer = styled.div`
    width: 100%;
    height: 100px;
`;
const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`;
const FooterContentTitle = styled.h2`
    margin-top: 50px;
    font-size: 18px;
    color: #4a4a4a;
`;
