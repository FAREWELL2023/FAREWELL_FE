import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import theme_group from '../images/3dicon/theme_group.png';
import lock from '../images/3dicon/lock.png'

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
const Logo = styled.img`
    width:395px;
    height:180px; 
    margin: 10px -5px;
`
const ContentBox = styled.div`
    background-color:#FFFFFF;
    color: #262626;
    height:80px;
    width:314px;
    border-radius:40px;
    margin: 0 auto;
    line-height:80px;
    text-align: center;
    margin-bottom:6vh;
`;

const ThemePage = () => {
    return (
        <div>
            <Wrapper>
            <Logo src={theme_group}/>
            <ContentBox>
           {/*  <img src={lock} style={{width:"80px", height:"40px"}}/>  */}
            12/00 공개
            </ContentBox>
            <ContentBox>
            12/00 공개
            </ContentBox>
            <ContentBox>
            12/00 공개
            </ContentBox>
            <ContentBox>
            12/00 공개
            </ContentBox>
            </Wrapper>
        </div>
    );
};

export default ThemePage;