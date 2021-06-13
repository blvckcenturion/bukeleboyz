import React from 'react'
import {PageContent} from '../components/GlobalComponents'
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import {ReactComponent as moon} from '../assets/images/one.svg'

const TheProject = () => {
    const Section = styled.section`
        width: 100%;
        padding: ${props => props.padding};
        height: ${props => props.height};
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        background-color: ${props => props.bgColor ? props.bgColor : "transparent"}
    `

    const Div = styled.div`
        width: ${props => props.width};
        height: ${props => props.height};
        display: flex;
        flex-direction: ${props => props.flexDirection};
        align-items: ${props => props.alignItems ? props.alignItems : "center"};
        margin: ${props => props.margin};
        justify-content: space-evenly;
    `

    const H4 = styled.h4`
        font-family: 'Raleway', sans-serif;
        color: #EBEBEB;
        font-size: 1.5rem;
        margin: 0;
    `
    const H5 = styled.h5`
        font-family: 'ExtendedSecondary', sans-serif;
        color: ${props => props.primary ? "#10222E" : "#045877"};
        font-size: ${props => props.primary ? "1.2rem" : "1rem"};
        margin: 10px;
    `

    const H1 = styled.h1`
        font-family: 'ExtendedMain', sans-serif;
        font-size: 5vh;
        margin: 30px 0;
        letter-spacing: 7px;
        color: #022F40;
        
    `
    const PageContent = styled(motion.div)`
        z-index: 99;
        position: absolute;
        align-items: center;
        justify-content: space-evenly;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100vw;
        height: 100vh;
        bottom: 0;
    `
    const Intro = styled.div`
        margin: 0 20%;
        font-size: 1.5rem;
        text-align:center;
    `

    const MainButton = styled.button`
        background-color: transparent;
        border: 3px solid #022F40;
        color: #022F40;
        border-radius: 20px;
        font-family: 'ExtendedSecondary', sans-serif;
        padding: 30px 20px;
        width: 30%;
    `
    const ActionButtons = styled.div`
        display: flex;
        margin: 5%;
        width: 70%;
        align-items: space-evenly;
        justify-content: space-evenly;
    `
    
    const ChartGrid = styled.div`
        display: grid;
        width: 95%;
        height: 10%;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: 1fr;
        align-items: stretch;
        justify-items:stretch;
    `

    const MetricElement = styled.div`
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `  

    const HR = styled.div`
        background-color: #022F40;
        width: 80%;
        height: 3px;
        margin: 50px 0;
    `

    const H2 = styled.h2`
        color: ${props => props.color ? props.color : "#020047"};
        font-family: "ExtendedMain";
        letter-spacing: 5px;
        text-align: ${props => props.textAlign ? props.textAlign : "start"};
        margin: ${props => props.margin ? props.margin : "0"};
    `

    const P = styled.p`
        color: ${props => props.color ? props.color : "#045877"};
        font-family: 'Raleway', sans-serif;
        margin: ${props => props.margin};
        text-align: ${props => props.textAlign};
    `

    const Moon = styled(moon)`
        transform: scaleX(-1) translateX(-20%);
    `

    return (
        //
        <PageContent animate={{opacity: [0,1], translateY: [200,0]}} transition={{duration: .7, delay:1, type:"spring"}}>
            <Section height={"100vh"} padding={"10vh 0 0 0"}>
                <H4>Welcome to</H4>
                <H1>BUKELE FINANCE</H1>
                <H5 primary>TAKE OFF WITH US. SAFELY TO EL SALVADOR.</H5>
                <br />
                <br />
                <br />
                <Intro>
                    <H4>
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </H4>
                </Intro>
                <ActionButtons>
                    <MainButton type="button">BUY NOW</MainButton>
                    <MainButton type="button">LIVE CHART</MainButton>
                </ActionButtons>
            </Section>
            <Section bgColor={"#E0E0E0"} height={"130vh"}>
                <ChartGrid>
                    <MetricElement>
                        <H5 primary>$0.00001</H5>
                        <H5>PRICE</H5>
                    </MetricElement>
                    <MetricElement>
                        <H5 primary>333000</H5>
                        <H5>HOLDERS</H5>
                    </MetricElement>
                    <MetricElement>
                        <H5 primary>581,534,358,095.1</H5>
                        <H5>SUPPLY</H5>
                    </MetricElement>
                    <MetricElement>
                        <H5 primary>$581,534,358.1</H5>
                        <H5>MARKET CAP</H5>
                    </MetricElement>
                </ChartGrid>
                <HR/>
                <Div width={"80%"} height={"70%"} flexDirection={"row"}>
                    <Div width={"40%"} height={"100%"} flexDirection={"column"} >
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>COMMUNITY DRIVEN</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                        <HR/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>AUTOMATIC LP</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                        <HR/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>Static Rewards</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                    </Div>
                    <Div width={"60%"} height={"100%"} flexDirection={"column"}>
                        <Moon></Moon>
                    </Div>
                </Div>

            </Section>
            <Section height={"60vh"}>

            </Section>

        </PageContent>
    )
}

export default TheProject
