import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import img_group from '../images/3dicon/userpage_group.png';
import key from '../images/3dicon/key.jpg';
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

const Keyword1=styled.div`
    position:absolute;
    color:#FFFFFF;
    font-size:18px;
    font-weight:bold;
    left: 47px;
    top: 160px;
    transform: rotate(-16deg);
`

const Keyword2=styled.div`
    position:absolute;
    color:#FFFFFF;
    font-size:18px;
    font-weight:bold;
    left: 265px;
    top: 247px;
    transform: rotate(10deg);
`
const ContentBox=styled.div`
    position: relative;
    width: 100vw;
    height: 566.5px;
    top: 6vh;
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

const UserPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Wrapper>
            <img src={img_group} style={{ width:"450px", height:"340px", margin:"-40px -15px"}}/>
            <Title>name님의 2023년</Title>
            <Keyword1>#즐거운</Keyword1>
            <Keyword2>#사랑스러운</Keyword2>
            <ContentBox>
                <br/>
            <SelectBox>
                <BoxIcon src={key}/>
                <Content>
                <ContentTitle onClick={() => {
                navigate('/'); // 나의 회고록 페이지로 이동
            }}>내가 쓰는 나의 2023</ContentTitle>
                <ContentTxt>오늘의 질문에 답변하기</ContentTxt>
                </Content>             
            </SelectBox>
            <SelectBox>
                <BoxIcon src={comments}/>
                <Content onClick={() => {
                navigate('/'); // 남의 회고록 페이지로 이동
            }}>
                <ContentTitle>내가 쓰는 나의 2023</ContentTitle>
                <ContentTxt>친구들의 한마디 보기</ContentTxt>
                </Content>
            </SelectBox>
            </ContentBox> 
            </Wrapper>
            
        </div>
    );
};

export default UserPage;