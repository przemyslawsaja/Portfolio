import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
`
const Menubar = styled.div`
  text-align: center;
  z-index: 3;
  height: 100vh;
  //transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;

  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:sticky;
  background-color: #141224;
`
const Icon = styled.i`
    font-size: 3em;
    color: #373160;
    margin: 50px 0;
    cursor: pointer;
    
    &:hover {
      color: rgb(218,155,138);
    }
    

`
const Navigation = () => {
    return (
        //TODO: Highlight on activated href
        <Wrapper>
            <Menubar>
                <ul>
                    <li> <Icon className="fas fa-home"></Icon></li>
                    <li> <Icon className="fas fa-user"></Icon> </li>
                    <li> <Icon className="fas fa-code"></Icon> </li>
                    <li> <Icon className="fas fa-envelope"></Icon> </li>
                </ul>
            </Menubar>
        </Wrapper>

    );
};

export default Navigation;