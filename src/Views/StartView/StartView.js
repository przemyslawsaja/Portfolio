import React from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components';
import Button from "../../components/Button/Button";
import topWave from "../../assets/topWave.svg";
import bottomWave from "../../assets/bottomWave.svg";



const StartView = () => {

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

    const TopWave = styled.img`
        position: absolute;
        z-index: -1;
        top: 0;
    `
    const BottomWave = styled.img`
        position: absolute;
        z-index: -1;
        bottom: 0;
    `

    const Avatar = styled.img `
        width: 450px;
        height: 450px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        animation: ${SlideInAnimation} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
    `

    const Message = styled.div`
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        position: absolute;
        bottom: 7rem;
        right: 33rem; 
    `

    const StyledButton = styled(Button)`
        margin-top: 50px;
        animation: ${FadeInAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${props => props.delay } both;
    `

    const TextLine = styled.h1`
        font-size: 3em;
        margin: 10px 0;
        animation: ${FadeInAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${props => props.delay } both;
      }
    `

    return (
        <>
            <Message>
                <TextLine delay="1.5s">  Hi ! </TextLine>
                <TextLine delay="2.5s"> My name is Przemysław </TextLine>
                <TextLine delay="3.5s"> and I'm Front-End developer. </TextLine>
                <StyledButton delay="4.5s"/>
            </Message>


            <Avatar src="https://zapodaj.net/images/befd32d0e72b2.png" alt="Avatar" />

            <TopWave src={topWave} alt={"topWave"} />
            <BottomWave src={bottomWave} alt={"bottomWave"} />

        </>
    );
};

export default StartView;