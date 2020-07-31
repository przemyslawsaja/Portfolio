import React from 'react';
import styled, { css } from "styled-components";
import SecondaryButton from "../Atoms/Buttons/SecondaryButton";
import { device } from "../../devices/breakpoints";
import { LiveDot, FadeIn , FadeOut} from "../../Animations";

const ModalPrams = {
    x: '900px',
    y: '650px'
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  -webkit-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  box-shadow: -1px 10px 21px -5px rgba(0,0,0,0.75);
  animation: ${({isModalOpen}) => isModalOpen ? FadeIn : 'none'} 0.5s ease-in-out;
  @media ${device.tablet}{
    width: ${ModalPrams.x};
    height: ${ModalPrams.y};
  }
`
const ImgWrapper = styled.div`
  background-image: url(${props => props.img});
  background-color: #1A182F;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  width: 100vh;
  height: 100vh;
  
  @media ${device.tablet}{
    border-radius: 20px 0 0 20px;
    width: ${ModalPrams.y};
    height: ${ModalPrams.y};
  }
`
const DescWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #454254;
  
  @media ${device.tablet}{
    border-radius: 0 20px 20px 0;
    height: ${ModalPrams.y};
  }
`
const ProjectTitle = styled.h1`
  margin: 5px 0;
`
const FieldDesc = styled.p`
  background-color: #24222e;
  font-size: 0.9em;
  margin: ${ props => props.margin} 0;
  padding: 5px;

  @media ${device.tablet}{
    &:first-child {
      border-radius: 0 20px 0 0;
    }
  }

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
    background-color: #111020;
  }
`
const DescriptionField = styled.div`
  overflow-y: scroll;
  max-height: 125px;
  background-color: #1A182F;
  margin: 0 20px;
  padding: 10px;
  font-size: 0.9em;
  color: #e0e0e0;
  border: 2px solid #454254;

`
const LinksWrapper = styled.div`
  display: flex;
`
const Link = styled.a`
  display: flex; 
  font-weight: 600;
  color: ${props => props.color};
  font-size: 1.5em;
  text-decoration: none;
  margin: 0 30px;
  
  &:visited {
  color: ${props => props.color};
  
  &:hover {
  color: ${props => props.hoverColor};
  }
}
`
const LinkIcon = styled.div`
  margin-left: 10px;
  animation: ${ ({isLive}) => isLive ? css`${LiveDot} 1s ease-in-out infinite forwards;` : "none"};
`
const StyledBackButton = styled(SecondaryButton)`
  font-size: 0.8em;
  margin: 5px auto;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`
const Icon = styled.i`
  font-size: 1.8em;
  margin-right: 10px;
`
const ButtonText = styled.div`
  font-size: 1.4em;
`

const ProjectModule = ({isModalOpen, closeModal, projectName, currentProject, img, codeLink, liveLink }) => {
    let techList,description;
    if(currentProject === "HomePantry"){
        techList =
            <ul>
                <TechIcon> HTML/CSS/JS </TechIcon>
                <TechIcon> REACT & REDUX </TechIcon>
                <TechIcon> REACT ROUTES </TechIcon>
            </ul>
        description =
            <DescriptionField>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur
            </DescriptionField>
    } else if (currentProject === "FavNote"){
        techList =
            <ul>
                <TechIcon> HTML/CSS/JS </TechIcon>
                <TechIcon> REACT & REDUX </TechIcon>
                <TechIcon> STYLED COMPONENTS </TechIcon>
                <TechIcon> REACT ROUTES </TechIcon>
                <TechIcon> STORYBOOK </TechIcon>
            </ul>
        description =
            <DescriptionField>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur
            </DescriptionField>
    } else if (currentProject === "LightsOut") {
        techList =
            <ul>
                <TechIcon> HTML/CSS/JS </TechIcon>
                <TechIcon> REACT </TechIcon>

            </ul>
        description =
            <DescriptionField>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur
            </DescriptionField>
    }
    return (
        <Wrapper isModalOpen={isModalOpen}>
            <ImgWrapper img={img}/>
            <DescWrapper>
                <FieldDesc> Project Title </FieldDesc>
                <ProjectTitle> {projectName} </ProjectTitle>
                <FieldDesc margin="15px"> Used technologies </FieldDesc>
                {techList}
                <FieldDesc  margin="15px"> Links </FieldDesc>
                <LinksWrapper>
                        <Link href={codeLink} target="_blank" rel="noopener noreferrer" color="#d9998a" hoverColor="#cf6b97">
                            <p>CODE</p>
                            <LinkIcon> <i className="fas fa-code"/> </LinkIcon>
                        </Link>

                    <Link href={liveLink} target="_blank" rel="noopener noreferrer" color="#cf6b97" hoverColor="#d9998a">
                        <p>LIVE</p>
                        <LinkIcon isLive={true}>
                            <svg height="15" width="10">
                                <circle cx="5" cy="7" r="5" fill="red" />
                            </svg>
                        </LinkIcon>
                    </Link>

                </LinksWrapper>
                <FieldDesc  margin="15px"> Project Description </FieldDesc>
                {description}
                <StyledBackButton onClick={closeModal}>
                    <Icon className="fas fa-arrow-circle-left" />
                    <ButtonText> GO BACK </ButtonText>
                </StyledBackButton>
            </DescWrapper>
        </Wrapper>
    );
};

export default ProjectModule;