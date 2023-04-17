import React, { useState } from 'react'
import styled from 'styled-components';
import { userConfig } from "../../axiosConfig";


const ContactUs = () => {
  const[name, setName] = useState("")
  const[phone, setPhone] = useState("")
  const[email, setEmail] = useState("")

  const onNameChange = (e) => {
    let value = e.target.value
    setName(value);
  }

   const onNumberChange = (e) => {
       let value = e.target.value;
       setPhone(value);
   };

    const onEmailChange = (e) => {
        let value = e.target.value;
        setEmail(value);
    };

  const SubmitData = () => {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("phone",phone);
    formData.append("email",email);

    userConfig.post("web/add-enquiries/", formData, {})
    .then((response) => {
      console.log(response);
      const {StatusCode} = response.data;
      if (StatusCode === 6000){
        alert("Success")
      }
    })

  }
  return (
      <div>
          <MainContainer>
              <Wrapper>
                  <MainTitle>Enquiry</MainTitle>
                  <Content>
                      <Form>
                          <NameDiv>
                              <TextInput
                                  type="text"
                                  placeholder="Enter your full name"
                                  id="name"
                                  value={name}
                                  onChange={onNameChange}
                              />
                          </NameDiv>
                          <NumberDiv>
                              <NumberInput
                                  type="tel"
                                  placeholder="Enter your number"
                                  id="number"
                                  value={phone}
                                  onChange={onNumberChange}
                              />
                          </NumberDiv>
                          <EmailDiv>
                              <EmailInput
                                  type="text"
                                  placeholder="Enter your email"
                                  value={email}
                                  onChange={onEmailChange}
                              />
                          </EmailDiv>
                          <Submit onClick={SubmitData}>Submit</Submit>
                      </Form>
                  </Content>
              </Wrapper>
          </MainContainer>
      </div>
  );
}

export default ContactUs

const MainContainer = styled.div`
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width:90%;
  margin: 0 auto;
`;
const MainTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: 700;
`;
const Content = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content:center;
  align-items:center;
`;
const Form = styled.form``;
const NameDiv = styled.div`
  width: 500px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 8px;
`;
const TextInput = styled.input``;
const NumberDiv = styled.div`
    width: 500px;
    padding: 10px;
    border: 1px solid #000;
    margin-top: 20px;
    border-radius: 8px;
`;
const NumberInput = styled.input`
    
`;
const EmailDiv = styled.div`
    width: 500px;
    padding: 10px;
    border: 1px solid #000;
    margin-top: 20px;
    border-radius: 8px;
`;
const EmailInput = styled.input`
   

`;
const Label = styled.label``;
const Submit = styled.button`
    margin-top: 20px;
    padding: 10px;
    width: 500px;
    text-align: center;
    background: green;
    border-radius: 8px;
    font-weight: 600;
    color: #fff;
`;
