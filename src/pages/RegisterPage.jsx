import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import bell from "../images/3dicon/jinglebells.png";
import logo_2023_black from "../images/logo_2023_black.svg";
import logo_black from "../images/logo_black.svg";
import checkbutton from "../images/3dicon/checkbutton.png";

const Wrapper = styled.div`
  background-color: #efec69;
  width: 100vw;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  padding-bottom: 200px;
`;
const Logo = styled.div`
  margin-top: -15px;
`;
const Txt = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 3vh 12vw 1vh;
  text-align: left;
`;
const SignInput = styled.input`
  height: 54px;
  width: 300px;
  margin-bottom: 9.52px;
  border-radius: 10.37px;
  border-width: 0.65px;
  border-color: #aeaeae; //border 색상 아래만 적용 안 됨
`;

const ErrorMessage = styled.span`
  margin: 1px;
  color: red;
  font-size: 13px;
`;

const KeywordButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-left: 45px;
  padding-right: 45px;
`;

const KeywordButton = styled.div`
  height: 30px;
  width: 95px;
  margin-right: 5px;
  margin-bottom: 5.5px;
  font-size: 16px;
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#8A8A8A")};
  border: 0.5px solid ${({ selected }) => (selected ? "#ED6134" : "#8A8A8A")};
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "#ED6134" : "#F3F3F3")};
  cursor: pointer;
`;

function RegisterPage(props) {
  /* 상태 관리 초기값 세팅 */
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  const keywordlist = [
    "즐거운",
    "행복한",
    "설레는",
    "후회없는",
    "뿌듯한",
    "사랑스러운",
    "고된",
    "값진",
    "대견한",
    "슬픈",
    "아름다운",
  ];

  /* 오류 메시지 전달을 위한 상태값 세팅 */
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPwdMessage, setConfirmPwdMessage] = useState("");

  /* 유효성 검사 위한 세팅 */
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPwd, setIsConfirmPwd] = useState(false);

  const onChangeName = (event) => {
    const currentName = event.target.value;
    setUserName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onChangeEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onChangePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  const onChangePassword2 = (event) => {
    const currentPasswordConfirm = event.target.value;
    setPassword2(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setConfirmPwdMessage("비밀번호와 비밀번호 확인이 같지 않습니다");
      setIsConfirmPwd(false);
    } else {
      setConfirmPwdMessage("");
      setIsConfirmPwd(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!(isName && isEmail && isConfirmPwd && isPassword)) {
      return alert("입력 정보를 확인해 주세요.");
    } else if (!(keywords.length == 2)) {
      return alert("키워드를 2개 선택해 주세요.");
    }

    /*      console.log('Name: ', username);
        console.log('Email: ', email);
        console.log('password: ', password);
        console.log('keyword', keywords); */

    let UserInfo = {
      username: username,
      email: email,
      password: password,
      password2: password2,
      keywords: keywords,
    };

    console.log(UserInfo);

    axios.post("http://13.125.156.150/accounts/register/", UserInfo)
      .then((response) => {
        console.log(response);
        alert("회원가입 성공!");
        navigate("/acounts/auth");
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err);
        } else {
          console.log(err);
          console.log(err.response.data);
          navigate("/accounts/auth"); // **일단 화면 넘어가기 위해서 추가해둠**
        }
      });
  };

  const handleKeywordToggle = (keyword) => {
    if (keywords.includes(keyword)) {
      setKeywords(keywords.filter((item) => item !== keyword));
    } else {
      if (keywords.length < 2) {
        setKeywords([...keywords, keyword]);
      }
    }
  };

  return (
    <Wrapper>
      <div>
        <form>
          <img src={bell} />
          <br />
          <img src={logo_2023_black} />
          <Logo>
            <img src={logo_black} />
          </Logo>

          <Txt>회고록 생성하기</Txt>
          <div>
            <SignInput
              id="username"
              name="username"
              value={username}
              onChange={onChangeName}
              type="text"
              placeholder="   이름"
            />
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
            <SignInput
              id="password2"
              name="password2"
              value={password2}
              onChange={onChangePassword2}
              placeholder="   비밀번호 확인"
            />
            <br />
            <ErrorMessage>
              {nameMessage}
              {emailMessage}
              {passwordMessage}
              {confirmPwdMessage}
            </ErrorMessage>
            <Txt>나의 2023 키워드</Txt>
            <KeywordButtonContainer>
              {keywordlist.map((item) => (
                <KeywordButton
                  key={item}
                  selected={keywords.includes(item)}
                  onClick={() => handleKeywordToggle(item)}
                >
                  {item}
                </KeywordButton>
              ))}
            </KeywordButtonContainer>
            <button
              formAction=""
              onClick={onSubmit}
              style={{
                padding: "1vh 65vw",
                border: "none",
                background: "transparent",
              }}
            >
              <img src={checkbutton} />
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default RegisterPage;
