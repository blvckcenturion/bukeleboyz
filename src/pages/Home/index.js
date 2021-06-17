import React from 'react'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import {socials} from '../../utils/data'
import {HR, H1, Div, leftAnimation, rightAnimation, FastTransition} from '../../components/GlobalComponents';
import useWindowDimensions from '../../utils/WindowDimensions';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Home = () => {
    const {width} = useWindowDimensions();
    const StyledSocial = styled(FontAwesomeIcon)`
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

    return (
        <Div width={"100%"} height={"100%"} flexDirection={"column"} style={{zIndex:"99", opacity:"0"}}  animate={{translateY: [-500, 0], opacity:[0,1]}} transition={{duration:1.5, delay: 1, type: "spring"}}>
            <Div width={"50%"} height={"20%"} animate={{rotate: [-180, 0]}} transition={{duration: 1.5, delay: 2.5, type:"spring"}}>
                <Logo/>
            </Div>
            <HR width={width >= 768 ? "60%" : "80%" } animate={leftAnimation} transition={{delay:4, ...FastTransition}} horizontal/>
            <Div height={"40%"} flexDirection={"column"}>
              <H1 animate={leftAnimation} transition={{delay:4.5, ...FastTransition}}>
                <Link to="/about">THE PROJECT</Link>
              </H1>
              <H1 animate={rightAnimation} transition={{delay:5, ...FastTransition}}>
                  <Link to="/buy">HOW TO BUY</Link>
              </H1>
              <H1 animate={leftAnimation} transition={{delay:5.5, ...FastTransition}}><Link to="/docs">DOCS</Link></H1>
            </Div>
            <HR width={width >= 768 ? "60%" : "80%" } animate={rightAnimation} transition={{delay:4, ...FastTransition}} horizontal/>
            <Div animate={leftAnimation} transition={{duration: .5, delay:6, type:"spring"}} height={"10%"} width={width >= 768 ? "60%" : "80%" }>
                {socials.map((e, i) =>
                  <a href={e.href} target="_blank" rel="noreferrer" key={i}>
                    <StyledSocial icon={e.icon}></StyledSocial>
                  </a>)
                }
            </Div>
          </Div>
    )
}

export default Home
