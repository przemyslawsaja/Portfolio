import React from 'react';
import RocketImg from "../../../assets/background/rocket.png";
import styled from "styled-components";
import { RocketAnimation } from "../../../Animations";

const StyledRocket = styled.img `
   opacity: 0;
   position: absolute;
   width:  200px;
   top:  30vh;
   left:  45vw;
   animation: ${({isRocketLaunched}) => isRocketLaunched ? RocketAnimation : 'none' } 3s ease-in-out 1.5s;
   animation-play-state: ${({isRocketLaunched}) => isRocketLaunched ? 'running' : 'paused'};
   z-index: 0;
`

const Rocket = ({isRocketLaunched, classname}) => {
    return (
        <StyledRocket classname={classname} src={RocketImg} isRocketLaunched={isRocketLaunched}/>
    );
};

export default Rocket;