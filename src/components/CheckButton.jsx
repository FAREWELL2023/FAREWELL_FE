import React from 'react';
import styled from 'styled-components';
import checkicon from '../images/check.svg';

const CheckBtn = styled.div`
    background: #FFF173;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    width: 27vw;
    height: 10vh;
    line-height: 11vh;
    border-radius: 50px;
    cursor: pointer;
    margin-left: auto;
`

const CheckButton = (props) => {
    const { onClick } = props;

    return (
        <CheckBtn onClick={onClick}><img src={checkicon} style={{}}/></CheckBtn>
    );
};

export default CheckButton;