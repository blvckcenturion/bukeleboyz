import React from 'react'
import {Wrapper, Div, H1} from './GlobalComponents';
import MetaBalls from './MetaBalls'

const SuspenseLoader = () => {
    return (
        <Wrapper>
          <MetaBalls/>
          <Div width={"90%"} height={"90%"} style={{zIndex: "99"}}>
            <H1>Loading..</H1>
          </Div>
        </Wrapper>
    )
}

export default SuspenseLoader
