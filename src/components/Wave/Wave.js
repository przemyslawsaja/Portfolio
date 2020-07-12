import React from 'react';
import styled from "styled-components";

const StyledWave = styled.img`
   position: absolute;
   width: 100vw;
   z-index: -3;
   bottom: 0;
   top: ${({ position }) => position ? "0" : "unset"};
`

const Wave = ({src, alt, position}) => {
    return (
        <StyledWave src={src} position={position} />
    );
};

export default Wave;