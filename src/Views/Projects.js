import React, { useState } from 'react';
import styled from "styled-components";
import Title from "../components/Atoms/Title";
import Wave from "../components/Atoms/Background/Wave";
import ProjectContainer from "../components/Atoms/ProjectContainer";
import ProjectModule from "../components/Organisms/ProjectModule";
import BackgroundOverlay from "../components/Atoms/Background/BackgroundOverlay";
import Planet from "../components/Atoms/SpaceUnits/Planet";
import TopWave from "../assets/waves/projectsWave_1.svg"
import BottomWave from "../assets/waves/projectsWave_2.svg"
import Island from  "../assets/background/island.png"
import { projectsData } from "../projectsData"
import Paragraph from "../components/Atoms/Paragraph";
import { device } from "../devices/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  top: 30px;
  z-index: 900;
  @media ${device.laptop}{
    margin-left: 80px;
  }
  @media ${device.laptopL}{
    margin-left: 160px;
  }
`
const ProjectsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  @media ${device.laptopL}{
    margin-top: 50px;
  }
`
const Header = styled.div`
  margin: 0 10px;
`
const Projects = () => {
    const [isModalOpen, setModal] = useState(false);
    const [currentProject, setProject] = useState(undefined);

    const openModal = (projectName) => {
        setModal(true);
        setProject(projectName);
    }
    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            {isModalOpen && <BackgroundOverlay/>}
            <Wrapper id="projects" >
                <Wave src={TopWave} position="top" />
                <Wave src={BottomWave} />
                { projectsData.map((p) => {
                    return (
                        (isModalOpen && (currentProject === p.name))
                        && <ProjectModule
                            isModalOpen = {isModalOpen}
                            closeModal={closeModal}
                            projectName={p.name}
                            img={p.img}
                            codeLink={p.codeLink}
                            liveLink={p.liveLink}
                            currentProject={currentProject}
                        />
                    )
                })}
                    <ContextWrapper>
                        <Header>
                            <Title> Some things I've built.</Title>
                            <Paragraph>
                                All of my projects are uploaded on my github. These are some of them made with React!
                            </Paragraph>
                        </Header>


                        <ProjectsWrapper>
                            { projectsData.map((p) => {
                                return (
                                    <ProjectContainer onClick={() => openModal(p.name)} background={p.img}  />
                                )
                            })}
                        </ProjectsWrapper>
                    </ContextWrapper>
                <Planet
                    src={Island}
                    x="10vw"
                    y="60vh"
                    alt="Island"
                    duration="3s"
                    vertical="20"
                    size="100"
                    onTop={true}
                />
            </Wrapper>
        </>
    );
};

export default Projects;