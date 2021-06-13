import React from 'react'
import styled from '@emotion/styled'
import {motion} from 'framer-motion'
const MetaBalls = () => {

    const AnimatedDiv = styled(motion.div)`
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
        background-color: #3BB8BA;
        top: -300px;
        z-index: 1;
        animation: fly 12s linear infinite;
        transform: rotate(0) translate(80px) rotate(0);
    `
    const MetaBall2 = styled(AnimatedDiv)`
        width: 80%;
        height: 70%;
        background-color: #C2F261;
        bottom: -100px;
        left: -200px;
        z-index: 5;
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
        background-color: #75E6DA;
        animation: fly3 10s linear infinite;
        -webkit-animation: fly3 10s linear infinite;
    `

    const MetaBall4 = styled(AnimatedDiv)`
        border-radius: 50%;
        width: 50%;
        height: 80%;
        margin: auto;
        bottom: 50px;
        right: -100px;
        z-index: 6;
        background-color: #189AB4;
        animation: fly3 10s linear infinite;
        -webkit-animation: fly3 10s linear infinite;
    `
    const MetaBall5 = styled(AnimatedDiv)`
        border-radius: 100%;
        width: 50%;
        height: 60%;
        bottom: 50px;
        left: -100px;
        z-index: 2;
        background-color: #1D5B5E;
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
