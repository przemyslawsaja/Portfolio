import React from 'react';
import styled from "styled-components";



const Project = styled.button`
  background-color: grey;
  width: 500px;
  height: 350px;
  margin: 50px;
  background-image: url('https://as2.ftcdn.net/jpg/02/29/59/17/500_F_229591795_A12v6ggVudkDHsWSuKiqan0EIFtMajNa.jpg');
  border-radius: 30px;
  -webkit-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 9px 19px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  transition: ease-in-out 0.5s;
  opacity: 0.5;
  
  &:hover{
    opacity: 1;
  }
`

const ProjectContainer = () => {
    return (
            <Project onClick={() => {console.log("xd")}}/>
    );
};

export default ProjectContainer;