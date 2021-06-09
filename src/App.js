import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/Home'
import HowToBuy from './pages/HowToBuy'
import Resources from './pages/TheProject'
import TheProject from './pages/TheProject'
import {Wrapper} from './components/GlobalComponents'
import SuspenseLoader from './components/SuspenseLoader';
import MetaBalls from './components/MetaBalls'
const App = () => {
    return (
        <Suspense fallback={<SuspenseLoader/>}>
        <Router>
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
                    <Route path="/resources">
                        <Resources/>
                    </Route>
                    <Route path="/buy">
                        <HowToBuy/>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
        </Suspense>
    )
}

export default App