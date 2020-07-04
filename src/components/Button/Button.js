import React from 'react';
import styled from "styled-components";

const Button = ({className}) => {
    const Button = styled.button`
        background: linear-gradient(90deg, rgba(195,60,163,1) 0%, rgba(218,155,138,1) 100%);
        border: none;
        border-radius: 15px;
        padding: 35px 50px;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        color: white;
        font-size: 1.1em;
        text-align: center;
        text-decoration: none;
        
     Button:hover {
       font-size: 2em;
  }
    `
    return (
            <Button className={className}>
                <h2> Let's go for a journey! </h2>
            </Button>
    );
};

export default Button;