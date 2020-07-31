import React from 'react';
import {device} from "../../devices/breakpoints";
import styled from "styled-components";
import { PopOut, SlideInDown } from "../../Animations";

const StyledAvatar = styled.img `
  width: 175px;
  height: 175px;
  animation: ${({isRocketLaunched}) => isRocketLaunched ? PopOut : SlideInDown } 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 
             ${({isRocketLaunched}) => isRocketLaunched ? '1s' : '0.7s'} both;  
             
  @media ${device.mobileM} { 
    width: 225px;
    height: 225px;
  }
  @media ${device.tablet} {
    width: 275px;
    height: 275px;
  }
  @media ${device.laptop} { 
    width: 350px;
    height: 350px;
    bottom: 20px;
    right: 20px;
  }
`

const Avatar = ({src, isRocketLaunched}) => {
    return (
        <StyledAvatar src={src} alt="Avatar" isRocketLaunched={isRocketLaunched}/>
    );
};

export default Avatar;