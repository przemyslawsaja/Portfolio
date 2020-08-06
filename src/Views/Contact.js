import React from 'react';
import Title from "../components/Atoms/Title";
import Paragraph from "../components/Atoms/Paragraph";
import Wave from "../components/Atoms/Background/Wave";
import styled from "styled-components";
import TopWave from "../assets/waves/contactWave_1.svg"
import { device } from "../devices/breakpoints";
import JobStatusBox from "../components/Atoms/JobStatusBox";
import ContactBox from  "../components/Atoms/ContactBox"

const OuterWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const InnerWrapper = styled.section`
  font-size: 1.1em;
  width: 100vw;
  position: absolute;
  top: 50px;
  z-index: 2;
  
`
const Header = styled.div`
 text-align: center;
 margin: 0 20px;
`
const Content = styled.div`
  margin: 30px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  @media ${device.tablet}{
  margin-top: 100px;
  }
`
const ContactInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin-top: 30px;
`



const Contact = ({aos}) => {
    return (
        <OuterWrapper id="contact">
            <Wave src={TopWave} position="top" />
            <InnerWrapper >
                <Header data-aos={aos}>
                    <Title > Let's talk</Title>
                    <Paragraph>Do you have any questions? Feel free to contact me!</Paragraph>
                </Header>
                <Content>
                    <div data-aos="flip-up" data-aos-duration="1500">
                        <JobStatusBox/>
                    </div>
                    <ContactInfo>
                        <ContactBox
                            icon="fas fa-paper-plane"
                            title="E-Mail"
                            description="Contact me by email - przemyslawsaja@gmail.com"
                        />
                        <ContactBox
                            icon="fab fa-github"
                            title="Github"
                            description="Take a look at my Github repositories"
                            link="https://github.com/przemyslawsaja"
                        />
                        <ContactBox
                            icon="fab fa-linkedin-in"
                            title="Linkedin"
                            description="Let's connect on Linkedin!"
                            link="https://www.linkedin.com/in/przemyslawsaja/"
                        />
                        <ContactBox
                            icon="far fa-file"
                            title="CV"
                            description="Here you can explore and download my reasume"
                            link="https://docdro.id/eVf2svH"
                        />
                    </ContactInfo>
                </Content>
            </InnerWrapper>

        </OuterWrapper>
    );
};

export default Contact;

/*

<ContactBox>
                            <Icon className="fas fa-paper-plane" />
                            <p>przemyslawsaja@gmail.com</p>
                        </ContactBox>
                        <ContactBox>
                            <Icon className="fab fa-github" />
                            <p>Take a look at my Github repositories!</p>
                        </ContactBox>
                        <ContactBox>
                            <Link  target="_blank" rel="noopener noreferrer" href="https://docdro.id/eVf2svH">
                                <Icon className="far fa-file" />
                                <LinkParagraph>CV</LinkParagraph>
                            </Link>
                        </ContactBox>
                        <ContactBox>
                            <Link  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/przemys%C5%82aw-saja-843b64172/" >
                                <Icon className="fab fa-linkedin-in"/>
                                <LinkParagraph>Let's connect on Linkedin!</LinkParagraph>
                            </Link>
                        </ContactBox>
 */