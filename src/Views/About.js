import React, { useEffect } from 'react';
import styled from "styled-components";
import BottomWave from '../assets/waves/aboutWave_1.svg'
import TopWave from '../assets/waves/aboutWave_2.svg'
import Title from '../components/Atoms/Title'
import Wave from "../components/Atoms/Wave";
import { device } from "../devices/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  z-index: 1;
  text-align: center;
  font-size: 0.8em;
  margin: 50px 10px;
  padding: 5px;
  
  @media ${device.mobileS} { 
    margin: 10px 20px;
    font-size: 0.9em;
  }
  @media ${device.mobileM} { 
    padding: 20px;
    font-size: 1em;
  }
  @media ${device.mobileL} { 
    padding: 30px;
    font-size: 1.1em;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 1.5em;
  }
  @media ${device.laptop} {
     left: 50px;
     max-width: 1000px;
     font-size: 1.4em;
  }
`

const Description = styled.article`
  background-color: rgba(26, 24, 47, 0);
  border-radius: 10px;
  margin-top: 30px;
`
const ListWrapper = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.7em;
  margin: 10px 15px;
  
  @media ${device.mobileS} { 
      margin: 10px 30px;
      font-size: 0.9em;
  }
  @media ${device.mobileM} { 
     margin: 10px 30px;
  }
  @media ${device.mobileL} { 
     margin: 10px 40px;
  }
  @media ${device.tablet} { 
     margin: 10px 80px;
  }
  @media ${device.laptop} {
     margin: 50px 80px;
  }
`
const ListTitle = styled.p`
  margin-bottom: 15px;
  color: #8838ff;
`
const StyledList = styled.ul`
  margin-top: 20px;
  list-style-type: circle;
  text-align: left;
`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
`
const About = ({aos}) => {

    return (
        <Wrapper id="about">
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
                <ContextWrapper data-aos={aos}>
                    <Title> About me </Title>
                    <Description>
                        Hi! I'm a 22-year-old student of computer science living in Cracow.
                        I am an independent and very creative person.
                        From the beginning of high school I started to be interested in computer graphics.
                        I created logos, posters, business cards, 3d models etc. With time, I found out that
                        I was not fully satisfied and it was time to get to the next level. I'll admit that the
                        graphic designer background is really helpful, and I have a great deal of pleasure in creating
                        application and website designs.
                        <p>Here are a few technologies I've been working with recently:</p>
                    </Description>
                    <ListWrapper>
                        <StyledList>
                            <ListTitle> FRONT-END</ListTitle>
                            <li> HTML5 </li>
                            <li> CSS3 </li>
                            <li> SASS </li>
                            <li> BOOTSTRAP </li>
                            <li> Javascript(ES6+) </li>
                            <li> React & Redux</li>
                            <li> Hooks & Context</li>
                        </StyledList>
                        <StyledList>
                            <ListTitle> DESIGN</ListTitle>
                            <li> Adobe Photoshop</li>
                            <li> Adobe Illustrator</li>
                            <li> Adobe Xd </li>
                        </StyledList>
                    </ListWrapper>

                </ContextWrapper>
            </Wrapper>
    );
};

export default About;