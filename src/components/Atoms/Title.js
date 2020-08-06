import React from 'react';
import styled from "styled-components";
import { device } from "../../devices/breakpoints";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.5em;
  
    @media ${device.mobileM} { 
       font-size: 2em;
  }
      @media ${device.tablet} { 
       font-size: 3em;
  }
`

const Title = ({children, classname}) => {
    return (
        <StyledTitle data-aos="fade-down" classname={classname}>
            {children}
        </StyledTitle>
    );
};

export default Title;