import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/Home'
import HowToBuy from './pages/HowToBuy'
import Docs from './pages/Docs'
import TheProject from './pages/TheProject'
import {Wrapper} from './components/GlobalComponents'
import SuspenseLoader from './components/SuspenseLoader'
import MetaBalls from './components/MetaBalls'
import NavBar from './components/NavBar'
import Error from './pages/Error'

const App = () => {
    return (
        <Suspense fallback={<SuspenseLoader/>}>
        <Router>
            <NavBar/>
            <ScrollToTop/>
            <Wrapper>
            <MetaBalls/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <TheProject/>
                    </Route>
                    <Route path="/docs">
                        <Docs/>
                    </Route>
                    <Route path="/buy">
                        <HowToBuy/>
                    </Route>
                    <Route path="*">
                        <Error/>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
        </Suspense>
    )
}

export default App