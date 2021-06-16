import React from 'react'
import {Wrapper, Content, LogoWrapper, H1} from './GlobalComponents';
import MetaBalls from './MetaBalls'

const SuspenseLoader = () => {
    return (
        <Wrapper>
          <MetaBalls/>
          <Content>
          <LogoWrapper>
            <H1>Loading..</H1>
          </LogoWrapper>
          </Content>
        </Wrapper>
    )
}

export default SuspenseLoader
