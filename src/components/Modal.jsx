import React, { useCallback, useEffect, useRef } from "react";
import Modal from 'react-modal';
import '../style/Modal.css';
import { useState } from 'react';
import present from '../images/3dicon/present.svg';

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };


function AgreementModal(props){
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const customStyles = {
        overlay: {
            zIndex: 1000,
            backgroundColor: '#00000099',
        },
        content: {
            width: '90vw',
            inset: 'unset',
            margin: '50vh auto',
            padding: 0,
            transform: 'translateY(-50%)',
            position: 'relative',
            borderRadius: '30px',
            backgroundColor: '#262626',
            background: '#262626',
            border: 'none',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        }
    };

    return(
        <Modal isOpen={modalIsOpen} style={customStyles}>
            <div className='modal-wrapper'>
                <img src={present} style={{display:"flex", margin:"auto", width:"50vw"}}/>
                <div className='content'>
                    <p>2023년 한 해 수고많으셨습니다!<br/>2023년을 돌아보러 갈 준비 되셨나요?</p>
                    <button className='close-btn' onClick={() => {
                        setModalIsOpen(false);
                    }}>시작하기</button>
                </div>
            </div>
        </Modal>
    )
}
export default AgreementModal;