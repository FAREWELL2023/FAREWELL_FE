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
  position: relative;
  right: 30px;
`;

const Bell = styled.div`
  display: flex;
  padding: 0vh 0 0 5vw;
  position: absolute;
  right: -10px;
`;

const Share = styled.img`
  position: relative;
  display: flex;
  padding: 3vh 10vw 0 80vw;
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

const FeedEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [editedFeeds, setEditedFeeds] = useState([]);
  const [subMenuVisibility, setSubMenuVisibility] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [questionlist, setQuestionList] = useState([
    {
      number: 1,
      name: "Q. 올해 이 사람에게 가장 고마웠던 일은?",
      content: "멋사 세션 때 이해가 잘 안 되는 부분을 알려줬다!",
      hidden: false,
    },
    {
      number: 1,
      name: "Q. 올해 이 사람에게 가장 고마웠던 일은?",
      content: "뒷풀이 끝나고 데리러 와줬을 때...",
      hidden: false,
    },
    {
      number: 2,
      name: "Q. 올해 이 사람에게 가장 미안했던 일은?",
      content: "아이스크림 사주마자 쏟은 거 ㅜㅜ 미안해! ",
      hidden: false,
    },
    {
      number: 3,
      name: "Q. 올해 이 사람이 가장 빛났던 순간은?",
      content: "4호선톤에서 발표할 때! >< ",
      hidden: false,
    },
    {
      number: 4,
      name: "Q. 올해 이 사람이 가장 웃겼던 순간은?",
      content: "뒷풀이 끝나고 집 가는 길에 넘어졌을 때  ",
      hidden: false,
    },
    {
      number: 5,
      name: "Q. 올해 이 사람과 함께한 행복했던 순간은?",
      content: "4호선톤 수상!!!",
      hidden: false,
    },
    {
      number: 6,
      name: "Q. 올해 이 사람과 함께한 잊을 수 없던 순간",
      content: "4호선톤 수상했던 순간!!!",
      hidden: false,
    },
    {
      number: 6,
      name: "Q. 올해 이 사람과 함께한 잊을 수 없던 순간",
      content: "같이 여행 갔던 뜨거운 여름!",
      hidden: false,
    },
    {
      number: 7,
      name: "Q. 올해 이 사람에게 하고 싶었지만 못 했던 말",
      content: "4호선톤 수상했던 순간!!!",
      hidden: false,
    },
    {
      number: 8,
      name: "Q. 2023을 마무리하며 이 사람에게 한 마디",
      content: "함께여서 행복했고 2024년도 행복하자!",
      hidden: false,
    },
  ]);

  /* 사용자 이름 받아 오기  */
  const getUserdata = () => {
    axios
      .get("http://localhost:8000/accounts/auth/", {
        withCredentials: true,
      })
      .then((response) => {
        setUsername(response.data.user.username);
      })
      .catch((error) => {
        console.error("Error Getting Name: ", error);
      });
  };

  /* 유저 정보 받아오는 기능 */
  const isLogin = () => {
    axios
      .get("http://localhost:8000/publicfarewell/")
      .then((response) => {
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

  /* 링크 공유하기 */
  const handleCopyClipBoard = async (text: string) => {
    console.log(location);
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  /* 글쓰기 */
  const onClickWrite = () => {
    navigate(`/publicfarewell/questions`);
  };

  /* 삭제/숨기기 설정 토글 */
  const toggleSubMenu = (index) => {
    const updatedSubMenuVisibility = [...subMenuVisibility];
    updatedSubMenuVisibility[index] = !updatedSubMenuVisibility[index];
    setSubMenuVisibility(updatedSubMenuVisibility);
  };

  /* 삭제하기 */
  const deleteFeed = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/publicfarewell/${id}/`)
      .then((response) => {
        fetchFeeds();
      })
      .catch((error) => {
        console.error("Error deleting feed: ", error);
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with status code:",
            error.response.status
          );
          console.error("Server response data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      });
  };

  /* 숨기기 */
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

  const fetchFeeds = () => {
    axios
      .get("http://127.0.0.1:8000/publicfarewell/")
      .then((response) => {
        console.log(response.data.results);
        console.log("메롱1");
        setFeeds(response.data.results);
        /*         const intialEditedFeeds = {};
        response.data.forEach((feed) => {
          intialEditedFeeds[feed.id] = {
            title: feed.question_text,
            content: feed.content,
          };
        });
        setEditedFeeds(intialEditedFeeds); */
      })
      .catch((error) => {
        console.error("Error fetching feeds: ", error);
      });
  };

  /*   useEffect(() => {
    getUserdata();
    axios
      .get("http://127.0.0.1:8000/publicfarewell/")
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        console.log("메롱2");
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    fetchFeeds();
    // SubMenu visible 여부 false로 초기화
    const initialSubMenuVisibility = new Array(feeds.length).fill("false"); //'false'로 안 하면 boolean값 에러 뜸
    setSubMenuVisibility(initialSubMenuVisibility);
  }, [feeds]); */

  const getFeeds = () => {
    axios
      .get("http://127.0.0.1:8000/publicfarewell/")
      .then((response) => {
        console.log("===============");
        console.log("get Feeds");
        console.log(response.data);
        console.log(response.data.results);
        setFeeds(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserdata();
    getFeeds();
  }, []);

  return (
    <Wrapper>
      <Logo>
        <Bell>
          <img src={bell} style={{ width: "30vw", height: "11vh" }} />
        </Bell>
      </Logo>
      <img src={logo} style={{ display: "flex", padding: "5vh 0 0 7vw" }} />
      {/*             <Share src={share} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}/> */}
      <Share
        src={share}
        onClick={() =>
          handleCopyClipBoard(`http://localhost:8000${location.pathname}`)
        }
      />
      <Title>{username}님에게 한마디</Title>
      {userLoggedIn
        ? feeds.map((feed, index /* ? feeds.map((feed, index) => ( */) => (
            <QuestionList key={index}>
              <Menu src={menu} onClick={() => toggleSubMenu(index)} />
              {feed.showImage && <Lock src={hidden} />}
              <SubMenu visible={subMenuVisibility[index]}>
                <SubMenuItem onClick={deleteFeed}>삭제하기</SubMenuItem>
                <SubMenuItem onClick={() => hideItem(index)}>
                  {/*     hidden 속성이 없어서 임시로 바꿔둠              {feed.hidden == false ? "나만보기" : "전체공개"} */}
                  {feed.hidden == false ? "전체공개" : "나만보기"}
                </SubMenuItem>
              </SubMenu>
              <Question>{feed.question}</Question>
              <Answer>{feed.content}</Answer>
            </QuestionList>
          ))
        : feeds.map((feed, index) =>
            feed.hidden ? null : (
              <QuestionList key={index}>
                <Question>{feed.question}</Question>
                <Answer>{feed.content}</Answer>
              </QuestionList>
            )
          )}

      <SubmitButton onClick={onClickWrite}>
        <img src={write} style={{ width: "28vw", height: "10vh" }} />
      </SubmitButton>
    </Wrapper>
  );
};

export default FeedEditPage;
