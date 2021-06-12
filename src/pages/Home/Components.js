import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export const LogoWrapper = styled(motion.div)`
width: 10vw;
height: 10vw;
@media (max-width: 1050px){
    width: 15vh;
    height: 15vh;
}
margin: 0 0 10% 0;
`
export const HR = styled(motion.div)`
width: 40vw;
height: 2px;
background: #020047;
margin: 10px 0 10px 0;
@media (max-width: 1050px){
    width: 70vw;
}

`

export const Socials = styled(motion.div)`
width: 35vw;
height: 10vw;
display: flex;
align-items: center;
justify-content: space-evenly;

@media (max-width: 1050px){
    width: 75vw;
    margin: 10% 0 0 0;
}

@media (min-width: 701px) and (max-width: 1050px){
    width: 55vw;
    margin: 5% 0 5% 0;
}
`
export const StyledSocial = styled(FontAwesomeIcon)`
color: #020047;
width: 2rem;
font-size: 2rem;
@media (max-width: 768px){
    width: 1.5rem;
    font-size: 1.5rem;
}
&:hover {
    color: #EBEBEB;
    transition: 1s;
}
`
export const LanguageSelector = styled(motion.div)`
    width: 20%;
    height: 13%;
    font-family: "ExtendedSecondary";
    position: absolute;
    z-index: 500;
    right: -300px;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px){
    width: 40%;
    }
`
export const LanguageButton = styled.button`
border: ${props => props.primary ? '2px solid #EBEBEB;' : 'none'};
border-radius: 20%;
color: ${props => props.primary ? '#EBEBEB' : '#020047'};
padding: ${props => props.primary ? '10px;' : '0'};
background-color: transparent;
@media (max-width: 768px){
    font-size: 1rem;
}
`
export const leftAnimation = {
    opacity: [0, 1],
    translateX: [-100, 0]
}
export const rightAnimation = {
    opacity: [0, 1],
    translateX: [100, 0]
}
export const FastTransition = {
    duration: .5,
    type: "tween"
}

    
