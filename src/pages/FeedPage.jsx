import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';

import logo from '../images/key_logo.svg';
import bell from '../images/3dicon/jinglebells.png';
import menu from '../images/3dicon/menubar.png';
import write from '../images/3dicon/pencil.png';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #262626;;
    align-items: center;
`;

const Logo = styled.div`
    position: absolute;
    right: 30px;
`
const Title = styled.div`
    color: #fff;
    font-weight: 700;
    margin: 3vh 0 1vh 10vw;
    font-size: 1.1rem;
`
const QuestionList=styled.div`
    background-color:#FFF;
    color:#262626;
    width:81vw;
    height:8vh;
    text-align:center;
    font-size: 0.8rem;
    margin: 1.5vh auto;
    border-radius:16.34px;
`;

const Menu = styled.img`
    padding-top: 1.5vh;
    padding-right :4vw;  
    width:3.5vw;
    height:2.3vh;
    float:right;
    cursot:pointer;
`;

const Question=styled.div`
    line-height:5vh;
    padding:0vh 4vw;
    color: #262626;
    font-weight: 500;
    font-size: 0.9rem;
`;

const Answer=styled.div`
    line-height:1vh;
    color: #505050;
    font-weight: 400;
    font-size: 0.8rem;
    margin: 0vh 4vw;
`;

const SubmitButton=styled.button`
    border:none;
    background: transparent;
    position:fixed;
    top: 80%;
    left: 68%;
`
const SubMenu = styled.div`
    position: absolute;
    background-color: #D9D9D9;
    border-radius:4px;
    width:53px;
    height:47px;
    right: 0vw; 
    display: ${props => props.visible ? 'block' : 'none'};
`;

const SubMenuItem = styled.div`
    color:#505050;
    font-weight: 300;
    font-size: 0.7rem;
    padding: 3px 0;
    
    &:not(:last-child) {
        border-bottom: 0.1px solid #262626;; /* Remove border from the last SubMenuItem */
    }
`;

const FeedPage = () => {
    const navigate = useNavigate();
    const [feeds, setFeeds]=useState([]);
    const [editedFeeds, setEditedFeeds]=useState([]);
    const [subMenuVisibility, setSubMenuVisibility] = useState([]); // State for sub-menu visibility

/*      const questionlist = [
        {number: 1, question: "Q. 올해 이 사람에게 가장 고마웠던 일은?", answer:"히히"},
        {number: 2, question: "Q. 올해 이 사람에게 가장 미안했던 일은?", answer:"히히"},
        {number: 3, question: "Q. 올해 이 사람이 가장 빛났던 순간은?", answer:"히히"},
        {number: 4, question: "Q. 올해 이 사람이 가장 웃겼던 순간은?", answer:"히히"},
        {number: 5, question: "Q. 올해 이 사람과 함께한 행복했던 순간은?", answer:"히히"},
        {number: 6, question: "Q. 올해 이 사람과 함께한 잊을 수 없던 순간", answer:"히히"},
        {number: 7, question: "Q. 올해 이 사람에게 하고싶었지만 못 했던 말", answer:"히히"},
        {number: 8, question: "Q. 2023을 마무리하며 이 사람에게 한 마디", answer:"히히"}
    ];     */
    
    const onClickWrite=()=>{
        navigate(`/myfeed/questions`);
    }

    const toggleSubMenu = (index) => {
        // Toggle the visibility of the sub-menu for a specific question
        const updatedSubMenuVisibility = [...subMenuVisibility];
        updatedSubMenuVisibility[index] = !updatedSubMenuVisibility[index];
        setSubMenuVisibility(updatedSubMenuVisibility);
    };

    useEffect(() => {
        // fecthFeeds();
        // SubMenu visible 여부 false로 초기화
        const initialSubMenuVisibility = new Array(feeds.length).fill('false'); //'false'로 안 하면 boolean값 에러 뜸
        setSubMenuVisibility(initialSubMenuVisibility);
    }, [feeds]);

/*     const fetchFeeds = () => {
        axios.get('http://')
        .then(response=>{
            setFeeds(response.data);
            const intialEditedFeeds = {};
            response.data.forEach(feed=>{
                intialEditedFeeds[Feed.id]={title:feed.question, content: feed.answer};
            });
            setEditedFeeds(intialEditedFeeds);
        })
        .catch(error=>{
            console.error('Error fetching feeds: ', error);
        });
    };

    const deleteFeed = (id) => {
        axios.delete('http://')
        .then(response=>{
            fetchFeeds();
        })
        .catch(error=>{
            console.error('Error deleting feed: ',error);
        });
    }; */

    return (
        <Wrapper>    
            <Logo><img src={bell} style={{width: "30vw", height:"11vh"}}/></Logo>
            <img src={logo} style={{display:"flex", padding: "5vh 0 0 7vw"}}/>
            <Title>name님에게 한마디</Title>
{/*             {questionlist.map((feed, index) => ( */}
                {feeds.map((feed, index) => (    
                <QuestionList key={index}>
                    <Menu src={menu} onClick={() => toggleSubMenu(index)} />
                    <SubMenu visible={subMenuVisibility[index]}>
                        <SubMenuItem /* onClick={deleteFeed} */>삭제하기</SubMenuItem>
                        <SubMenuItem>나만보기</SubMenuItem>
                    </SubMenu>
                    <Question>{feed.question}</Question>
                    <Answer>{feed.answer}</Answer>
                </QuestionList>
            ))}
            <SubmitButton onClick={onClickWrite}>
                <img src={write} style={{ width: "28vw", height: "10vh" }} />
            </SubmitButton>
        </Wrapper>
    );
};

export default FeedPage;  