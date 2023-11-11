import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../images/key_logo.svg";
import tree from "../images/3dicon/tree.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #262626;
  align-items: center;
  //text-align: center;
`;

const Logo = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
`;
const Title = styled.div`
  color: #efec69;
  font-weight: 700;
  margin: 0 0 1vh 10vw;
  font-size: 1.5rem;
`;
const TitleTxt1 = styled.div`
  color: #fff;
  font-weight: 400;
  margin: 3vh 0 0 11vw;
  font-size: 0.9rem;
`;

const TitleTxt2 = styled.div`
  color: #fff;
  font-weight: 500;
  margin: 1vh 0 3vh 11vw;
  font-size: 0.6rem;
`;

const QuestionList = styled.div`
  background-color: #fff;
  color: #262626;
  width: 81vw;
  height: 5.5vh;
  line-height: 5.5vh;
  text-align: center;
  font-size: 0.8rem;
  margin: 1.5vh auto;
  border-radius: 41.85px;
`;

const OthersQuestionPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const questionlist = [
    { question: 1, content: "Q. 올해 이 사람에게 가장 고마웠던 일은?" },
    { question: 2, content: "Q. 올해 이 사람에게 가장 미안했던 일은?" },
    { question: 3, content: "Q. 올해 이 사람이 가장 빛났던 순간은?" },
    { question: 4, content: "Q. 올해 이 사람이 가장 웃겼던 순간은?" },
    { question: 5, content: "Q. 올해 이 사람과 함께한 행복했던 순간은?" },
    { question: 6, content: "Q. 올해 이 사람과 함께한 잊을 수 없던 순간" },
    { question: 7, content: "Q. 올해 이 사람에게 하고 싶었지만 못 했던 말" },
    { question: 8, content: "Q. 2023을 마무리하며 이 사람에게 한 마디" },
  ];

  /* 질문 받아오는 리스트 */
  const Qlist = () => {
    axios
      .get("http://localhost:8000/publicfarewell/")
      .then((response) => {
        const QList = response.data;
        console.log(QList);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  /* 사용자 이름 받아오기 */
  const getUserdata = () => {
    axios
      .get("http://localhost:8000/accounts/auth/", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.user.username);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error("Error fetching cards: ", error);
        } else {
          console.error("Error fetching cards: ", error);
        }
      });
  };

  const onClick = (item) => {
    navigate(`/publicfarewell/write/${item.question}`, {
      state: { questionNum: item.question, question: item.content },
    });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <Wrapper>
      <Logo>
        <img src={tree} style={{ width: "22vw", height: "17vh" }} />
      </Logo>
      <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
      <TitleTxt1>{username}님에게 한마디</TitleTxt1>
      <Title>질문 선택하기</Title>
      <TitleTxt2>질문에 답변하여 {username}님의 회고록을 채워주세요.</TitleTxt2>
      {questionlist.map((item) => (
        <QuestionList key={item.question} onClick={() => onClick(item)}>
          {item.content}
        </QuestionList>
      ))}
    </Wrapper>
  );
};

export default OthersQuestionPage;
