import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import logo from "../images/key_logo.svg";
import bell from "../images/3dicon/jinglebells.png";
import share from "../images/3dicon/share.png";
import menu from "../images/3dicon/menubar.png";
import write from "../images/3dicon/pencil.png";
import hidden from "../images/3dicon/hidden.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #262626;
  align-items: center;
`;

const Logo = styled.div`
  position: absolute;
  right: 30px;
`;
const Share = styled.img`
  position: absolute;
  display: flex;
  padding: 3vh 0 0 82vw;
  width: 7vw;
  height: 3vh;
  float: right;
`;
const Title = styled.div`
  color: #fff;
  font-weight: 700;
  margin: 3vh 0 1vh 10vw;
  font-size: 1.1rem;
`;
const QuestionList = styled.div`
  background-color: #fff;
  color: #262626;
  width: 81vw;
  height: 8vh;
  text-align: center;
  font-size: 0.8rem;
  margin: 1.5vh auto;
  border-radius: 16.34px;
`;

const Menu = styled.img`
  padding-top: 1.5vh;
  padding-right: 3vw;
  width: 3.5vw;
  height: 2.3vh;
  float: right;
`;

const Lock = styled.img`
  padding-top: 2vh;
  float: right;
  height: 10px;
  width: 10px;
`;

const Question = styled.div`
  line-height: 5vh;
  padding: 0vh 4vw;
  color: #262626;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Answer = styled.div`
  line-height: 1vh;
  color: #505050;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0vh 4vw;
`;

const SubmitButton = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 80%;
  left: 68%;
`;
const SubMenu = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  border-radius: 4px;
  width: 53px;
  height: 47px;
  right: 0vw;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const SubMenuItem = styled.div`
  color: #505050;
  font-weight: 300;
  font-size: 0.7rem;
  padding: 3px 0;
  &:not(:last-child) {
    border-bottom: 0.1px solid #262626; /* Remove border from the last SubMenuItem */
  }
`;

const FeedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [editedFeeds, setEditedFeeds] = useState([]);
  const [subMenuVisibility, setSubMenuVisibility] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [questionlist, setQuestionList] = useState([
    {
      number: 1,
      question: "Q. 올해 이 사람에게 가장 고마웠던 일은?",
      answer: "히히",
      hidden: false,
    },
  ]);

  const isLogin = () => {
    axios
      .get("http://13.125.156.150/publicfarewell/")
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        /*         if (userData.is_active) {
          console.log("User is active:", userData);
          setUserLoggedIn(userData.is_active);
        } else {
          console.log("User is not active.");
        } */
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const onClickWrite = () => {
    navigate(`/publicfarewell/questions`);
  };

  const toggleSubMenu = (index) => {
    const updatedSubMenuVisibility = [...subMenuVisibility];
    updatedSubMenuVisibility[index] = !updatedSubMenuVisibility[index];
    setSubMenuVisibility(updatedSubMenuVisibility);
  };

  const handleCopyClipBoard = async (text: string) => {
    console.log(location);
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const hideItem = (index) => {
    const updatedList = [...questionlist];
    //console.log("1: ", updatedList[index].hidden);
    if (updatedList[index].hidden === false) {
      updatedList[index].hidden = true;
    } else if (updatedList[index].hidden === true) {
      updatedList[index].hidden = false;
    }
    //console.log("2: ", updatedList[index].hidden);
    updatedList[index].showImage = !updatedList[index].showImage;
    setQuestionList(updatedList);
  };

  useEffect(() => {
    axios
      .get("http://13.125.156.150/publicfarewell/")
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        /*         if (userData.is_active) {
        console.log("User is active:", userData);
        setUserLoggedIn(userData.is_active);
      } else {
        console.log("User is not active.");
      } */
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    // fecthFeeds();
    // SubMenu visible 여부 false로 초기화
    const initialSubMenuVisibility = new Array(feeds.length).fill("false"); //'false'로 안 하면 boolean값 에러 뜸
    setSubMenuVisibility(initialSubMenuVisibility);
  }, [feeds]);

  const fetchFeeds = () => {
    axios
      .get("http://13.125.156.150/publicfarewell/")
      .then((response) => {
        setFeeds(response.data);
        const intialEditedFeeds = {};
        response.data.forEach((feed) => {
          intialEditedFeeds[feed.id] = {
            title: feed.question,
            content: feed.answer,
          };
        });
        setEditedFeeds(intialEditedFeeds);
      })
      .catch((error) => {
        console.error("Error fetching feeds: ", error);
      });
  };

  const userInfo = () => {
    axios
      .get("http://13.125.156.150/accounts/auth/")
      .then((response) => {
        const userName = response.data.user.username;
      })
      .catch((error) => {
        console.error("Error Getting Name: ", error);
      });
  };

  const deleteFeed = (id) => {
    axios
      .delete("http://13.125.156.150/publicfarewell/")
      .then((response) => {
        fetchFeeds();
      })
      .catch((error) => {
        console.error("Error deleting feed: ", error);
      });
  };

  return (
    <Wrapper>
      <Logo>
        <img src={bell} style={{ width: "30vw", height: "11vh" }} />
      </Logo>
      <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
      {/*             <Share src={share} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}/> */}
      <Share
        src={share}
        onClick={() =>
          handleCopyClipBoard(`http://localhost:3000${location.pathname}`)
        }
      />
      <Title>{userName}님에게 한마디</Title>
      {userLoggedIn
        ? questionlist.map(
            (feed, index /* ? feeds.map((feed, index) => ( */) => (
              <QuestionList key={index}>
                <Menu src={menu} onClick={() => toggleSubMenu(index)} />
                {feed.showImage && <Lock src={hidden} />}
                <SubMenu visible={subMenuVisibility[index]}>
                  <SubMenuItem onClick={deleteFeed}>삭제하기</SubMenuItem>
                  <SubMenuItem onClick={() => hideItem(index)}>
                    {feed.hidden == false ? "나만보기" : "전체공개"}
                  </SubMenuItem>
                </SubMenu>
                <Question>{feed.question}</Question>
                <Answer>{feed.answer}</Answer>
              </QuestionList>
            )
          )
        : questionlist.map((feed, index) =>
            feed.hidden ? null : (
              <QuestionList key={index}>
                <Question>{feed.question}</Question>
                <Answer>{feed.answer}</Answer>
              </QuestionList>
            )
          )}

      <SubmitButton onClick={onClickWrite}>
        <img src={write} style={{ width: "28vw", height: "10vh" }} />
      </SubmitButton>
    </Wrapper>
  );
};

export default FeedPage;
