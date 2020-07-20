import React from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components';
import Button from "../components/Atoms/Button/Button";
import topWave from "../assets/waves/startWave_1.svg";
import bottomWave from "../assets/waves/startWave_2.svg";
import Wave from "../components/Atoms/Wave";
import { device } from "../devices/breakpoints";

const SlideInAnimation = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  } 
`
const FadeInAnimation = keyframes`
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
`
const Avatar = styled.img `
  position: absolute;
  width: 250px;
  height: 250px;
  bottom: 20px;
  right: 20px;
  animation: ${SlideInAnimation} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;  
  
  @media ${device.laptop} { 
      width: 350px;
      height: 350px;
      bottom: 20px;
      right: 20px;
  }
`
const Message = styled.div`
  font-size: 1em;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  bottom: 7rem;
  right: 15rem; 
  
  @media ${device.laptop} { 
      font-size: 1em;
      bottom: 4rem;
      right: 26rem; 
  }  
`
const StyledButton = styled(Button)`
        margin-top: 50px;
        animation: ${FadeInAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${props => props.delay } both;
`
const TextLine = styled.h1`
        margin: 10px 0;
        animation: ${FadeInAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${props => props.delay } both;
`

const StartView = () => {
    return (
        <div id="home">
            <Wave src={topWave} position="top" />
            <Wave src={bottomWave} />
            <Wrapper>
                <Message>
                    <TextLine delay="1.5s"> Hi ! </TextLine>
                    <TextLine delay="2.5s"> My name is Przemyslaw </TextLine>
                    <TextLine delay="3.5s"> and I'm Front-End developer. </TextLine>
                    <StyledButton delay="4.5s"> Let's go for a journey!</StyledButton>
                </Message>
                <Avatar src="https://zapodaj.net/images/befd32d0e72b2.png" alt="Avatar" />
            </Wrapper>
        </div>
    );
};

export default StartView;