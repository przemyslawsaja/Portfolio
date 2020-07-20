import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: #1A182F;
  color: white;
  border: 0;
  border-radius: 10px;
  margin: 10px;
  -webkit-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  cursor: pointer;
  
  &:hover {
    background-color: #272447;
  }
`
const Icon = styled.i`
  font-size: 1.8em;
  margin-right: 10px;
`
const ButtonText = styled.div`

`
const BackButton = ({className}) => {
    return (
        <ButtonWrapper className={className}>
            <Icon className="fas fa-arrow-circle-left" />
            <ButtonText> GO BACK </ButtonText>
        </ButtonWrapper>
    );
};

export default BackButton;