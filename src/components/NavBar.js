import React from 'react'
import styled from '@emotion/styled'
import {useHistory, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import useWindowDimensions from '../utils/WindowDimensions';
import { useTranslation } from 'react-i18next'
import {motion} from "framer-motion";
 

const NavBar = () => {
    const {width} = useWindowDimensions()
    const location = useLocation();
    const history = useHistory();
    const {t} = useTranslation();
    let heading;
    switch(location.pathname){
        case "/about":
            heading = t("sections.project");
            break;
        case "/buy":
            heading = t("sections.buy");
            break;
        case "/docs":
            heading = t("sections.resources")
            break;
        default:
            heading = t("error.title");
            break;
    }
    const LogoDiv = styled(motion.div)`
        width: 7vh;
        heigth: 7vh;
        display: flex;
        justify-content: center;
        grid-area: e;
    `
    const StyledNav = styled(motion.div)`
        width: 100vw;
        height: 10vh;
        z-index: 500;
        position: absolute;
        top: -200px;
        left: 0;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: .4fr 2px 2.2fr 2px .4fr;
        grid-template-areas: "a b c d e";
        justify-items: center;
        align-items: center;
        @media (max-width: 767px){
            grid-template-columns: .3fr 2px .7fr;
            grid-template-areas: "a b c d e";
        }
        border-bottom: 2px solid #020047;
    `
    const BackButton = styled(FontAwesomeIcon)`
        font-size: 5vh;
        color: #020047;
    `
    const BackButtonDiv = styled(motion.button)`
        width: 8vh;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: a;
        background-color: transparent;
        border: none;
    `
    const H1 = styled(motion.h1)`
        font-family: "ExtendedSecondary";
        color: #020047;
        letter-spacing: 4px;
        margin: 0;
        font-size: 4vh;
        grid-area: c;
        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: right;
            margin:0 10% 0 0;
        }
    `
    const HR = styled.div`
        height: 10vh;
        width: 2px;
        background-color: #020047;
    `
    return (
        location.pathname !== "/" && 
       <StyledNav animate={{translateY: [0,200]}} transtion={{duration: 2, delay:2, type:"spring"}}>
            <BackButtonDiv type="button" onClick={() => history.push('/', {})} animate={{translateX: [-100,0], opacity:[0,1]}} transtion={{duration: 2, delay:4, type:"spring"}}>
                <BackButton icon={faArrowLeft}/>
            </BackButtonDiv>
            <HR />
            <H1 animate={{translateY: [-100,0], opacity:[0,1]}} transtion={{duration: 2, delay:4, type:"spring"}} >{heading}</H1>
            {width >= 768 &&
            <>
                <HR />
                <LogoDiv animate={{translateX: [100,0], opacity:[0,1]}} transtion={{duration: 2, delay:4, type:"spring"}}>
                    <Logo></Logo>
                </LogoDiv>
            </>
            }
       </StyledNav>
    )
}

export default NavBar
