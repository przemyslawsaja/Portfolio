import React from 'react';
import styled from 'styled-components'
import {device} from "../../devices/breakpoints";

const BoxWrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: #151326;
  border-radius: 10px;
  border: 2px solid #5ce835;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
   @media ${device.tablet}{
   width: 250px;
    height: 150px;
    margin-bottom: 50px;
  }
  
  @media ${device.laptop}{
    width: 300px;
    height: 200px;
    margin-bottom: 100px;
  }
`
const BoxTitle = styled.p`

  font-size: 0.8em;
  margin-bottom: 10px;
  @media ${device.laptop}{
   font-size: 1.2em;
  }
  
`
const StyledParagraph = styled.p`
  font-size: 1em;
  
  @media ${device.laptop}{
   font-size: 1.5em;
  }
`
const JobStatusBox = () => {
    return (
        <BoxWrapper>
            <BoxTitle>Status</BoxTitle>
            <StyledParagraph>Open for job offers</StyledParagraph>
        </BoxWrapper>
    );
};

export default JobStatusBox;