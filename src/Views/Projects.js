import React, { useState } from 'react';
import styled from "styled-components";
import Title from "../components/Atoms/Title";
import TopWave from "../assets/waves/projectsWave_1.svg"
import BottomWave from "../assets/waves/projectsWave_2.svg"
import Wave from "../components/Atoms/Wave";
import ProjectContainer from "../components/Molecules/ProjectContainer";
import ProjectModule from "../components/Organisms/ProjectModule";
import projectIMG1 from "../assets/mockups/homepantry.png"
import projectIMG2 from "../assets/mockups/favnote.png"
import projectIMG3 from "../assets/mockups/LightsOut.png"
import BackgroundOverlay from "../components/Atoms/BackgroundOverlay";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  top: 30px;
  left: 10%;
  z-index: 2;
`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
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

    const projects =  [
        {
            "name": 'HomePantry',
            "img": projectIMG1,
            "codeLink": 'https://github.com/przemyslawsaja/home_pantry',
            'liveLink': 'https://lucid-mirzakhani-845de8.netlify.com/'
        },
        {
            "name": 'FavNote',
            "img": projectIMG2,
            "codeLink": 'https://github.com/przemyslawsaja/FavNote',
            'liveLink': 'https://www.netlify.com/'
        },
        {
            "name": 'LightsOut',
            "img": projectIMG3,
            "codeLink": 'https://github.com/przemyslawsaja/Lights-Out',
            'liveLink': 'https://www.netlify.com/'
        },

    ]

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
                <StyledWave src={TopWave} position="top" />
                <StyledWave src={BottomWave} />

                { projects.map((p) => {
                    return (
                        (isModalOpen && (currentProject === p.name))
                        && <ProjectModule
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
                            { projects.map((p) => {
                                return (
                                    <ProjectContainer onClick={()=> openModal(p.name)} background={p.img}  />
                                )
                            })}
                        </ProjectsWrapper>
                    </ContextWrapper>
            </Wrapper>
        </>
    );
};

export default Projects;