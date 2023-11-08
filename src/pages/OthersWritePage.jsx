import React, {useState} from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../images/key_logo.svg';
import christmastree from '../images/3dicon/christmastree.png';
import checkbutton from '../images/3dicon/checkbutton_yellow.png';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #262626;;
    align-items: center;
    //text-align: center;
`;

const Logo = styled.div`
    position: absolute;
    right: 0px;
`
const Title = styled.div`
    color: #EFEC69;
    font-weight: 700;
    margin: 0 0 1vh 10vw;
    font-size: 1.5rem;
`
const TitleTxt1=styled.div`
    color: #FFF;
    font-weight: 400;
    margin: 3vh 0 0 11vw;
    font-size: 0.9rem;
`;

const TitleTxt2=styled.div`
    color: #FFF;
    font-weight: 500;
    margin: 1vh 0 3vh 11vw;
    font-size: 0.6rem;
`;

const QuestionList=styled.div`
    background-color:#FFF;
    color:#262626;
    width:81vw;
    height:5.5vh;
    line-height:5.5vh;
    text-align:center;
    font-size: 0.8rem;
    margin: 1.5vh auto;
    border-radius:41.85px;
`;

const QuestionAnswer=styled.div`
    padding-top:1vh;
    >textarea{
    width:81vw;
    height: 25vh;
    margin: 1.5vh 10vw;
    resize: none;
    border:none;
    outline:none;
    background-color:#262626;
    color: #FFF;
    }
    >textarea::placeholder {
        color: #D9D9D9;
        font-size: 0.8rem;        
    }
`;

const SubmitButton=styled.button`
    padding-top: 100vh;
`

const OthersWritePage = () => {
    const location = useLocation();
    const [question, setQuestion]=useState('');
    const [answer, setAnswer] = useState('');
    const QInfo = location.state; 
    const navigate = useNavigate();

    const onChangeAnswer = (e) => {
        const answer = e.target.value;
        setAnswer(answer);
    };

    const onClick = (e) => {
        navigate('/myfeed');  
        setQuestion(QInfo.question);
/*      console.log("Question: ", QInfo.question);
        console.log("Answer: ",answer); */
    };

    return (
        <Wrapper>
            <Logo><img src={christmastree} style={{ width: "42vw", height: "16vh" }} /></Logo>
            <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
            <TitleTxt1>name님에게 한마디</TitleTxt1>
            <Title>질문 작성하기</Title>
            <TitleTxt2>질문에 답변하여 name님의 회고록을 채워주세요.</TitleTxt2>
            <QuestionList>
                {QInfo.question}
            </QuestionList>
            <QuestionAnswer>
                <textarea
                    type="text-area"
                    name="answer"
                    value={answer}
                    onChange={onChangeAnswer}
                    placeholder="답변을 작성해주세요."
                    required
                />
            </QuestionAnswer>
            <SubmitButton onClick={onClick} style={{padding:"4vh 0vw 0vh 65vw", border:"none", background: "transparent"}}>
                <img src={checkbutton} style={{ width: "30vw", height: "10vh" }} />
            </SubmitButton>
        </Wrapper>
    );
};
export default OthersWritePage;