import React from 'react';
import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';

const Menubar = styled.div`
  text-align: center;
  z-index: 3;
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  left: 0;
  background-color: #141224;
`
const Icon = styled.i`
    font-size: 3em;
    color: #373160;
    margin: 50px 0;
    
    &:hover {
      color: rgb(218,155,138);
    }
    

`
const Navigation = () => {
    return (
        //TODO: Highlight on activated route
        <Menubar>
            <ul>
                <li>
                    <NavLink to="/">
                        <Icon className="fas fa-home"></Icon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <Icon className="fas fa-user"></Icon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <Icon className="fas fa-code"></Icon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users">
                        <Icon className="fas fa-envelope"></Icon>
                    </NavLink>
                </li>
            </ul>
        </Menubar>
    );
};

export default Navigation;