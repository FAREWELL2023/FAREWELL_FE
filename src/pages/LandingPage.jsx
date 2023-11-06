import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

import logo_2023 from '../images/logo_2023.svg';
import logo from '../images/logo.svg';
import calendar from '../images/3dicon/IMG_7941.jpg'; 
import santa from '../images/3dicon/santa.jpg';
import bell from '../images/3dicon/bell.jpg';
import tree from '../images/3dicon/tree.jpg';

const Wrapper = styled.div`
    background-color: black;
    width: 100vw;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    padding-bottom: 200px;
`
const LogoBlock = styled.div`
    padding-top: 5vh;
`
const Logo = styled.div`
    margin-top: -15px;
`
const MainTxt = styled.div`
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
`
const TxtBlock = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
`
const Title = styled.div`
    color: #FFF173;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: 10px;
`
const SubTxt = styled.div`
    color: #FFF;
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
`
const ServiceTitle = styled.div`
    color: #FFF173;
    font-size: 1rem;
    font-weight: 700;
`
const Letsgo = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 20px;
`

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <LogoBlock>
                <img src={logo_2023}/>
                <Logo><img src={logo}/></Logo>
                <MainTxt>한 해를 마무리하는 마지막 열쇠</MainTxt>
            </LogoBlock>
            <TxtBlock>
                <img src={calendar} style={{width: "100px"}}/>
                <Title>여려분은 한 해를 어떻게 마무리하시나요?</Title>
                <SubTxt>정신없이 한 해를 마무리하다보면,<br/>
                        올해를 그냥 흘려보낸 것 같은 기분이 들기도 합니다.<br/> Farewell을 통해  2023년에 대한 회고를 하며, <br/>
                        한 해를 의미있게 마무리해보세요!</SubTxt>
            </TxtBlock>
            <TxtBlock style={{display: "flex"}}>
                <div style={{marginLeft: "auto", marginRight: "-40px", display: "flex"}}>
                <div style={{textAlign: "right", marginTop: "40px", paddingRight: "15px"}}>
                    <ServiceTitle>나의 2023 회고록</ServiceTitle>
                    <SubTxt>매일 2023년을 회고할 수 있는 질문이 주어집니다.<br/>
                            매일 빠짐없이 답변하고<br/>
                            나의 회고록을 열 수 있는 열쇠를 얻어보세요!<br/>
                            열쇠를 얻으면 회고록을 SNS에 공유할 수 있습니다.</SubTxt>
                </div>
                <img src={santa} style={{width: "170px"}}/>
                </div>
            </TxtBlock>
            <TxtBlock style={{display: "flex"}}>
                <div style={{marginRight: "auto", marginLeft: "-20px", display: "flex"}}>
                <img src={bell} style={{width: "160px"}}/>
                <div style={{textAlign: "left", marginTop: "40px", paddingLeft: "15px"}}>
                    <ServiceTitle>남이 써주는 나의 2023 회고록</ServiceTitle>
                    <SubTxt>남이 써주는 회고록을 생성하고 링크를 공유하면<br/>
                        다른 사람들이 링크를 방문하고<br/>
                        질문을 선택해서 답변을 해 줄 수 있어요.<br/>
                        다른 사람이 답변해준 내용은<br/>
                        12월 31일에 공개됩니다 !</SubTxt>
                </div>
                </div>
            </TxtBlock>
            <TxtBlock style={{display: "flex", marginTop: "-20px"}}>
                <div style={{marginLeft: "auto", marginRight: "-20px", display: "flex"}}>
                <div style={{textAlign: "right", marginTop: "80px", paddingRight: "15px"}}>
                    <ServiceTitle>남의 2023 회고록 방문하기</ServiceTitle>
                    <SubTxt>타인의 회고록에도 답변할 수 있습니다.<br/>
                            원하는 질문을 선택하여<br/>
                            내 친구, 가족들에게 익명으로 마음을 전해보세요!<br/>
                            메시지의 공개범위는<br/>
                            ‘전체공개/상대에게만 공개’ 중 선택할 수 있습니다.</SubTxt>
                </div>
                <img src={tree} style={{width: "130px"}}/>
                </div>
            </TxtBlock>
            <Letsgo>그럼, 바로 나만의 회고록을 만들러 가볼까요?</Letsgo>
            <Button title='시작하기' onClick={() => {
                navigate('/first'); // 회원가입/로그인페이지로 이동
            }}/>
        </Wrapper>
    );
};

export default LandingPage;