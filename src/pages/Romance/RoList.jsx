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

const RoList = () => {
    const location = useLocation();
    const theme = { ...location.state };
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [questions,setQuestions] = useState([]);
    const [roanswers, setRoanswers] = useState([]);
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

    let romance = [
        {id: 22, question: "올해 가장 많이 들은 노래는 무엇인가요?"},
        {id: 23, question: "올해를 떠올리면 가장 먼저 생각나는 사람은?"},
        {id: 24, question: "그 사람에게 한 마디"},
        {id: 25, question: "올해를 하나의 사진으로 표현하자면?"},
        {id: 26, question: "올해 나에게 가장 크게 변화한 부분이 있다면?"},
        {id: 27, question: "올해 가장 기억에 남는 영화/드라마는?"},
        {id: 28, question: "올해를 보내며 내가 나에게 하고 싶은 말"},
    ];

    const getAnswer = () => {
        axios.get("http://localhost:8000/myfarewell/", {
            withCredentials: true
        })
        .then(res => {
            console.log("answer", res);
            setRoanswers(res.data.answers);
            console.log("answer", roanswers);
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
            for (let i = 22; i < 29; i++) {
                romance[i]['answer'] = roanswers[i].answer_content;
                romance[i]['isanswer'] = true;
            }


    console.log(romance);

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
            {romance.map(list => (
                <MyQList 
                    key={list.id} 
                    number={list.id} 
                    theme={'ro'}
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

export default RoList;