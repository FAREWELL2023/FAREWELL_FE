import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/key_logo.svg';
import MyQList from '../components/MyQList';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    //padding: 5vh 7vw 0 7vw;
`
const Title = styled.div`
    color: #FFF;
    font-weight: 700;
    margin: 1vh 0 3vh 0;
    font-size: 1.2rem;
    padding-left: 7vw;
    display: flex;
`
const List = styled.div`
    padding: 0 7vw 0 7vw;
`
const Theme = styled.div`
    color: #FFF173;
    font-weight: 500;
    font-size: 0.8rem;
    padding-top: 0.5vh;
    margin-left: 5px;
`
const Button = styled.div`
    border-radius: 30px;
    background: #F3F3F3;
    width: 40vw;
    height: 6vh;
    line-height: 6vh;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

let question = [
    {number: 1, question: "올해 가장 행복했던 순간은 언제인가요?", isanswer: true, answer: '올해 유럽으로 여행을 갔을 때 가장 행복했다. 친구들과 멀리 떠나온 것 만으로도 감회가 새로웠고 아름다운 풍경 속에서 걷는 것 만으로도 행복했다.'},
    {number: 2, question: "올해 가장 고마운 사람은 누구인가요?", isanswer: true, answer: `여행을 보내주신 부모님..🖤 감사합니다 알바 열심히 하겠습니다`},
    {number: 3, question: "올해 가장 웃겼던 순간은 언제인가요?", isanswer: false, answer: ''},
    {number: 4, question: "올해 내가 받은 최고의 선물은 무엇인가요?", isanswer: false},
    {number: 5, question: "올해 발견한 나의 새로운 모습은 무엇인가요?", isanswer: false},
    {number: 6, question: "올해 가장 맛있었던 음식은 무엇인가요?", isanswer: false},
    {number: 7, question: "올해 가장 의미있는 공간은 어디인가요?", isanswer: false},
];

const MyListPage = () => {
    const location = useLocation();
    const theme = { ...location.state };
    const navigate = useNavigate();
    const [questions,setQuestions] = useState([]);
    console.log(question[0].answer);

    const getthemeQ = () => {
        axios.get("http://localhost:8000/myfarewell/question/", {
            params: {theme: '따뜻했던 2023'}},
                { withCredentials: true })
        .then(res => {
            console.log(res);
            setQuestions(res.data.questions);
        })
    };

    useEffect(() => {
        getthemeQ();
    }, []);

    return (
        <Wrapper>
            <img src={logo} style={{padding: "5vh 0 0 7vw"}}/>
            <Title>사용자님의 2023 회고록<Theme># {theme.theme}</Theme></Title>
            <List>
            {question.map(list => (
                <MyQList key={list.id} themeid={theme.themeid} number={list.number} question={list.question} isanswer={list.isanswer} answer={list.answer}/>
            ))}
            </List>
            <Button onClick={() => {
                navigate('/list')
            }}>다른 테마 보기</Button>
        </Wrapper>
    );
};

export default MyListPage;