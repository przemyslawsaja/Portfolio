import React from 'react';
import styled from "styled-components";
import Button from "../Atoms/Button/Button";
import BackButton from "../Atoms/Button/BackButton";

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  width: 900px;
  height: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  -webkit-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
`
const ImgWrapper = styled.div`
  background-image: url("https://unblast.com/wp-content/uploads/2019/11/Multi-Device-Scene-Creator-Mockup.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  width: 600px;
  height: 600px;
`
const DescWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 300px;
  height: 600px;
  background-color: grey;
`
const ProjectTitle = styled.h1`
  margin: 10px 0;
`
const FieldDesc = styled.p`
  background-color: darkgrey;
  font-size: 0.9em;
  margin: ${ props => props.margin} 0;
  padding: 5px;
  -webkit-box-shadow: 0px 17px 18px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 17px 18px -9px rgba(0,0,0,0.75);
  box-shadow: 0px 17px 15px -9px rgba(0,0,0,0.75);
`
const TechIcon = styled.li`
  background-color: #1A182F;
  border-radius: 10px;
  padding: 2px;
  margin: 5px;
  list-style: none;
  webkit-box-shadow: -1px 5px 10px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 5px 10px -5px rgba(0,0,0,0.75);
  box-shadow: -1px 5px 10px -5px rgba(0,0,0,0.75);
  
  &:hover {
    background-color: #100e1c;
  }
`
const DescriptionField = styled.div`
  height: 250px;
  background-color: darkgray;
  margin: 0 20px;
  padding: 10px;
  font-size: 0.9em;
  color: #e0e0e0;
  border: 2px solid #c7c7c7;
`
const StyledBackButton = styled(BackButton)`
  margin: 10px auto;
`

const ProjectModule = () => {
    return (
        <Wrapper>
            <ImgWrapper/>
            <DescWrapper>
                <FieldDesc> Project Title </FieldDesc>
                <ProjectTitle> Favnote </ProjectTitle>

                <FieldDesc margin="15px"> Used technologies </FieldDesc>
                <ul>
                    <TechIcon> HTML/CSS/JS </TechIcon>
                    <TechIcon> REACT & REDUX </TechIcon>
                    <TechIcon> STYLED COMPONENTS </TechIcon>
                </ul>

                <FieldDesc  margin="15px"> Project Description </FieldDesc>
                <DescriptionField>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur
                </DescriptionField>
                    <StyledBackButton />

            </DescWrapper>
        </Wrapper>
    );
};

export default ProjectModule;