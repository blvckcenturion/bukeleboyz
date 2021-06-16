import React from 'react'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import {socials} from '../../utils/data'
import {LogoWrapper, H1, Content} from '../../components/GlobalComponents';

import {
  HR,
  Socials,
  StyledSocial,
  leftAnimation,
  rightAnimation,
  FastTransition
} from './Components';

const Home = () => {
    return (
        <Content animate={{translateY: [-500, 0], opacity:[0,1]}} transition={{duration:1.5, delay: 1, type: "spring"}}>
          <LogoWrapper animate={{rotate: [-180, 0]}} transition={{duration: 1.5, delay: 2.5, type:"spring"}}>
              <Logo/>
          </LogoWrapper>
          <HR animate={leftAnimation} transition={{delay:4, ...FastTransition}}/>
            <H1 animate={leftAnimation} transition={{delay:4.5, ...FastTransition}}>
              <Link to="/about">THE PROJECT</Link>
            </H1>
            <H1 animate={rightAnimation} transition={{delay:5, ...FastTransition}}>
                <Link to="/buy">HOW TO BUY</Link>
            </H1>
            <H1 animate={leftAnimation} transition={{delay:5.5, ...FastTransition}}><Link to="/docs">DOCS</Link></H1>
            <HR animate={rightAnimation} transition={{delay:4, ...FastTransition}}/>
            <Socials animate={leftAnimation} transition={{duration: .5, delay:6, type:"spring"}}>
                {socials.map((e, i) => <a href={e.href} target="_blank" rel="noreferrer" key={i}><StyledSocial icon={e.icon}></StyledSocial></a>)}
            </Socials>
            </Content>
    )
}

export default Home
