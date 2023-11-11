import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../images/key_logo.svg";
import backimg from "../../images/3dicon/myending4x.png";
import CheckButton from "../../components/CheckButton";
import { useNavigate } from "react-router-dom";
import EndingList from "../../components/EndingList";
import axios from "axios";

const Wrapper = styled.div`
  background-color: #262626;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  //padding: 5vh 7vw 0 7vw;
  text-align: center;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  color: #fff;
  font-weight: 700;
  padding: 5vh 0 0.7vh 0;
  font-size: 1.5rem;
  display: flex;
  padding-left: 7vw;
  z-index: 2;
`;
const Back = styled.div`
  > img {
    width: 100vw;
    z-index: 1;
    position: absolute;
    left: 0;
  }
`;
const ListBox = styled.div`
  margin-top: 10px;
  width: 85vw;
  height: 75vh;
  background-color: #fff173;
  z-index: 2;
  position: absolute;
  left: 7.5vw;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  overflow-y: scroll;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const StyledButton = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 7.5vw;
  z-index: 3;
`;

 let dummy = [
  {
    number: 1,
    question: "Q. 올해를 한 마디로 정의하자면?",
    answer:
      '올해는 "새로움과 안정감" 두 마리 토끼를 모두 잡은 해이다. 동아리와 여행을 통해 다양하고 새로운 경험을 할 수 있었고, 이제 어느정도 예측 가능한 대학교에서의 3학년 생활은 안정감을 주었다.',
  },
  {
    number: 2,
    question: "Q. 올해 가장 감사한 사람은 누구인가요?",
    answer: "부모님",
  },
  {
    number: 3,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 4,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 5,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 6,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 7,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 8,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 9,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 10,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
  {
    number: 11,
    question: "Q. 올해 가장 많이 들은 노래는?",
    answer: "post malone - chemical",
  },
]; 

const MyEndingPage = () => {
  const navigate = useNavigate();
  const [answerList, setAnswerList] = useState([]);

  const getAnswer = () => {
    axios
      .get("http://localhost:8000/myfarewell/ending")
      .then((response) => {
        console.log(response.data);
        setAnswerList(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <Wrapper>
      <Back>
        <img src={backimg} />
      </Back>
      <div style={{ display: "flex" }}>
        <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
        <Title>답변 모아보기</Title>
      </div>
      <ListBox>
        {dummy.map((list) => (
          <EndingList
            number={list.number}
            question={list.question}
            answer={list.answer}
          />
        ))}
        {answerList.map((list, index) => (
          <EndingList
            number={index + 1}
            question={list.question_text}
            answer={list.content}
          />
        ))}
      </ListBox>
      <StyledButton>
        <CheckButton
          onClick={() => {
            navigate("/thanku");
          }}
        />
      </StyledButton>
    </Wrapper>
  );
};

export default MyEndingPage;
