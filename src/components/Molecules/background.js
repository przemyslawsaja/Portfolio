import React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import Stars from "./Stars";
import { device } from "../../devices/breakpoints"

const PulsateAnimation = (deflection) => keyframes`
  0% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
  }
  50% {
      -webkit-transform: translateY(${deflection}px);
      transform: TranslateY(${deflection}px)
  }       
`
const Rocket = styled.img `
   position: absolute;
   width:  ${props => props.size};
   top:  ${props => props.y};
   left:  ${props => props.x};
   background-color:rgba(0, 0, 0, 0);
   transform: rotate(${props => props.rotation});
   animation: ${PulsateAnimation()} ${props => props.duration} ease-in-out infinite both ;
   z-index: 2;
`
const SpaceUnit = styled.img `
    opacity: 0.8;
    z-index: ${props => props.z};
    position: ${({ fixed }) => fixed ? 'fixed' : 'absolute' };
    width: ${props => props.size}px;
    top:  ${props => props.y};
    left:  ${props => props.x};
    animation:  ${props => PulsateAnimation(props.vertical)} ${props => props.duration} ease-in-out infinite both ;
    
    @media ${device.mobileL}{
      width: ${props => props.size*1.2}px;
    }
    @media ${device.tablet}{
      width: ${props => props.size*2}px;
      opacity: ${({opacity}) => opacity ? 1 : 0.5}
    }
     @media ${device.laptopL}{
      width: ${props => props.size*2.5}px;
      opacity: 1
    }
  
`
const Meteor = styled.img `
    opacity: 0.7;
    position: fixed;
    width:  ${props => props.size}px;
    top:  ${props => props.y};
    left:  ${props => props.x};
    
    @media ${device.tablet}{
      width: ${props => props.size*1.5}px;
    } 
    @media ${device.laptopL}{
      width: ${props => props.size*2}px;
      left:  ${props => props.x}+50;
      opacity: 1
    }      
`

const Background = () => {

    return (
        <>
            <SpaceUnit
                x="70vw"
                y="15vh"
                src="https://zapodaj.net/images/72b4e64e19dba.png"
                alt="Blue_Planet"
                duration="3s"
                vertical="20"
                size="150"
                fixed={true}
            />
            <SpaceUnit
                x="10vw"
                y="50vh"
                src="https://zapodaj.net/images/80bb44a31ee0f.png"
                alt="Red_Planet"
                duration="2.5s"
                vertical="15"
                size="25"
                fixed={true}
            />
            <SpaceUnit
                x="-30px"
                y="85vh"
                size="100"
                src="https://zapodaj.net/images/37ea92089e9a9.png"
                alt="Purple_Planet"
                duration="10s"
                z="1"
                opacity={true}
            />

            <Meteor
                x="-10px"
                y="10vh"
                size="150"
                src="https://zapodaj.net/images/cfda93d99f681.png"
                alt="Meteor1"
            />
            <Meteor
                x="40vw"
                y="60vh"
                size="200"
                src="https://zapodaj.net/images/c57b0689b1c0d.png"
                alt="Meteor2"
            />
            <Meteor
                x="5vw"
                y="65vh"
                size="100"
                src="https://zapodaj.net/images/362621750486f.png"
                alt="Meteor3"
            />
            <Stars />
        </>

    );
};

export default Background;

/*
            <Rocket
                size="50px"
                x="0vh"
                y="75vh"
                rotation="15deg"
                src="https://zapodaj.net/images/f5562d1a18875.png"
                alt="Rocket"
            />
 */