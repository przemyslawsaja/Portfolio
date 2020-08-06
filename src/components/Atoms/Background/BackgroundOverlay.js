import React from 'react';
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 400vh;
  background-color: black;
  z-index: 999;
  opacity: 0.8;
`

const BackgroundOverlay = () => {
    return (
        <Overlay />
    );
};

export default BackgroundOverlay;