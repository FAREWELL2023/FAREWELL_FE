import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/key_logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckButton from '../components/CheckButton';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    padding: 5vh 7vw 0 7vw;
    text-align: center;
    align-items: center;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
    display: flex;
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
const Answer = styled.div`
    border-radius: 38px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 25px;
    >textarea {
        border : 0px solid;
        width : 90vw;
        height : 50vh;
        font-size: 2vh;
        word-break:break-all;
        resize:none;
        overflow: auto;
    }
    >textarea::placeholder {
        color: #D9D9D9;
        
    }
    >textarea:focus {
        outline: none;
    }
`
const StyledButton = styled.div`
    display: flex;
    margin-top: -20px;
`


const MyWritePage = () => {
    const location = useLocation();
    const QInfo = { ...location.state }; // 해당 질문의 번호,질문내용을 받아옴
    const navigate = useNavigate();
    const [answer, setAnswer] = useState("");

    const onChangeAnswer = (e) => {
        const answer = e.target.value;
        setAnswer(answer);
    };

    return (
        <Wrapper>
            <img src={logo} style={{display:"flex"}}/>
            <Title>사용자님의 2023 회고록</Title>
            <Number>{QInfo.number}</Number>
            <Question>{QInfo.question}</Question>
            <Answer><textarea
                        type="textarea"
                        name="answer"
                        id="asnwer"
                        maxLength={200}
                        value={answer}
                        required
                        onChange={onChangeAnswer}
                        placeholder="답변을 작성해주세요."
                    /></Answer>
            <StyledButton>
                <CheckButton/>
            </StyledButton>
        </Wrapper>
    );
};

export default MyWritePage;