import React from 'react';
import styled from "styled-components";
import Title from "../components/Title/Title";
import TopWave from "../assets/waves/projectsWave_1.svg"
import BottomWave from "../assets/waves/projectsWave_2.svg"
import Wave from "../components/Wave/Wave";

const Projects = () => {
    return (
        <>
            <Wave src={TopWave} position="top" />
            <Wave src={BottomWave} />
            <Title> Some things I've built.</Title>
        </>
    );
};

export default Projects;