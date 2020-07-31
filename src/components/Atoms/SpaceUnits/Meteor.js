import React from 'react';
import styled from "styled-components";
import {device} from "../../../devices/breakpoints";

const StyledMeteor = styled.img `
    opacity: 0.7;
    position: fixed;
    z-index: -1;
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

const Meteor = ({x, y, size, src, alt}) => {
    return (
        <StyledMeteor
            x = {x}
            y = {y}
            size = {size}
            src = {src}
            alt = {alt}
        />
    );
};

export default Meteor;