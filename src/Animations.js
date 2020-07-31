import { keyframes } from 'styled-components';

const FadeIn = () => keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const FadeOut = () => keyframes`
 0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(70deg);
            transform: rotateX(70deg);
    opacity: 0;
  }
`
const PopOut = () => keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
    filter: blur(1px);
  }
`
const SlideInDown = () => keyframes`
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  } 
`

const RocketAnimation = () => keyframes`
  0 % {
    opacity: 1;
  }
  50% {
    transform: rotate(110deg);   
  }  
  100% {
    transform: translate(3000px,1000px) rotate(110deg) ;
    opacity: 1;
  }  
`
const LiveDot = () => keyframes`
  0% {
    opacity: 0;
  }
  50% {
   opacity: 1;
  }
  100% {
   opacity: 0;
  }         
`
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
export { FadeIn, FadeOut, RocketAnimation, PopOut, SlideInDown, LiveDot, PulsateAnimation  }