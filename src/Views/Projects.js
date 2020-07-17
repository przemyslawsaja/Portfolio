import React from 'react';
import styled from "styled-components";
import Title from "../components/Title/Title";
import TopWave from "../assets/waves/projectsWave_1.svg"
import BottomWave from "../assets/waves/projectsWave_2.svg"
import Wave from "../components/Wave/Wave";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
`
const Projects = () => {
    return (
        <Wrapper>
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
            <ContextWrapper>
                <Title> Some things I've built.</Title>
            </ContextWrapper>
        </Wrapper>
    );
};

export default Projects;