import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import img_group from '../images/3dicon/complete_group.png';
import question from '../images/3dicon/question.png';
import comments from '../images/3dicon/comments.png';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #262626;;
    align-items: center;
    text-align: center;
`
const Theme=styled.div`
    position:absolute;
    color:#FFFFFF;
    font-size:20px;
    font-weight:bold;
    left: 165px;
    top: 90px;
`
const Title=styled.div`
    position:absolute;
    color:#FFFFFF;
    font-size:24px;
    font-weight:bold;
    left: 15vw;
    top: 150px;
`
const ContentBox=styled.div`
    position: relative;
    width: 100vw;
    height: 569px;
    top: 0vh;
    border-radius: 42.87px 42.87px 0px 0px ;
    background-color: #EFEC69;
/*     align-items:center;
    text-align:center; */
`
const SelectBox=styled.div`
    display:flex;
    position: relative;
    width:314.4px;
    height:131px;
    border-radius:92.89px;
    background-color:#FFFFFF;
    color: black;
    margin-bottom: 3vh;
    margin-left: 9vw;
    box shadow: 20px 20px grey;
`
const BoxIcon=styled.img`
    width:65px;
    height:65px;
    padding-top: 3.25vh;
    margin-left:35px;
`
const Content=styled.div`
    padding-top: 3vh;
    margin-left:15px;
`
const ContentTitle = styled.div`
    color: #000000;
    font-size: 1rem;
    font-weight:700;
    margin-top: 10px;
    margin-left: -10px;
`
const ContentTxt = styled.div`
    color: #000000;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-left: -10px;
`

const CompleteQPage= () => {
    const navigate = useNavigate();
    return (
        <div>
            <Wrapper>
            <img src={img_group} style={{ width:"440px", height:"300px", margin:"10px -15px 0px"}}/>
            <Theme>테마명</Theme>
            <Title>준비된 질문에 모두 답했어요!</Title>
            <ContentBox>
                <br/>
            <SelectBox>
                <BoxIcon src={question} style={{width:"89px", height:"75px", margin:"0px -15px 0px 20px"}}/>                
                <Content>
                <ContentTitle onClick={() => {
                navigate('/'); // 추가 질문 페이지로 이동
            }}>
                추가 질문 답변하기
            </ContentTitle>
                <ContentTxt>문답이 끝나 아쉬우신가요? <br/> 준비된 추가 질문에 답해보세요!</ContentTxt>
                </Content>             
            </SelectBox>
            <SelectBox>
                <BoxIcon src={comments}/>
                <Content onClick={() => {
                navigate('/'); // 남의 회고록 페이지로 이동
            }}>
                <ContentTitle>남이 쓰는 나의 2023</ContentTitle>
                <ContentTxt>타인이 쓰는 나의 회고록 알아보기</ContentTxt>
                </Content>
            </SelectBox>
            </ContentBox> 
            </Wrapper>
            
        </div>
    );
};

export default CompleteQPage;