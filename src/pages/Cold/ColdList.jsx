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

const ColdList = () => {
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

    let cold = [
        {id: 15, question: "올해 가장 아쉬웠던 순간은 어떤 순간인가요?"},
        {id: 16, question: "올해 가장 우울했던 순간은 어떤 순간인가요?"},
        {id: 17, question: "올해 나를 가장 힘들게 한 것은 무엇인가요?"},
        {id: 18, question: "올해 내가 힘들 때 힘이 되어준 것은 무엇(누구)인가요?"},
        {id: 19, question: "올해 가장 미안했던 사람은 누구인가요?"},
        {id: 20, question: "올해 가장 되돌리고 싶은 순간 언제인가요?"},
        {id: 21, question: "되돌리고 싶은 순간을 되돌린다면 어떻게 하고싶나요?"},
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
            for (let i = 15; i < 22; i++) {
                cold[i]['answer'] = myanswers[i].answer_content;
                cold[i]['isanswer'] = true;
            }


    console.log(cold);

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
            {cold.map(list => (
                <MyQList 
                    key={list.id} 
                    number={list.id} 
                    theme={'cold'}
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

export default ColdList;