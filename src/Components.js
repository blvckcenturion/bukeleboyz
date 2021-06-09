import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import Div100vh from 'react-div-100vh';

export const LogoWrapper = styled(motion.div)`
width: 10vw;
height: 10vw;
@media (max-width: 1050px){
    width: 15vh;
    height: 15vh;
}
margin: 0 0 10% 0;
`

export const Wrapper = styled(Div100vh)`
width: 100vw;
height: 100vh;
background: #EBEBEB;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`

export const AnimatedDiv = styled.div`
position: absolute;
filter: blur(80px);
opacity: 0.8;
-webkit-filter: blur(80px);
transform: rotate(0) translate(200px) rotate(0);
-webkit-transform: rotate(0) translate(200px) rotate(0);
-moz-transform: rotate(0) translate(200px) rotate(0);
-ms-transform: rotate(0) translate(200px) rotate(0);
-o-transform: rotate(0) translate(200px) rotate(0);
`
export const One = styled(AnimatedDiv)`
border-radius: 100%;
border-radius: 100%;
width: 150%;
height: 100%;
background-color: #a960ee;
top: -300px;
z-index: 1;
animation: fly 12s linear infinite;
transform: rotate(0) translate(80px) rotate(0);
`
export const Two = styled(AnimatedDiv)`
width: 80%;
height: 100%;
background-color: #FF2079;
bottom: -30px;
left: -200px;
animation: fly2 10s linear infinite;
-webkit-animation: fly2 10s linear infinite;
`

export const Three = styled(AnimatedDiv)`
border-radius: 100%;
width: 50%;
height: 60%;
bottom: -100px;
right: -100px;
z-index: 10;
background-color: #90e0ff;
animation: fly3 10s linear infinite;
-webkit-animation: fly3 10s linear infinite;
`

export const Four = styled(AnimatedDiv)`
border-radius: 50%;
width: 50%;
height: 80%;
margin: auto;
bottom: 100px;
right: -100px;
z-index: 4;
background-color: #440BD4;
animation: fly3 10s linear infinite;
-webkit-animation: fly3 10s linear infinite;
`
export const Five = styled(AnimatedDiv)`
border-radius: 100%;
width: 50%;
height: 60%;
bottom: -200px;
left: -100px;
background-color: #ED4BFB;
animation: fly 10s linear infinite;
-webkit-animation: fly 10s linear infinite;
`