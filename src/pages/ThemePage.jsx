import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import theme_group from '../images/3dicon/theme_group.png';
import lock from '../images/3dicon/lock.png'
import palmtree from '../images/3dicon/palmtree.png'
import sunflower from '../images/3dicon/sunflower.png'
import rainbow from '../images/3dicon/rainbow.png'
import mistletoe from '../images/3dicon/mistletoe.svg'

const Wrapper = styled.div`
    background-color: #262626;
    width: 100vw;
    height: 100vh;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    padding-bottom: 0px;
    position:relative;
`
const Logo = styled.img`
    width:395px;
    height:180px; 
    margin: 10px -5px;
`
const ContentBox = styled.div`
    background-color:#FFFFFF;
    color: #262626;
    height:80px;
    width:314px;
    border-radius:40px;
    margin: 0 auto;
    line-height:80px;
    text-align: center;
    margin-bottom:6vh;
    display: flex;
    align-items: center;
`;

const ContentLogo = styled.img`
    padding-left: 14vw;
`;

const ContentTxt = styled.span`
    font-size: 1.2rem;
    font-weight: 400px;
`;

const ThemePage = () => {
    const navigate = useNavigate();

    const [isPublished1, setIsPublished1] = useState(false);
    const [isPublished2, setIsPublished2] = useState(false);
    const [isPublished3, setIsPublished3] = useState(false);
    const [isPublished4, setIsPublished4] = useState(false);

    // 공개 여부 설정 로직
    const determinePublicationStatus = () => {
      const currentDate = new Date();
      const publishDate1 = new Date('2023-10-01'); //연결 확인 위해 임시로 바꿔둠!
      const publishDate2 = new Date('2023-12-08');
      const publishDate3 = new Date('2023-12-15');
      const publishDate4 = new Date('2023-12-22');
  
    if (currentDate >= publishDate1) {
        setIsPublished1(true);
    }
    if (currentDate >= publishDate2) {
        setIsPublished2(true);
      }
    if (currentDate >= publishDate3) {
        setIsPublished3(true);
      }
    if (currentDate >= publishDate4) {
        setIsPublished4(true);
      }
    };
  
    useEffect(() => {
        determinePublicationStatus();
      }, []);

    return (
        <div>
            <Wrapper>
            <Logo src={theme_group}/>
                {isPublished1?(
                    <div>
                        <ContentBox onClick={() => {
                            navigate('/mylist', {state: {themeid: 1, theme: '따뜻했던 2023'}}); // 질문 페이지로
                        }}>
                            <ContentLogo src={rainbow} style={{width:"45px", height: "59px", padding: "0px 0px 0px 15vw"}}/>
                                <ContentTxt style={{ padding: "0px 16px"}}>따뜻했던 2023</ContentTxt>
                        </ContentBox>
                    </div>
                ): (
                    <div>
                    <ContentBox>
                        <ContentLogo src={lock} style={{width:"80px", height:"40px"}} />
                            <ContentTxt >12/01 공개</ContentTxt>
                    </ContentBox>
                    </div>
                )}
                {isPublished2?(
                    <div>
                        <ContentBox onClick={() => {
                            navigate('/hotlist', {state: {themeid: 2, theme: '뜨거웠던 2023'}}); // 질문 페이지로
                        }}>
                            <ContentLogo src={palmtree} style={{width:"39px", height: "79px", padding: "0px 0px 0px 16vw"}}/>
                                <ContentTxt style={{ padding: "0px 20px"}}>뜨거웠던 2023</ContentTxt>
                        </ContentBox>
                    </div>
                ): (
                    <div>
                    <ContentBox>
                    <ContentLogo src={lock} style={{width:"80px", height:"40px"}} />
                            <ContentTxt>12/08 공개</ContentTxt>
                    </ContentBox>
                    </div>
                )}
                {isPublished3?(
                    <div>
                        <ContentBox onClick={() => {
                            navigate('/coldlist', {state: {themeid: 3, theme: '선선했던 2023'}}); // 질문 페이지로
                        }}>
                        <ContentLogo src={sunflower} style={{width:"65px", height: "75px", padding: "0px 0px 0px 13vw"}}/>
                                <ContentTxt style={{ padding: "0px 5px"}}>선선했던 2023</ContentTxt>
                        </ContentBox>
                    </div>
                ): (
                    <div>
                    <ContentBox>
                    <ContentLogo src={lock} style={{width:"80px", height:"40px"}} />
                            <ContentTxt>12/15 공개</ContentTxt>
                    </ContentBox>
                    </div>
                )}
                {isPublished4?(
                    <div>
                        <ContentBox onClick={() => {
                            navigate('/rolist', {state: {themeid: 4, theme: '낭만웠던 2023'}}); // 질문 페이지로
                        }}>
                        <ContentLogo src={mistletoe} style={{width:"52px", height: "54px", padding: "0px 0px 0px 14vw"}}/>
                                <ContentTxt style={{ padding: "0px 15px"}}>낭만있던 2023</ContentTxt>
                        </ContentBox>
                    </div>
                ): (
                    <div>
                    <ContentBox>
                    <ContentLogo src={lock} style={{width:"80px", height:"40px"}} />
                            <ContentTxt>12/22 공개</ContentTxt>
                    </ContentBox>
                    </div>
                )}

            </Wrapper>
        </div>
    );
};

export default ThemePage;