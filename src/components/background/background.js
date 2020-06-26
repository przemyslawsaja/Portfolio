import React from 'react';
import styled from "styled-components";
import Particles from "react-particles-js";
import topWave from "../../assets/topWave.svg"
import bottomWave from "../../assets/bottomWave.svg";

const Background = () => {

    const TopWave = styled.img`
        position: absolute;
    `
    const BottomWave = styled.img`
        position: absolute;
        bottom: 0;
    `
    const Planet1 = styled.img`
        z-index: 2;
        position: absolute;
        top: 25vh;
        left: 70vw;
        background-color:rgba(0, 0, 0, 0);
    `
    const Planet2 = styled.img`
        z-index: 2;
        position: absolute;
        top: 65vh;
        left: -100px;
        background-color:rgba(0, 0, 0, 0); 
    `
    const Planet3 = styled.img`
        z-index: 1;
        position: absolute;
        top: 15vh;
        left: 600px;
        background-color:rgba(0, 0, 0, 0); 
    `
    const ParticlesContainter = styled(Particles)`
background-color:rgba(0, 0, 0, 0);
        position: relative;
        z-index: 1;
        height: 100vh;
        width: 100%;
        opacity: 0.5;
     `

    return (
        <div>

            <Planet1 src="https://zapodaj.net/images/72b4e64e19dba.png" alt="Planet1"/>
            <Planet2 src="https://zapodaj.net/images/37ea92089e9a9.png" alt="Planet1"/>
            <Planet3 src="https://zapodaj.net/images/80bb44a31ee0f.png" alt="Planet1"/>


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