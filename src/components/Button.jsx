import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.div`
    font-size: 1em;
    font-weight: 700;
    border: 0px;
    cursor: pointer;
    border-radius: 64.5px;
    background: #FFF173;
    text-align: center;
    color: #000;
    width: 205px;
    height: 55px;
    line-height: 55px;
    margin: auto;
`

const Button = (props) => {
    const { title, onClick, type} = props;
    return (
        <StyleButton onClick={onClick} type={type}>
            { title || "버튼"}
        </StyleButton>
    );
};

export default Button;