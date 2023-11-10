import React from 'react';
import styled from 'styled-components';


const List = styled.div`
    width: calc(85vw - 40px);
    //position: absolute;
    //z-index: 4;
    //display: flex;
    margin: 0 20px 0 20px;
`
const NumberCircle = styled.div`
    border-radius: 50%;
    background-color: #262626;
    width: 3vh;
    height: 3vh;
    text-align: center;
    line-height: 3vh;
    font-weight: 500;
    font-size: 0%.7;
    color: #fff;
    margin: auto;
    margin-bottom: 5px;
`
const Line = styled.div`
    border-left : medium solid #fff;
    height : 2vh;
    margin-left: calc((85vw - 40px)/2 - 2px);
`
const Question = styled.div`
    border-radius: 14px;
    background: #fff;
    width: calc(85vw - 20px);
    color: #262626;
    font-weight: 500;
    font-size: 0.9rem;
    display: block;
    padding: 15px;
    padding-bottom: 25px;
    text-align: left;
`
const Answer = styled.div`
    color: #505050;
    font-size:0.8rem;
    font-weight: 400;
    margin-top: 2px;
`

const EndingList = (props) => {
    const { number, question, answer } = props;
    return (
        <List>
            {number > 1 && <Line/>}
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <Question><NumberCircle>{number || 1}</NumberCircle>
            {question || '질문'}
            <Answer>{answer || '답변'}</Answer></Question>
            </div>
        </List>
    );
};

export default EndingList;