import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/images/background.jpeg";
import { userConfig } from "../../axiosConfig";
import { Context } from "../context/Store";

function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleLogin = () => {
        userConfig
            .post("accounts/login/", {
                phone: phone,
                password: password,
            })
            .then(function (response) {
                if (response.data.StatusCode == 6000) {
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                            isVerified: true,
                            access: response.data.data.acess_token,
                        },
                    });
                    navigate("/");
                }
                console.log(response, "=-=-=-=-=-=-=-=-");
            });
    };

    console.log(handleLogin(), "11111111111111111");

    return (
        <>
            <MainContainer>
                <LoginContent>
                    <TopContainer>
                        <TopContainerTitle>
                            Milky<TopContainerSpan>Way</TopContainerSpan>
                        </TopContainerTitle>
                    </TopContainer>
                    <LoginCredentials>
                        <Form>
                            <UserName>
                                <Label>Phone :</Label>
                                <UsernameTitle
                                    type="text"
                                    onChange={(e) => setPhone(e.target.value)}
                                ></UsernameTitle>
                            </UserName>
                            <UserName>
                                <Label>Password :</Label>
                                <PasswordTitle
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></PasswordTitle>
                            </UserName>
                            <Button onClick={() => handleLogin()}>
                                Log In
                            </Button>
                        </Form>
                    </LoginCredentials>
                    <RegisterTitle>
                        Don't have an account ?{" "}
                        <Link to="/auth/register">Sign Up</Link>
                    </RegisterTitle>
                </LoginContent>
            </MainContainer>
        </>
    );
}

export default Login;

const MainContainer = styled.div`
    background-image: url(${Background});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* filter: blur(8px);
    -webkit-filter: blur(3px); */
`;
const LoginContent = styled.div`
    width: 30%;
    height: 395px;
    background: #000;
    border-radius: 8px;
    /* filter: opacity(0.7); */
`;
const TopContainer = styled.div``;
const TopContainerTitle = styled.h2`
    text-align: center;
    margin-top: 20px;
    font-size: 30;
    font-weight: 700;
    color: yellow;
`;
const TopContainerSpan = styled.span`
    color: white;
    margin-left: 7px;
`;
const LoginCredentials = styled.div``;
const Form = styled.form`
    /* display: flex;
    align-items: center;
    flex-direction: column; */
`;
const UserName = styled.div`
    width: 60%;
    height: 100px;
    /* background: blue; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
const Label = styled.label`
    color: #fff;
`;
const UsernameTitle = styled.input`
    padding: 6px;
    border: 1px solid #fff;
    margin-left: 5px;
    color: #fff;
`;
const PasswordTitle = styled.input`
    padding: 6px;
    border: 1px solid #fff;
    margin-left: 5px;
    color: #fff;
`;
const Button = styled.button`
    margin: 0 auto;
    display: block;
    width: 30%;
    background: green;
    height: 30px;
    color: #fff;
    font-weight: 700;
`;
const RegisterTitle = styled.h2`
    color: red;
    font-size: 12px;
    margin: 0 auto;
    width: 50%;
    margin-top: 18px;
`;
