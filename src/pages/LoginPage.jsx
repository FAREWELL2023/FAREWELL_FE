import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";

import bell from '../images/3dicon/jinglebells.png'
import logo_2023_black from '../images/logo_2023_black.svg'
import logo_black from '../images/logo_black.svg';
import checkbutton from '../images/3dicon/checkbutton.png';

const Wrapper = styled.div`
    background-color: #EFEC69;
    width: 100vw;
    height: 100vh;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    padding-bottom: 200px;
`
const Logo = styled.div`
    margin-top: -15px;
`
const Txt = styled.div`
    font-size:16px;
    font-weight: bold;
    padding: 3vh 12vw 1vh;
    text-align:left;
`
const SignInput = styled.input`
    height: 54px;
    width:300px;
    margin-bottom:9.52px;
    border-radius: 10.37px;
    border-width: 0.65px;
    border-color: #AEAEAE; //border 색상 아래만 적용 안 됨
`;

const ErrorMessage = styled.span`
    margin: 1px;
    color:red;
    font-size:13px;
`
const LoginBlock = styled.div`
    padding: 5vh 0;
`;

const SubmitButton=styled.button`
    padding-top: 100vh;
`
function LoginPage(props){
    /* 상태 관리 초기값 세팅 */
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [emailMessage, setEmailMessage]=useState('');
    const [isEmail, setIsEmail]=useState(false);

    /* 로딩 메시지 */
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const onChangeEmail = (event) => {
        const currentEmail = event.target.value;
        setEmail(currentEmail);
        const emailRegExp =
          /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (!emailRegExp.test(currentEmail)) {
          setEmailMessage("이메일의 형식이 올바르지 않습니다!");
          setIsEmail(false);
        } else {
        setEmailMessage('');
          setIsEmail(true);
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onClickLogin = () =>{
        console.log('Login');
        console.log("email: ",email);
        console.log("password: ",password);
        axios.post('/accounts/auth', null, {
            params: {
                'user_email': email,
                'user_password': password
            }
        })
        .then(res=>{
            console.log(res)
            console.log('res.data.userEmail::', res.data.userEmail)
            console.log('res.data.msg::',res.data.msg)
            if(res.data.userEmail===undefined){
                console.log('=================', res.data.msg)
                alert('입력한 이메일이 일치하지 않습니다.')
            } else if (res.data.userEmail===null){
                console.log('=================','입력하신 비밀번호가 일치하지 않습니다.')
                alert('입력하신 비밀번호가 일치하지 않습니다.')
            } else if (res.data.userEmail===email){
                console.log('=================', '로그인 성공')
                sessionStorage.setItem('email', email)
            }
            //작업 완료 시 페이지 이동 
            /* document.location.href='/' */
        })
        .catch()
    }

/*     //페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(()=>{
        axios.get('/accounts/auth')
        .then(res=>console.log(res))
        .catch()
    },
    //페이지 호출 후 처음 한번만 호출되도록 [] 추가
    []) */ 

    return(
        <Wrapper>
        <form /* action="" method="post" /* onSubmit={onSubmitHandler} */>
        <div>
        <img src={bell}/>
            <br/>
            <img src={logo_2023_black}/>
            <Logo><img src={logo_black}/></Logo>
            <LoginBlock>
            <Txt>로그인</Txt>
                <SignInput 
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    type="email"
                    placeholder="   이메일"
                />
                <SignInput 
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}                
                    placeholder="   비밀번호"
                />
                <br/>
                <ErrorMessage>
                {emailMessage}
                </ErrorMessage>
                </LoginBlock>
                <SubmitButton onClick={onClickLogin} style={{padding:"29vh 65vw", border:"none", background: "transparent"}}>
                        <img src={checkbutton}/>
                </SubmitButton>
            </div>
            </form>
        </Wrapper>
    )
}

export default LoginPage;