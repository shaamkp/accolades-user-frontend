import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import image from "../../assets/images/registration_bg.jpg";
import { userConfig } from "../../axiosConfig";

const Service = () => {
    const[services, setServices] = useState([])

    useEffect(() => {
        userConfig.get("web/services/").then((response) => {
            const {StatusCode, data} = response.data;
            if (StatusCode === 6000){
                setServices(data.data)
            }
        })
    },[])
    
  return (
      <div>
          <MainContainer>
              <Wrapper>
                  <Content>
                      <MainTitle>Services</MainTitle>
                      <ServiceListContainer>
                          {services.map((service) => (
                              <ServiceList key={service.id}>
                                  <ServiceImageContainer>
                                      <ServiceImage src={service.photo} alt="image" />
                                  </ServiceImageContainer>
                                  <ServiceDecriptionContainer>
                                      <ServiceDescription>
                                          {service.description}
                                      </ServiceDescription>
                                  </ServiceDecriptionContainer>
                              </ServiceList>
                          ))}
                      </ServiceListContainer>
                  </Content>
              </Wrapper>
          </MainContainer>
      </div>
  );
}

export default Service

const MainContainer = styled.div`
    width: 100%;
    padding-top: 100px;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Content = styled.div``;
const MainTitle = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 700;
`;
const ServiceListContainer = styled.ul``;
const ServiceList = styled.li`
    display: flex;
    justify-content:space-between;
    margin-top: 20px;
`;
const ServiceImageContainer = styled.div`
    width: 50%;
`;
const ServiceImage = styled.img`
    display: block;
    width: 100%;
`;
const ServiceDecriptionContainer = styled.div`
    width: 47%;
`;
const ServiceDescription = styled.p``;