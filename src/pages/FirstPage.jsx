import React from "react";
import styled from "styled-components";
import logo_2023 from "../images/logo_2023.svg";
import logo from "../images/logo.svg";
import bell from "../images/3dicon/bell.jpg";
import my2023 from "../images/3dicon/mistletoe.svg";
import people2023 from "../images/3dicon/heartplace.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #262626;
  align-items: center;
  text-align: center;
`;
const LogoBlock = styled.div`
  padding-top: 5vh;
`;
const Logo = styled.div`
  margin-top: -15px;
`;
const TxtBox = styled.div`
  padding: 20px 20px 30px 20px;
  border-radius: 10.37px;
  background: #fff;
  margin: 7vh 40px 3vh 40px;
`;
const TitleLine = styled.div`
  display: flex;
`;
const Title = styled.div`
  color: #262626;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 7px;
  margin-left: 3px;
`;
const SubTxt = styled.div`
  color: #8a8a8a;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: left;
  margin-left: 5px;
`;
const LoginButton = styled.div`
  border-radius: 50px;
  border: 1px solid #fff;
  background: #262626;
  color: #fff;
  text-align: center;
  padding: 2vh;
  cursor: pointer;
  font-weight: 500;
  margin: 2vh 40px;
`;
const SignButton = styled.div`
  border-radius: 50px;
  background: #fff;
  text-align: center;
  padding: 2vh;
  cursor: pointer;
  color: #262626;
  font-weight: 500;
  margin: 2vh 40px;
`;

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LogoBlock>
        <img src={logo_2023} />
        <Logo>
          <img src={logo} />
        </Logo>
      </LogoBlock>
      <TxtBox>
        <TitleLine>
          <img src={my2023} />
          <Title>내가 쓰는 나의 2023</Title>
        </TitleLine>
        <SubTxt>
          2023년을 마무리하는 문답에 답하며
          <br />
          나의 2023년을 되돌아보세요!
        </SubTxt>
      </TxtBox>
      <TxtBox style={{ marginTop: "-10px" }}>
        <TitleLine>
          <img src={people2023} />
          <Title>남이 쓰는 나의 2023</Title>
        </TitleLine>
        <SubTxt>
          익명으로 질문에 답하며
          <br />
          친구들의 2023 회고에 참여해보세요!
          <br />
          <br />
          익명을 통해 그동안 전하지 못했던 말을
          <br />
          전할 수도 있습니다.
          <br />{" "}
        </SubTxt>
      </TxtBox>
      <LoginButton
        onClick={() => {
          navigate("/accounts/login"); // 로그인페이지로
        }}
        style={{ marginTop: "5vh" }}
      >
        로그인
      </LoginButton>
      <SignButton
        onClick={() => {
          navigate("/accounts/signup"); // 회원가입페이지로
        }}
      >
        회원가입
      </SignButton>
    </Wrapper>
  );
};

export default FirstPage;
