import React from 'react';
import styled from "styled-components";
import { Link } from 'react-scroll'


const Menubar = styled.div`
  text-align: center;
  height: 100vh;
  transform-origin: top left;
  z-index: 10;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:fixed;
  background-color: #100e1c;
`
const Icon = styled.i`
    font-size: 2.5em;
    color: #373160;
    margin: 50px 0;
    cursor: pointer;
    
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
                <ul>
                    <li>
                        <Icon exact as={Link} className="fas fa-home" activeClass="active" to="home" smooth={true} duration={1000} />

                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} duration={1000} >
                            <Icon className="fas fa-user" />
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" smooth={true} duration={1000}>
                            <Icon className="fas fa-code">     </Icon>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" smooth={true} duration={1000}>
                            <Icon className="fas fa-envelope"> </Icon>
                        </Link>
                    </li>
                </ul>
            </Menubar>
    );
};

export default Navigation;