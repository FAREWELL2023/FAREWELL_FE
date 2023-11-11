import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../images/key_logo.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  background-color: #262626;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  //padding: 5vh 7vw 0 7vw;
  text-align: center;
  align-items: center;
`;
const Title = styled.div`
  color: #fff;
  font-weight: 700;
  margin: 5vh 0 3vh 0;
  font-size: 1.5rem;
  display: flex;
  padding-left: 7vw;
`;
const Percent = styled.div`
  color: #fcfcfc;
  text-align: center;
  font-weight: 700;
  font-size: 3.4rem;
  margin-top: 5vh;
`;
const Txt = styled.div`
  color: #efec69;
  font-weight: 400;
  text-align: center;
  font-size: 1rem;
`;
const Complete = styled.div`
  color: #fcfcfc;
  text-align: center;
  font-weight: 700;
  margin-top: 5vh;
  margin-bottom: 3vh;
`;

const AnswerRatePage = () => {
  const [percent, setPercent] = useState(82);
  const [howmany, setHownamy] = useState(23);
  const navigate = useNavigate();

  const getRate = () => {
    axios.get("http://13.125.156.150/").then((response) => {
      setPercent();
      setHownamy();
    });
  };

  useEffect(() => {
    //getRate();
  }, []);

  return (
    <Wrapper>
      <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
      <Title>사용자님의 답변율은?</Title>
      <CircularProgressbarWithChildren
        value={percent}
        styles={{
          root: {
            height: "40vh",
            marginTop: "5vh",
          },
          path: {
            stroke: "#EFEC69",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          trail: {
            stroke: "#A6A2A2",
          },
        }}
      >
        <div>
          <Percent>{percent}%</Percent>
          <Txt>
            {howmany}개의 질문에 답변을 했고
            <br />
            {percent}%를 달성했어요!
          </Txt>
        </div>
      </CircularProgressbarWithChildren>
      <Complete>나의 회고록이 완성되었어요!</Complete>
      <Button
        title="보러가기"
        onClick={() => {
          navigate("/myending");
        }}
      />
    </Wrapper>
  );
};

export default AnswerRatePage;
