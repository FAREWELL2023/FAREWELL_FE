import React, { useState } from "react";
import styled from "styled-components";

import bell from '../images/3dicon/jinglebells.png'
import logo_2023_black from '../images/logo_2023_black.svg'
import logo_black from '../images/logo_black.svg';
import checkbutton from '../images/3dicon/checkbutton.png';

const Wrapper = styled.div`
    background-color: #EFEC69;
    width: 100vw;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    padding-bottom: 200px;
`

const Logo = styled.div`
    margin-top: -15px;
`

function LoginPage(props){
    /* 상태 관리 초기값 세팅 */
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return(
        <Wrapper>
        <div>
        <img src={bell}/>
            <br/>
            <img src={logo_2023_black}/>
            <Logo><img src={logo_black}/></Logo>

        <button formAction="" style={{padding:"1vh 65vw", border:"none", background: "transparent"}}>
                <img src={checkbutton}/>
            </button> 
        </div>
        </Wrapper>
    )
}

export default LoginPage;