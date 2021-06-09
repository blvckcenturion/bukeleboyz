import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {ReactComponent as Logo} from './assets/images/logo.svg'
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/Home'
import HowToBuy from './pages/HowToBuy'
import Resources from './pages/TheProject'
import TheProject from './pages/TheProject'
import styled from "@emotion/styled"
import Div100vh from 'react-div-100vh'
import {LogoWrapper} from './Components'


const App = () => {

    const Wrapper = styled(Div100vh)`
    width: 100vw;
    height: 100vh;
    background: #EBEBEB;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const AnimatedDiv = styled.div`
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
    const One = styled(AnimatedDiv)`
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
  const Two = styled(AnimatedDiv)`
    width: 80%;
    height: 100%;
    background-color: #FF2079;
    bottom: -30px;
    left: -200px;
    animation: fly2 10s linear infinite;
    -webkit-animation: fly2 10s linear infinite;
  `

  const Three = styled(AnimatedDiv)`
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

  const Four = styled(AnimatedDiv)`
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
  const Five = styled(AnimatedDiv)`
    border-radius: 100%;
    width: 50%;
    height: 60%;
    bottom: -200px;
    left: -100px;
    background-color: #ED4BFB;
    animation: fly 10s linear infinite;
    -webkit-animation: fly 10s linear infinite;
  `
  const SuspenseLoader = () => <Wrapper>
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
      <LogoWrapper animate={{scale: [.6, 1, .6]}} transition={{duration: 2, delay: 2, repeat:Infinity, type:"spring"}}>
          <Logo></Logo>
      </LogoWrapper>
  </Wrapper>

    return (
        <Suspense fallback={<SuspenseLoader/>}>
        <Router>
            <ScrollToTop/>
            <Wrapper>
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
                
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <TheProject></TheProject>
                    </Route>
                    <Route path="/resources">
                        <Resources></Resources>
                    </Route>
                    <Route path="/buy">
                        <HowToBuy></HowToBuy>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
        </Suspense>
    )
}

export default App