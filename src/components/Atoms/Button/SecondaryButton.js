import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-size: 1.5em;
  padding: 10px;
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

const SecondaryButton = ({children, className, onClick}) => {
    return (
        <ButtonWrapper onClick={onClick} className={className}>
            {children}

        </ButtonWrapper>
    );
};

export default SecondaryButton;

/*
 <Icon className="fas fa-arrow-circle-left" />
            <ButtonText> GO BACK </ButtonText>
 */