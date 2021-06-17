import React from 'react'
import { PageContent, Section, Div,H4, MainHeading, Button, rightAnimation, FastTransition} from '../components/GlobalComponents'
import Footer from '../components/Footer';
import useWindowDimensions from '../utils/WindowDimensions'
import { steps } from '../utils/data'
import Step from '../components/Step'

const HowToBuy = () => {
    const {width} = useWindowDimensions()
    return (
        <PageContent>
            <Section height={"100vh"}>
                <Div width={"80%"} flexDirection={"column"}>
                    <MainHeading style={{paddingTop: "23vh", opacity: "0"}} animate={{translateY: [100,0],skewY: [20,0], opacity:[0,1]}} transition={{delay:1, duration:1, type: "spring"}} >How to buy Bukele</MainHeading>
                    <H4 animate={rightAnimation} transition={{delay:3, ...FastTransition}} style={{opacity:"0"}}  primary>A step by step guide on how to buy Bukele from Pancakeswap.</H4>
                    <Div height={"40%"}>
                        <Button animate={{opacity: [0,1], translateY: [-100,0]}} transition={{delay:3.5, ...FastTransition}} style={{opacity:"0", width: `${width <= 767 && '70%'}`}}> GO TO PANCAKESWAP</Button>
                    </Div>
                </Div>
            </Section>
            <Section height={width >= 768 ? "400vh" : "700vh"} bgColor={"#E0E0E0"}>
                <Div height={"5%"} width={ width >= 768 ? "60%" : "80%"}>
                    <H4>Recommended to read on PC, and follow along on your Phone to make it easier. This will take approximately 15-30 minutes if you're new.</H4>
                </Div>
                <Step height={"19%"} step={steps[0]}> <H4>Recommended to read on PC, and follow along on your Phone to make it easier. This will take approximately 15-30 minutes if you're new.</H4></Step>
                <Step height={"19%"} step={steps[1]}/>
                <Step height={"19%"} step={steps[2]}/>
                <Step height={"19%"} step={steps[3]}><H4>Recommended to read on PC, and follow along on your Phone to make it easier. This will take approximately 15-30 minutes if you're new.</H4></Step>
                <Step height={"19%"} step={steps[4]}><H4>Recommended to read on PC, and follow along on your Phone to make it easier. This will take approximately 15-30 minutes if you're new.</H4></Step>
            </Section>
            <Footer/>
        </PageContent>
    )
}



export default HowToBuy
