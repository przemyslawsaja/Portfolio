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
const Icon = styled.i`
    font-size: 1.5em;
    margin: 0 20px;
    color: #373160;
    cursor: pointer;
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
      &:hover {
      color: rgb(218,155,138);
    }
    
    &.active {
    color: #373160;
    }
`


const Navigation = () => {
    return (
            <Menubar>
                <li>
                    <Icon exact as={Link} className="fas fa-home" activeClass="active" to="home" smooth={true} duration={1000} />
                </li>
                <li>
                    <Icon exact as={Link} className="fas fa-user" activeClass="about" to="about" smooth={true} duration={1000} />
                </li>
                <li>
                    <Icon exact as={Link} className="fas fa-code" activeClass="active" to="projects" smooth={true} duration={1000} />
                </li>
                <li>
                    <Icon exact as={Link} className="fas fa-envelope" activeClass="active" to="contact" smooth={true} duration={1000} />
                </li>
            </Menubar>
    );
};

export default Navigation;
