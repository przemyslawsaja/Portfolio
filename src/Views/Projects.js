import React, { useState } from 'react';
import styled from "styled-components";
import Title from "../components/Atoms/Title";
import Wave from "../components/Atoms/Wave";
import ProjectContainer from "../components/Atoms/ProjectContainer";
import ProjectModule from "../components/Organisms/ProjectModule";
import BackgroundOverlay from "../components/Atoms/BackgroundOverlay";
import Planet from "../components/Atoms/SpaceUnits/Planet";
import TopWave from "../assets/waves/projectsWave_1.svg"
import BottomWave from "../assets/waves/projectsWave_2.svg"
import Island from  "../assets/background/island.png"
import { projectsData } from "../projectsData"

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  top: 30px;
  left: 10%;
  z-index: 900;
`
const ProjectsWrapper = styled.div`
  width: 80vw;
  justify-content: center;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`

const Projects = ({aos}) => {
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
                    <ContextWrapper data-aos={aos}>
                        <Title> Some things I've built.</Title>
                        <ProjectsWrapper>
                            { projectsData.map((p) => {
                                return (
                                    <ProjectContainer onClick={()=> openModal(p.name)} background={p.img}  />
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