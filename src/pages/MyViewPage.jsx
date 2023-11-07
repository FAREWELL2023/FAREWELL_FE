import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/key_logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    //padding: 5vh 7vw 0 7vw;
    text-align: center;
    align-items: center;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
    display: flex;
    padding-left: 7vw;
`
const Number = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
`
const Question = styled.div`
    border-radius: 50px;
    background: #F3F3F3;
    width: 80vw;
    height: 6vh;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 6vh;
    color: #262626;
    font-weight: 500;
`

const MyViewPage = () => {
    const location = useLocation();
    const QInfo = { ...location.state }; // 해당 질문의 번호,질문내용을 받아옴
    const navigate = useNavigate();
    const [answer, setAnswer] = useState("");
    return (
        <Wrapper>
        <img src={logo} style={{display:"flex", padding: "5vh 0 0 7vw"}}/>
            <Title>사용자님의 2023 회고록</Title>
            <Number>{QInfo.number}</Number>
            <Question>{QInfo.question}</Question>
        </Wrapper>
    );
};

export default MyViewPage;