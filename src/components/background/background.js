import React from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components';
import Particles from "react-particles-js";

const Background = () => {

    const PulsateAnimation = (deflection) => keyframes`
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    
        50% {
        -webkit-transform: translateY(${deflection}px);
            transform: TranslateY(${deflection}px)
        } 
          
    `
    const ParticlesContainer = styled(Particles)`
        height: 100vh;
        width: 100vw;
    `

    const Rocket = styled.img `
        position: absolute;
        top:  ${props => props.y};
        left:  ${props => props.x};
        background-color:rgba(0, 0, 0, 0);
        transform: rotate(12deg);
        animation: ${PulsateAnimation()} ${props => props.duration} ease-in-out infinite both ;
     `

    const SpaceUnit = styled.img `
        z-index: 1;
        position: absolute;
        top:  ${props => props.y};
        left:  ${props => props.x};
        animation:  ${props => PulsateAnimation(props.vertical)} ${props => props.duration} ease-in-out infinite both ;    
      } 
    `
    const Meteor = styled.img `
        position: absolute;
        top:  ${props => props.y};
        left:  ${props => props.x};       
      } 
    `


    return (

        <div>
            <SpaceUnit x="75%"   y="25vh"  src="https://zapodaj.net/images/72b4e64e19dba.png" alt="Blue_Planet" duration="3s"  vertical="20" />
            <SpaceUnit x="30%"   y="10vh"  src="https://zapodaj.net/images/80bb44a31ee0f.png" alt="Red_Planet" duration="2.5s" vertical="15"/>
            <SpaceUnit x="0"     y="70vh"  src="https://zapodaj.net/images/37ea92089e9a9.png" alt="Purple_Planet" duration="10s"/>

            <Meteor x="0vw"  y="0vh"   src="https://zapodaj.net/images/cfda93d99f681.png" alt="Meteor1" />
            <Meteor x="45vw"   y="25vh"  src="https://zapodaj.net/images/c57b0689b1c0d.png" alt="Meteor2" />
            <Meteor x="30vw"   y="70vh"  src="https://zapodaj.net/images/362621750486f.png" alt="Meteor3" />

            <Rocket x="20vh"   y="48.5vh"  src="https://zapodaj.net/images/f5562d1a18875.png" alt="Rocket"/>

            <ParticlesContainer
                params={{
                    "particles": {
                        "number": {
                            "value": 60,
                            "density": {
                                "enable": true
                            }
                        },
                        "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "opacity": 0.02
                        },
                        "move": {
                            "speed": 0.5,
                            "direction": "right",
                            "out_mode": "out"
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 1
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }}

            />

        </div>
    );
};

export default Background;