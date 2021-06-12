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
export const Content = styled(motion.div)`
  opacity: 0;
  filter: unset;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 8% 0 8% 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: #FFFFF;
`

export const H1 = styled(motion.h1)`
font-family: "ExtendedSecondary";
color: #020047;
letter-spacing: 4px;
margin: 40px 0;
border:none;
background-color:
@media (max-width: 768px){
    font-size: 1.3rem;
    margin: 20px 0;
}
&:hover {
    color: #EBEBEB;
    transition: 1s;
}
`