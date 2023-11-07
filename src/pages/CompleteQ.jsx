import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import img_group from '../images/3dicon/complete_group.png';
import question from '../images/3dicon/question.png';
import comments from '../images/3dicon/comments.png';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100vw;
    height: 100vh;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    padding-bottom: 0px;
    position:relative;
`
const Title=styled.div`
    position:absolute;
    color:#FFFFFF;
    font-size:24px;
    font-weight:bold;
    left: 25vw;
    top: 190px;
`
const ContentBox=styled.div`
    position: relative;
    width: 100vw;
    height: 614px;
    top: -1vh;
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
/*     box-shadow: 20px grey;
    spread-radius: 5px; */
`
const BoxIcon=styled.img`
    width:65px;
    height:65px;
    padding-top: 3vh;
    margin-left:40px;
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
`
const ContentTxt = styled.div`
    color: #000000;
    font-size: 0.8rem;
    margin-top: 10px;
`

const CompleteQ = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Wrapper>
            <img src={img_group} style={{ width:"440px", height:"300px", margin:"15px -15px 0px"}}/>
            <Title></Title>
            <ContentBox>
                <br/>
            <SelectBox>
                <BoxIcon src={question} style={{width:"89px", height:"75px", margin:"0px 30px"}}/>
                
                <Content>
                <ContentTitle onClick={() => {
                navigate('/'); // 추가 질문 페이지로 이동
            }}></ContentTitle>
                <ContentTxt></ContentTxt>
                </Content>             
            </SelectBox>
            <SelectBox>
                <BoxIcon src={comments}/>
                <Content onClick={() => {
                navigate('/'); // 남의 회고록 페이지로 이동
            }}>
                <ContentTitle></ContentTitle>
                <ContentTxt></ContentTxt>
                </Content>
            </SelectBox>
            </ContentBox> 
            </Wrapper>
            
        </div>
    );
};

export default CompleteQ;