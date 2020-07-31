import React from 'react';
import styled from "styled-components";
import {device} from "../../../devices/breakpoints";
import { PulsateAnimation } from "../../../Animations";

const StyledPlanet = styled.img
    `  
    position: ${({ fixed }) => fixed ? 'fixed' : 'absolute' };
    z-index: ${({ onTop }) => onTop ? '2' : '-1' };
    top:  ${props => props.y};
    left:  ${props => props.x};
    width: ${props => props.size}px;
    animation:  ${props => PulsateAnimation(props.vertical)} ${props => props.duration} ease-in-out infinite both ;
    opacity: ${({ onTop }) => onTop ? '0' : '0.8' };
        
    @media ${device.mobileL}{
      width: ${props => props.size*1.2}px;
      
    }
    @media ${device.tablet}{
      width: ${props => props.size*2}px;
      opacity: ${({ onTop }) => onTop ? '1' : '0.8' };
    }
     @media ${device.laptopL}{
      width: ${props => props.size*2.5}px;
      opacity: 1
    }
`

const Planet = ({ x, y, src, alt, duration, vertical, size, fixed, onTop, classname}) => {
    return (
        <StyledPlanet
            classname={classname}
            x ={x}
            y = {y}
            src = {src}
            alt = {alt}
            duration = {duration}
            vertical = {vertical}
            size = {size}
            fixed = {fixed}
            onTop = {onTop}
        />
    );
};

export default Planet;