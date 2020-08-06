import React from 'react';
import styled from "styled-components";
import {device} from "../../devices/breakpoints";

const StyledParagraph = styled.p`
  margin-top: 20px;
  font-size: 0.8em;
  text-align: center;
  
  @media ${device.tablet}{
    font-size: 1em;
  }
    @media ${device.laptop}{
    font-size: 1.2em;
  }
`
const Paragraph = ({children}) => {
    return (
        <StyledParagraph data-aos="fade-up">
            {children}
        </StyledParagraph>
    );
};

export default Paragraph;