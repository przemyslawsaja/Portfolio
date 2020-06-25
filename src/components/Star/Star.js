import React from 'react';
import styled from "styled-components";


const StarWrapper = styled.div`
  opacity: 1;
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
`
const Ellipse = styled.ellipse`
  opacity: 0.9;
`
const Star = (props) => {
    const a = 30 * props.scale,
          center = (a/2),
          thickness = 3 * props.scale;
    return (

        <StarWrapper  x={props.x} y={props.y}>
            <svg width={a} height={a}>

                <radialGradient id="StarGradient">
                    <stop offset="20%" stop-color="#ffffff" />
                    <stop offset="70%" stop-opacity="0" stop-color="#ffffff" />
                </radialGradient>

                <Ellipse  cx={center}
                          cy={center}
                          rx={thickness}
                          ry={a}
                          fill="url('#StarGradient')"
                />
                <Ellipse  cx={center}
                          cy={center}
                          rx={a}
                          ry={thickness}
                          fill="url('#StarGradient')" />
                />

            </svg>
        </StarWrapper>
    );
};

export default Star;