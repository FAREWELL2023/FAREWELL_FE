import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logo from '../images/key_logo.svg';
import tree from '../images/3dicon/tree.jpg';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #262626;;
    align-items: center;
    text-align: center;
`;

const Logo = styled.div`
    position: absolute;
    top:40px;
    right: 30px;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
`
const TitleTxt1=styled.div`
    color: #FFF;
    font-weight: 500;
    margin: 1vh 0 3vh 0;
    font-size: 1.0rem;
`;

const TitleTxt2=styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 0.8rem;
`;

const QuestionList=styled.div`
    background-color:#FFF;
`;

const OthersQuestionPage = () => {
    return (
        <Wrapper>    
            <Logo><img src={tree} style={{width: "22vw", height:"17vh"}}/></Logo>
            <img src={logo} style={{display:"flex", padding: "5vh 0 0 7vw"}}/>
            <TitleTxt1>name님에게 한마디</TitleTxt1>
            <Title>질문 선택하기</Title>
            <TitleTxt2>질문에 답변하여 name님의 회고록을 채워주세요.</TitleTxt2>
            <QuestionList>
                Q.~~~~
            </QuestionList>
        </Wrapper>
    );
};

export default OthersQuestionPage;