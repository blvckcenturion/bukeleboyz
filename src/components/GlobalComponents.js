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
background: #cccccc;
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
@media (max-width: 768px){
    font-size: 1.1rem;
    margin: 20px 0;
}
&:hover {
    color: #EBEBEB;
    transition: 1s;
}
`
export const Section = styled.section`
    width: 100%;
    margin: ${props => props.margin};
    height: ${props => props.height};
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "column"};
    align-items:center;
    justify-content: center;
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"}
`
export const Div = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
    margin: ${props => props.margin};
    justify-content: space-evenly;
`
export const PageContent = styled(motion.div)`
    z-index: 99;
    position: absolute;
    justify-content: space-evenly;
    overflow-y: scroll;
    overflow-x:hidden;
    width: 100vw;
    height: 100vh;
`
//Text
export const RegularText = styled.p`
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,sans-serif;
    font-weight: 400;
    color: ${props => props.color ? props.color : "white"};
    font-size: 1.2rem;
    margin: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    @media (max-width: 767px){
        font-size: 0.9rem;
    }
`
export const H4 = styled.h4`
    font-family: 'ExtendedSecondary', sans-serif;
    color: ${props => props.primary ? "#10222E" : "#045877"};
    font-size: ${props => props.primary ? "1.1rem" : "0.9rem"};
    margin: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: ${props => props.primary ? "0.9rem" : "0.7rem"};
        margin: 5px;
    }
`
export const MainHeading = styled.h2`
    font-family: 'ExtendedMain', sans-serif;
    font-size: 4rem;
    margin: 30px 0;
    letter-spacing: 7px;
    color: #022F40;
    text-align: center;
    @media (max-width: 768px){
        font-size: 2rem;
        
    }
    @media (max-width: 1050px) and (min-width: 768px){
        font-size: 2.5rem;
        margin: 30px 0;
    }
`
export const Heading = styled(MainHeading)`
    font-size: 3.1rem;
    @media (max-width: 768px) and (min-width:350px){
        font-size: 1.5rem;
    }
    @media (max-width: 349px){
        font-size: 1.2rem;
    }
    @media (max-width: 1050px) and (min-width: 768px){
        font-size: 2.1rem;
    }
`
export const SubHeading = styled.h3`
    color: ${props => props.color ? props.color : "#020047"};
    font-family: "ExtendedMain";
    letter-spacing: 5px;
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    margin: ${props => props.margin ? props.margin : "0"};
    @media(max-width: 767px){
        font-size: 1rem;
    }
`
export const H3 = styled.h3`
    color: ${ props => props.color ? props.color : "#022F40"};
    font-family: "ExtendedMain";
    align-self: center;
    justify-self: center;
    grid-area: ${props => props.area};
    margin: 0;
    @media (min-width: 768px){
        justify-self: ${props => props.justify};
        padding: 0 30px;
    }
`
//Extras
export const HR = styled.div`
    background-color: #022F40;
    width: ${props => props.horizontal ? props.width ? props.width : "80%" : "3px"};
    height: ${props => props.vertical ? props.width : "3px" };
    margin: ${props => props.margin};
`
export const Button = styled.button`
    background-color: transparent;
    border: 3px solid #022F40;
    color: #022F40;
    border-radius: 20px;
    font-family: 'ExtendedSecondary', sans-serif;
    padding: 30px 20px;
    width: 30%;
    @media (max-width: 767px){
        width: 40%;
        font-size: 0.7rem;
        padding: 15px 0;
    }
`
