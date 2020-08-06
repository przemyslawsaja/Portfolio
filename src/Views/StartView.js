import React, {useState} from 'react';
import { device } from "../devices/breakpoints";
import styled from "styled-components";
import Button from "../components/Atoms/Buttons/Button";
import Wave from "../components/Atoms/Background/Wave";
import Rocket from "../components/Atoms/SpaceUnits/Rocket";
import Avatar from "../components/Atoms/Avatar";
import { FadeIn, FadeOut } from "../Animations";
import topWave from "../assets/waves/startWave_1.svg";
import bottomWave from "../assets/waves/startWave_2.svg";
import AvatarImg from "../assets/background/avatar.png"

const OutsideWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;

`
const Message = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 0.6em;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 7rem;
  right: 100px; 
  
  @media ${device.mobileM} { 
    font-size: 0.8em;
  }
  @media ${device.laptop} { 
    font-size: 1em;
    bottom: 50px;
    right: 200px; 
  }  
`
const StyledButton = styled(Button)`
        margin-top: 30px;
        animation: ${({isRocketLaunched}) => isRocketLaunched ? FadeOut : FadeIn } 0.7s  cubic-bezier(0.250, 0.460, 0.450, 0.940)
                   ${({isRocketLaunched, delayIn, delayOut}) => isRocketLaunched ? delayOut : delayIn } both; 
`
const TextLine = styled.h1`
        margin: 10px 0;
        animation: ${({isRocketLaunched}) => isRocketLaunched ? FadeOut : FadeIn } 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)
                   ${({isRocketLaunched, delayIn, delayOut}) => isRocketLaunched ? delayOut : delayIn } both;
`

const StartView = ({aboutRef}) => {
    const [isRocketLaunched, setRocket] = useState(false);

    const ToggleRocket = () => {
        setRocket(!isRocketLaunched);
        !isRocketLaunched && setTimeout(function(){
            setRocket(false);
            if(aboutRef.current){
                aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: "nearest"
                })
            }

         }, 4000);
    }

    return (
        <OutsideWrapper id="home">
            <Wave src={topWave} position="top" />
            <Wave src={bottomWave} />
            <Rocket isRocketLaunched={isRocketLaunched}/>
            <InsideWrapper>
                <Avatar src={AvatarImg} isRocketLaunched={isRocketLaunched}/>
                <Message>
                    <TextLine isRocketLaunched={isRocketLaunched} delayIn="1.4s" delayOut="0.6s"> Hi ! </TextLine>
                    <TextLine isRocketLaunched={isRocketLaunched} delayIn="2.1s" delayOut="0.4s"> My name is Przemyslaw </TextLine>
                    <TextLine isRocketLaunched={isRocketLaunched} delayIn="2.8s" delayOut="0.2s"> and I'm Front-End developer. </TextLine>
                </Message>
                <StyledButton onClick={ToggleRocket} isRocketLaunched={isRocketLaunched} delayIn="3.5s" delayOut="0.1s">
                    Fire the engines!
                </StyledButton>
            </InsideWrapper>
        </OutsideWrapper>
    );
};

export default StartView;