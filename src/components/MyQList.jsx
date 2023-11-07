import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
    overflow-x: hidden;
`
const NumberCircle = styled.div`
    border-radius: 50%;
    background-color: #969696;
    width: 7vh;
    height: 7vh;
    text-align: center;
    line-height: 7vh;
    font-weight: 500;
    font-size: 1rem;
`
const Question = styled.div`
    border-radius: 7vh;
    background: #969696;
    width: 70vw;
    height: 7vh;
    color: #262626;
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;
    line-height: 7vh;
`
const Line = styled.div`
    border-left : medium solid #969696;
    height : 4vh;
    margin-left: 3.3vh;
`

const MyQList = (props) => {
    const { number, question, isanswer, onClick } = props;
    const navigate = useNavigate();

    return (
        <List onClick={() => {
            isanswer? navigate(`/myview/${number}`, {state :{number: number, question: question}}) : navigate(`/mywrite/${number}`, {state :{number: number, question: question}}) // 답변이 있으면 /write으로, 없으면 /으로
        }}>
            {number > 1 && <Line style={isanswer? {borderLeft: "medium solid white"} : {}}/>}
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <NumberCircle style={isanswer? {backgroundColor: "white"} : {}}>{number || 1}</NumberCircle>
            <Question style={isanswer? {backgroundColor: "white"} : {}}>{question || '질문'}</Question>
            </div>
        </List>
    );
};

export default MyQList;