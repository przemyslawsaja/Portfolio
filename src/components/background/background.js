import React from 'react';
import styled from "styled-components";
import Particles from "react-particles-js";
import topWave from "../../assets/topWave.svg"
import bottomWave from "../../assets/bottomWave.svg";
import anime from 'animejs/lib/anime.es.js';

const Background = () => {

    const TopWave = styled.img`
        position: absolute;
    `
    const BottomWave = styled.img`
        position: absolute;
        bottom: 0;
    `
    const ParticlesContainter = styled(Particles)`
        background-color:rgba(0, 0, 0, 0);
        position: relative;
        z-index: 1;
        height: 100vh;
        width: 100%;
        opacity: 0.5;
        `
    const SpaceUnit = styled.img `
        z-index: 2;
        position: absolute;
        top:  ${props => props.y};
        left:  ${props => props.x};
        background-color:rgba(0, 0, 0, 0);
        animation:  ${({ Pulsate }) => Pulsate ? " pulsate-fwd 8s ease-in-out infinite both" : null};
        -webkit-animation: ${({ Pulsate }) => Pulsate ? "pulsate-fwd 5s ease-in-out infinite both" : null}  ;
        
        @-webkit-keyframes pulsate-fwd {
          0% {
          
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }
        @keyframes pulsate-fwd {
          0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          } 
      } 
    `


    return (

        <div>
            <SpaceUnit x="70%"   y="25vh"  Pulsate={true} src="https://zapodaj.net/images/72b4e64e19dba.png" alt="Planet1" />
            <SpaceUnit x="-5%"   y="70vh"  src="https://zapodaj.net/images/37ea92089e9a9.png" alt="Planet2" />
            <SpaceUnit x="30%"   y="10vh"  Pulsate={true} src="https://zapodaj.net/images/80bb44a31ee0f.png" alt="Planet3" />
            <SpaceUnit x="-10%"  y="5vh"   src="https://zapodaj.net/images/cfda93d99f681.png" alt="Meteor1" />
            <SpaceUnit x="45%"   y="25vh"  src="https://zapodaj.net/images/c57b0689b1c0d.png" alt="Meteor2" />
            <SpaceUnit x="30%"   y="70vh"  src="https://zapodaj.net/images/362621750486f.png" alt="Meteor3" />




            <TopWave src={topWave} alt={"topWave"} />
            <BottomWave src={bottomWave} alt={"bottomWave"} />


            <ParticlesContainter
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
                }} />

        </div>

    );
};

export default Background;