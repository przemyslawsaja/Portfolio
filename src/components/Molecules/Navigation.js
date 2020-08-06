import React from 'react';
import styled from "styled-components";
import { Link } from 'react-scroll'

import { device } from '../../devices/breakpoints'

const Menubar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  position:fixed;
  top: 0;
  height: 60px;
  width: 100vw;
  z-index: 998;
  background-color: #100e1c;
  justify-items: center;
  align-items: center;
  
  @media ${device.laptop} { 
      height: 100%;
      width: 80px;
      top: 0;
      left: 0;
      flex-direction: column;
  }
`
const NavLink = styled(Link)`
    font-size: 1.5em;
    margin: 0 20px;
    cursor: pointer;
    color: #373160;

    &.active{
      color: #da9b8a;
    }
    &:hover {
      color: #da9b8a;

    }

    @media ${device.mobileS} { 
      font-size: 1.7em;
    }
     @media ${device.mobileL} {  
      margin: 0 30px;
      font-size: 2.2em;
    }
    @media ${device.laptop} {
      font-size: 2.5em; 
      margin: 50px 0;
    }

`


const Navigation = () => {

    const links = {
        navigation: [
            {
                name: "home",
                className: "fas fa-home",
            },
            {
                name: "about",
                className: "fas fa-user",
            },
            {
                name: "projects",
                className: "fas fa-code",
            },
            {
                name: "contact",
                className: "fas fa-envelope",
            }
        ],
    }


    return (
            <Menubar>
                    <Menubar>
                        {links.navigation.map( (link) => {
                            return(
                                <NavLink
                                    className = {link.className}
                                    to = {link.name}
                                    duration = {500}
                                    smooth = {true}
                                    spy = {true}
                                    activeClass="active"
                                />
                            )
                        })}
                    </Menubar>
            </Menubar>
    );
};

export default Navigation;
