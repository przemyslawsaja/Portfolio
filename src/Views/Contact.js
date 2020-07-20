import React from 'react';
import Title from "../components/Atoms/Title";
import TopWave from "../assets/waves/contactWave_1.svg"
import BottomWave from "../assets/waves/contactWave_2.svg"
import Wave from "../components/Atoms/Wave";
import styled from "styled-components";

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
const Contact = () => {
    return (
        <Wrapper id="contact">
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
            <ContextWrapper>
                <Title>
                    Contact Me
                </Title>
            </ContextWrapper>
        </Wrapper>
    );
};

export default Contact;