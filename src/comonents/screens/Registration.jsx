import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bg from "../../assets/images/registration_bg.jpg";
import { userConfig } from "../../axiosConfig";
import { Context } from "../context/Store";

const Registration = () => {
    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        console.log("okkkkkkkkk");
        userConfig
            .post("accounts/register/", {
                phone: phone,
                fullname: name,
                username: username,
                password: password,
            })
            .then(function (response) {
                if (response.data.StatusCode === 6000) {
                    console.log("hai world");
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                            access: response.data.data.acess_token,
                        },
                    });
                }
                // navigate("/auth/");
            });
    };
    return (
        <>
            <MainContainer>
                <LeftContainer></LeftContainer>
                <RightContainer>
                    <Wrapper>
                        <Form>
                            <RegisterTitle>Register</RegisterTitle>
                            <RegisterSubTitle>
                                Manage all your profile
                            </RegisterSubTitle>
                            <RegisterPara>
                                Lets get you all set up so you can verify your
                                personal account and begin setting up your
                                profile
                            </RegisterPara>
                            <InputContainer>
                                <Input
                                    type="number"
                                    placeholder="Phone Number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                                <Input
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </InputContainer>
                        </Form>
                        <Button onClick={handleRegister}>Create Account</Button>
                        <RegisterSubTitles>
                            Already have an Account ?
                            <Link to="/auth/">Log In</Link>
                        </RegisterSubTitles>
                    </Wrapper>
                </RightContainer>
            </MainContainer>
        </>
    );
};

export default Registration;

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
const LeftContainer = styled.div`
    width: 40%;
    height: 100vh;
    background-image: url(${Bg});
    background-size: cover;
`;
const RightContainer = styled.div`
    width: 60%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`;
const Form = styled.form`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: green; */
`;
const InputContainer = styled.div`
    display: flex;
`;
const Input = styled.input`
    border: 1px solid #000;
    height: 50px;
    width: 350px;
    padding-left: 13px;
    margin-left: 10px;
`;

const RegisterTitle = styled.h2``;
const RegisterSubTitle = styled.h3``;
const RegisterPara = styled.p`
    font-size: 10px;
    width: 400px;
    font-weight: 600;
    color: grey;
`;
const Button = styled.button`
    background-color: #45aae4;
    color: #fff;
    width: 30%;
    height: 40px;
    margin-left: 10px;
    border-radius: 8px;
    font-weight: 700;
    margin-top: 50px;
`;
const RegisterSubTitles = styled.h2`
    margin-top: 20px;
    font-size: 15px;
`;
