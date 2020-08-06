import React from 'react';
import styled from "styled-components"
import { device } from "../../devices/breakpoints";

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  @media ${device.tablet}{
   margin: 30px;
  }
`
const ContentWrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 20px;
`
const Icon = styled.i`
 color: royalblue;
 font-size: 1.5em;
  
  @media ${device.tablet}{
   font-size: 2em;
  }
`
const BoxTitle = styled.h1`
  font-size: 1em;
  
  @media ${device.tablet}{
  font-size: 1.5em;
  }
`
const BoxDescription = styled.p`
  font-size: 0.8em;
  
  @media ${device.tablet}{
  font-size: 1.2em;
  }
`
const Link = styled.a`
 display: flex;
 align-items: center;
 text-decoration: none;

  &:visited {
  color: royalblue;
  }
`
const ContactBox = ({icon, title, description, link}) => {
    return (
        <BoxWrapper data-aos="fade-right">
            <Link  target="_blank" rel="noopener noreferrer" href={link}>
                <Icon className={icon}/>
            </Link>
            <ContentWrapper>
                <BoxTitle> {title} </BoxTitle>
                <BoxDescription> {description} </BoxDescription>
            </ContentWrapper>
        </BoxWrapper>
    );
};

export default ContactBox;