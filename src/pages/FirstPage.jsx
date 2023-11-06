import React from 'react';
import styled from 'styled-components';
import logo_2023 from '../images/logo_2023.svg';
import logo from '../images/logo.svg';
import bell from '../images/3dicon/bell.jpg';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #262626;;
    align-items: center;
    text-align: center;
`
const LogoBlock = styled.div`
    padding-top: 5vh;
`
const Logo = styled.div`
    margin-top: -15px;
`

const FirstPage = () => {
    return (
        <Wrapper>
            <LogoBlock>
                <img src={logo_2023}/>
                <Logo><img src={logo}/></Logo>
            </LogoBlock>
        </Wrapper>
    );
};

export default FirstPage;