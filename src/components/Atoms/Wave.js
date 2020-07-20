import React from 'react';
import styled from "styled-components";

const StyledWave = styled.img`
   position: absolute;
   width: 100vw;
   z-index: 1;
   bottom: -1px;
   top: ${({ position }) => position ? "0" : "unset"};
`

const Wave = ({className, src, position}) => {
    return (
        <StyledWave  className={className} src={src} position={position} />
    );
};

export default Wave;