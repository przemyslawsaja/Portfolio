import React from 'react';
import styled from "styled-components";

const Button = ({className, children}) => {
    const Button = styled.button`

        border: 4px solid;
        border-image-source: linear-gradient(90deg, rgba(218,155,138,1) 0%, rgba(195,60,163,1) 100%);
        border-image-slice: 1;
        background: none;
        overflow: hidden;

        padding: 35px 50px;
        cursor: pointer;
        
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        color: white;
        font-size: 1.5em;
        text-align: center;
        text-decoration: none;
        
        -webkit-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
        transition: ease-in-out 0.8s;
        
     &:hover {
       color: #1A182F;
       border-color: #1A182F;
       //background: linear-gradient(90deg, rgba(218,155,138,1) 0% , rgba(195,60,163,1) 100%);
      }
     &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom:0;
        width: 100%;
        height: 0%;
        background: linear-gradient(90deg, rgba(218,155,138,1) 0% , rgba(195,60,163,1) 100%);
        z-index: -1;      
        transition: 0.8s;
        border-radius: 50% 50% 0 0 ;
      }
      &:hover::before {
       height: 200%;
      }
    `

    return (

        <Button className={className}>
            {children}
        </Button>

    );
};

export default Button;

