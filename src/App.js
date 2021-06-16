import React, {Suspense,lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Wrapper} from './components/GlobalComponents'
import SuspenseLoader from './components/SuspenseLoader'

const Home = lazy(() => import('./pages/Home'))
const TheProject = lazy(() => import('./pages/TheProject'))
const HowToBuy = lazy(() => import('./pages/HowToBuy'))
const Docs = lazy(() => import('./pages/Docs'))
const NavBar = lazy(() => import('./components/NavBar'))
const MetaBalls = lazy(() => import('./components/MetaBalls'))
const Error = lazy(() => import('./pages/Error'))

const App = () => {
    return (
        <Suspense fallback={<SuspenseLoader/>}>
        <Router>
            <NavBar/>
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