import React from 'react';
import styled from "styled-components";

const StartView = () => {
    const Avatar = styled.img `
        width: 300px;
        height: 300px;
        z-index: 2;
        position: absolute;
        bottom: 20px;
        right: 20px;
        background-color:rgba(0, 0, 0, 0);

        webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ;
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ;
        
        @-webkit-keyframes scale-in-center {
          0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes scale-in-center {
          0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
          }
        }

    `
    return (
        <div>
            <Avatar src="https://zapodaj.net/images/befd32d0e72b2.png" alt="Meteor3" />
        </div>
    );
};

export default StartView;