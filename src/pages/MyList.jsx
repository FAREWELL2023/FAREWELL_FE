import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/key_logo.svg';
import MyQList from '../components/MyQList';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    padding: 5vh 7vw 0 7vw;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
`

const MyList = () => {
    const navigate = useNavigate();
    const isanswer = useState(false);

    return (
        <Wrapper>
            <img src={logo}/>
            <Title>사용자님의 2023 회고록</Title>
            <MyQList number='1' isanswer='true' question='답변 완료한 질문'
                onClick={() => {
                    navigate('/') // 답변이 있을 경우 답변 확인 페이지로
                }}/>
            <MyQList number='2' isanswer='true' question='답변 완료한 질문'/>
            <MyQList number='3'
                onClick={() => {
                    navigate('/') // 답변이 없을 경우 답변 작성 페이지로
                }}/>
            <MyQList number='4'/>
            <MyQList number='5'/>
            <MyQList number='6'/>
            <MyQList number='7'/>
        </Wrapper>
    );
};

export default MyList;