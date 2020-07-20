import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 5em;
  margin-top: 10rem;
  background: none;
`

const Title = ({children}) => {
    return (
        <StyledTitle>

            {children}
        </StyledTitle>
    );
};

export default Title;