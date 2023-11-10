import React from 'react';
import styled from 'styled-components';
import logo from '../../images/lastlogo.png';
import calendar from '../../images/3dicon/lastcalendar.png';

const Wrapper = styled.div`
    background-color: #262626;
    width: 100%;
    height: 100vh;
    text-align: center;
    align-items: center;
`
const Card = styled.div`
    border-radius: 30px;
    background: linear-gradient(105deg, rgba(237, 237, 237, 0.90) 14.68%, rgba(255, 255, 255, 0.90) 45.34%, rgba(241, 241, 241, 0.78) 94.38%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin: auto;
    width: 80%;
    height: 35vh;
    margin-top: 10vh;
    padding: 20px 0 20px 0;
`
const NextYear = styled.div`
    color: #292929;
    font-weight: 500;
    font-size: 0.8rem;
    margin-top: 10px;
`
const Thank = styled.div`
    color: #FFF;
    font-weight: 600;
    margin-top: 10vh;
`

const ThxPage = () => {
    return (
        <Wrapper>
            <img src={logo} style={{width:"55vw", marginTop:"7vh"}}/>
            <Card>
                <img src={calendar} style={{width:"35vw"}}/>
                <NextYear>Farewell과 함께 돌아본 2023년은 어떠셨나요?<br/><br/>
                2023년의 회고를 통해<br/>더 나은 2024년을 맞이하시길<br/>Farewell이 응원하겠습니다!</NextYear>
            </Card>
            <Thank>서비스를 이용해주셔서<br/>감사합니다 ! 💌</Thank>
        </Wrapper>
    );
};

export default ThxPage;