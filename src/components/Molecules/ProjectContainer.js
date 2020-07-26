import React from 'react';
import styled from "styled-components";
import { device } from "../../devices/breakpoints";

const Project = styled.button`
  background-color: grey;
  width: 200px;
  height: 125px;
  margin: 15px;
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  -webkit-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  transition: ease-in-out 0.2s;
  opacity: 1;
  border: 0;
  
  &:hover{
    transform: scale(1.1);
    opacity: 1;
    filter: grayscale(0);
  }
  @media ${device.mobileM}{
    width: 300px;
    height: 150px;
  }
  @media ${device.tablet}{
    width: 350px;
    height: 250px;
    border-radius: 30px;
  }
  @media ${device.laptop}{
    width: 450px;
    height: 300px;
    margin: 50px;
    filter: grayscale(90%) ;
  }
  
`

const ProjectContainer = ({onClick, background}) => {
    return (
            <Project onClick={onClick} background={background}/>
    );
};

export default ProjectContainer;