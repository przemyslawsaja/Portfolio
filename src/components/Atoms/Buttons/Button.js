import React from 'react';
import styled from "styled-components";
import { device } from "../../../devices/breakpoints";

const StyledButton = styled.button`
      font-size: 0.8em;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      color: white;
      
      outline: none;
      background: none;
      text-decoration: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      padding: 10px;
      width: 200px;
      cursor: pointer;
      z-index: 999;
      
      border: 2px solid;
      border-image-source: linear-gradient(90deg, rgba(218,155,138,1) 0%, rgba(195,60,163,1) 100%);
      border-image-slice: 1;
      
      -webkit-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
  
     &:hover {
       color: #1A182F;
       border-color: #1A182F;
      }
      
     &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0%;
        width: 100%;
        background: linear-gradient(90deg, rgba(218,155,138,1) 0% , rgba(195,60,163,1) 100%);
        z-index: -1;      
        transition: 0.8s;
        border-radius: 50% 50% 0 0 ;
      }
      &:hover::before {
        height: 200%;
      }
 
     @media ${device.mobileL} {
       font-size: 1em;
       padding: 20px;
       width: 300px;
     }
     @media ${device.laptop} {
       font-size: 1.3em;
     } 
    `

const Button = ({className, children, onClick, secondary, isRocketLaunched }) => {
    return (
        <StyledButton secondary={secondary} onClick={onClick} className={className} isRocketLaunched={isRocketLaunched}>
            {secondary ? <i className="fas fa-undo"></i> : children }
        </StyledButton>
    );
};

export default Button;

