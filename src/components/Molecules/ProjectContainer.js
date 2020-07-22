import React from 'react';
import styled from "styled-components";

const Project = styled.button`
  background-color: grey;
  width: 450px;
  height: 300px;
  margin: 50px;
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  -webkit-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  transition: ease-in-out 0.2s;
  filter: grayscale(90%) ;
  opacity: 1;
  border: 0;
  
  &:hover{
    transform: scale(1.1);
    opacity: 1;
    filter: grayscale(0);
  }
`

const ProjectContainer = ({onClick, background}) => {
    return (
            <Project onClick={onClick} background={background}/>
    );
};

export default ProjectContainer;