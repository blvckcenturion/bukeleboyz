import React from 'react'
import styled from '@emotion/styled'

const MetaBalls = () => {
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
    const MetaBall1 = styled(AnimatedDiv)`
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
    const MetaBall2 = styled(AnimatedDiv)`
        width: 80%;
        height: 100%;
        background-color: #FF2079;
        bottom: -30px;
        left: -200px;
        animation: fly2 10s linear infinite;
        -webkit-animation: fly2 10s linear infinite;
    `

    const MetaBall3 = styled(AnimatedDiv)`
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

    const MetaBall4 = styled(AnimatedDiv)`
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
    const MetaBall5 = styled(AnimatedDiv)`
        border-radius: 100%;
        width: 50%;
        height: 60%;
        bottom: -200px;
        left: -100px;
        background-color: #ED4BFB;
        animation: fly 10s linear infinite;
        -webkit-animation: fly 10s linear infinite;
    `
    return (
        <>
            <MetaBall1/>
            <MetaBall2 />
            <MetaBall3 />
            <MetaBall4 />
            <MetaBall5/>
        </>
    )
}

export default MetaBalls
