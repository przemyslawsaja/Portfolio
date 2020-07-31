import React from 'react';
import Particles from "react-particles-js";
import styled from "styled-components";

const StarsContainer = styled(Particles)`
        height: 100vh;
        width: 100vw;
        z-index: -2;
        position: fixed;        
    `
const Stars = () => {
    return (
        <StarsContainer
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
    );
};

export default Stars;