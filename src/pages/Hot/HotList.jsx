import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/key_logo.svg';
import MyQList from '../../components/MyQList';
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

const HotList = () => {
    const location = useLocation();
    const theme = { ...location.state };
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [questions,setQuestions] = useState([]);
    const [myanswers, setMyanswers] = useState([]);
    const [whattheme, setWhattheme] = useState("");

    const getUserdata = () => {
        axios.get("http://localhost:8000/accounts/auth/",{
            withCredentials:true,
        })
        .then(response => {
            console.log(response.data);
            // console.log(cookies.access)
            setUsername(response.data.user.username);
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                // 401 Unauthorized 에러가 발생한 경우
                // 여기에 refresh 토큰을 사용하여 새로운 access 토큰을 요청하는 로직을 추가
                // refreshAccessToken();
                console.error('Error fetching cards: ', error);
            } else {
                console.error('Error fetching cards: ', error);
            }
            // console.error('Error fetching cards: ', error);
        });
    };

    // const getthemeQ = () => {
    //     axios.get("http://localhost:8000/myfarewell/question/", {
    //         params: {theme: `${theme.theme}`}},
    //             { withCredentials: true })
    //     .then(res => {
    //         console.log("question", res);
    //         setQuestions(res.data.questions);
    //         setWhattheme(res.data.theme);
    //         console.log(whattheme);
    //         console.log(questions);
    //     })
    // };

    let hot = [
        {id: 8, question: "올해 이룬 것이 있다면 무엇인가요?"},
        {id: 9, question: "올해 가장 자랑하고 싶은 일은 무엇인가요?"},
        {id: 10, question: "올해 가장 의미있는 소비는 어떤 소비였나요?"},
        {id: 11, question: "올해가 시작될 때 어떤 다짐을 했었나요?"},
        {id: 12, question: "올해 가장 최선을 다한 일은 무엇인가요?"},
        {id: 13, question: "올해 나에게 칭찬하고 싶은 점은 무엇인가요?"},
        {id: 14, question: "올해 꾸준히 한 것이 있다면 무엇인가요?"},
    ];

    const getAnswer = () => {
        axios.get("http://localhost:8000/myfarewell/", {
            withCredentials: true
        })
        .then(res => {
            console.log("answer", res);
            setMyanswers(res.data.answers);
            console.log("answer", myanswers);
        })
    };

        // for (let i = 0; i < questions.length; i++) {
            //     for (let j = 0; j < myanswers.length; j++) {
            //         if (questions[i].question === myanswers[j].question) {
            //             questions[i]['answer'] = myanswers[j].answer_content;
            //             questions[i]['isanswer'] = true;
            //         }
            //         else {
            //             questions[i]['answer'] = '';
            //             questions[i]['isanswer'] = false;
            //         }
            //     }
            // }
            for (let i = 8; i < 15; i++) {
                hot[i]['answer'] = myanswers[i].answer_content;
                hot[i]['isanswer'] = true;
            }


    console.log(hot);

    useEffect(() => {
        //getthemeQ();
        getUserdata();
        getAnswer();
    }, []);

    return (
        <Wrapper>
            <img src={logo} style={{padding: "5vh 0 0 7vw"}}/>
            <Title>{username}님의 2023 회고록<Theme># 낭만있던 2023</Theme></Title>
            <List>
            {hot.map(list => (
                <MyQList 
                    key={list.id} 
                    number={list.id} 
                    theme={'hot'}
                    question={list.question} 
                    isanswer={list.isanswer}
                    answer={list.answer}/>
            ))}
            </List>
            <Button onClick={() => {
                navigate('/list')
            }}>다른 테마 보기</Button>
        </Wrapper>
    );
};

export default HotList;