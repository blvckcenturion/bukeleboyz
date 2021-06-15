import React from 'react'
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import {ReactComponent as rocket} from '../assets/images/one.svg'
import {ReactComponent as chartSvg} from '../assets/images/chart.svg'
import {ReactComponent as group} from '../assets/images/group.svg'
import useWindowDimensions from '../utils/WindowDimensions';

const TheProject = () => {
    const {width} = useWindowDimensions();

    const Section = styled.section`
        width: 100%;
        margin: ${props => props.margin};
        height: ${props => props.height};
        display: flex;
        flex-direction: ${props => props.flexDirection ? props.flexDirection : "column"};
        align-items:center;
        justify-content: center;
        background-color: ${props => props.bgColor ? props.bgColor : "transparent"}
    `

    const Div = styled.div`
        width: ${props => props.width ? props.width : "100%"};
        height: ${props => props.height ? props.height : "100%"};
        display: flex;
        flex-direction: ${props => props.flexDirection};
        align-items: ${props => props.alignItems ? props.alignItems : "center"};
        margin: ${props => props.margin};
        justify-content: space-evenly;
    `

    const H6 = styled.h6`
        font-family: 'Raleway', sans-serif;
        color: ${props => props.color ? props.color : "white"};
        font-size: 1.5rem;
        margin: 0;
        text-align: center;
        @media (max-width: 767px){
            font-size: 0.8rem;
        }
    `

    const Welcome = styled(H6)`
    @media (max-width: 767px){
        font-size: 0.8rem;
        padding-top: 23vh;
    }
    `
    const H5 = styled.h5`
        font-family: 'ExtendedSecondary', sans-serif;
        color: ${props => props.primary ? "#10222E" : "#045877"};
        font-size: ${props => props.primary ? "1.1rem" : "0.9rem"};
        margin: 10px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: ${props => props.primary ? "0.9rem" : "0.7rem"};
            margin: 5px;
        }
    `

    const Slogan = styled(H5)`
        @media (max-width: 768px){
            margin: 5px 20px;
        }
    `

    const MainHeading = styled.h2`
        font-family: 'ExtendedMain', sans-serif;
        font-size: 4rem;
        margin: 30px 0;
        letter-spacing: 7px;
        color: #022F40;
        text-align: center;
        @media (max-width: 768px){
            font-size: 2rem;
            
        }
        @media (max-width: 1050px) and (min-width: 768px){
            font-size: 2.5rem;
            margin: 30px 0;
        }
    `
    const Heading = styled(MainHeading)`
        font-size: 3.1rem;
        @media (max-width: 768px) and (min-width:350px){
            font-size: 1.5rem;
        }
        @media (max-width: 349px){
            font-size: 1.2rem;
        }
        @media (max-width: 1050px) and (min-width: 768px){
            font-size: 2.1rem;
        }
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
        margin: 30px 20% 0 20%;
        font-size: 1.5rem;
        text-align:center;
        @media (max-width: 768px){
            margin: 0 8%;
        }
    `

    const MainButton = styled.button`
        background-color: transparent;
        border: 3px solid #022F40;
        color: #022F40;
        border-radius: 20px;
        font-family: 'ExtendedSecondary', sans-serif;
        padding: 30px 20px;
        width: 30%;
        @media (max-width: 767px){
            width: 40%;
            font-size: 0.7rem;
            padding: 15px 0;
        }
    `
    const ActionButtons = styled.div`
        display: flex;
        margin: 10% 5% 0 5%;
        width: 70%;
        align-items: space-evenly;
        justify-content: space-evenly;
        @media (max-width: 767px){
            width: 90%;
        }
        @media (max-width: 767px){
            margin: 15% 3% 5% 3%;
        }
    `
    const ChartGrid = styled.div`
        display: grid;
        width: 95%;
        height: 10%;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: 1fr;
        align-items: stretch;
        justify-items:stretch;
        @media (max-width: 767px){
            height: 35%;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4,1fr);
        }
    `

    const MetricElement = styled.div`
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `  

    const HRH = styled.div`
        background-color: ${props => props.color ? props.color : "#022F40"};
        width: ${props => props.width ? props.width : "80%"};
        height: 3px;
        margin: 50px 0;
        @media (max-width: 768px){
            margin: 20px 0;
        }
    `

    const H2 = styled.h3`
        color: ${props => props.color ? props.color : "#020047"};
        font-family: "ExtendedMain";
        letter-spacing: 5px;
        text-align: ${props => props.textAlign ? props.textAlign : "center"};
        margin: ${props => props.margin ? props.margin : "0"};
        @media(max-width: 767px){
            font-size: 1rem;
        }
    `

    const P = styled.p`
        color: ${props => props.color ? props.color : "#033B4F"};
        font-family: 'Raleway', sans-serif;
        margin: ${props => props.margin};
        text-align: ${props => props.textAlign};
    `

    const Rocket = styled(rocket)`
        transform: scaleX(-1) translateX(-20%);
        @media (max-width: 767px){
            transform: scale(.7) scaleX(-1);
        }
    `

    const RoadMap = styled.div`
        width: 80%;
        height: 80%;
        display: grid;
        grid-template-columns: 45% 10% 45%;
        grid-template-rows: repeat(3, 7.5% 23.3%) 7.5%; 
        grid-template-areas: "a b c"  "d e f"  "g h i"  "j k m" "n o p" "q r s" "t u v";
        @media (max-width: 767px){
            grid-template-columns: 10% 90%;
            grid-template-rows: repeat(3, 7.5% 23.3%) 7.5%; 
            grid-template-areas: "b a" "e d" "h i" "k m" "o n" "r q" "u c";
        }
    `
    const HRV = styled.div`
        height: 100%;
        background-color: #022F40;
        width: 3px;
        margin: 0 10px;
    `

    const Chart = styled(chartSvg)`
        transform: scale(0.6);
    `
    const Circle = styled.div`
        border: 12px solid #022F40;
        grid-area: ${props => props.area};
        border-radius: 50%;
        width: 3vw;
        height: 3vw;
        align-self: center;
        justify-self: center;
        @media (max-width: 1050px){
            width: 6vw;
            height: 6vw;
            border: 5px solid #022F40;
        }
        @media (max-width: 1050px) and (min-width: 768px){
            color: red;
            border: 10px solid #022F40;
        }
    `

    const Line = styled.div`
        width: 5px;
        height: 100%;
        background-color: #022F40;
        grid-area: ${props => props.area};
        align-self: center;
        justify-self: center;
    `

    const Tokenomics = styled.div`
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(5,1fr);
        width:100%;
        height:100%;
    `
    const Group = styled(group)`
        transform: scale(0.7);
    `

    const H3 = styled.h3`
        color: ${ props => props.color ? props.color : "#022F40"};
        font-family: "ExtendedMain";
        align-self: center;
        justify-self: center;
        grid-area: ${props => props.area};
        margin: 0;
        
        @media (min-width: 768px){
            justify-self: ${props => props.justify};
            padding: 0 30px;
        }
    `

    const RoadMapText = styled(H6)`
        color: white;
        padding: 0 10px;
        text-align: justify;
        grid-area: ${props => props.area};
        font-size: 1.2rem;
    `


    return (
        //animate={{opacity: [0,1], translateY: [200,0]}} transition={{duration: .7, delay:1, type:"spring"}}
        <PageContent >
            <Section height={"100vh"}>
                <Welcome>Welcome to</Welcome>
                <MainHeading>BUKELE FINANCE</MainHeading>
                <Slogan primary>TAKE OFF WITH US. SAFELY TO EL SALVADOR.</Slogan>
                <Intro>
                    <H6>
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </H6>
                </Intro>
                <ActionButtons>
                    <MainButton type="button">BUY NOW</MainButton>
                    <MainButton type="button">LIVE CHART</MainButton>
                </ActionButtons>
            </Section>
            <Section bgColor={"#E0E0E0"} height={width >= 768 ? "130vh" : "210vh"}>
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
                <HRH/>
                <Div width={"80%"} height={"70%"}>
                    <Div width={width >= 767 ? "50%" : "99%"} flexDirection={"column"} style={{zIndex:"10"}}>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>COMMUNITY DRIVEN</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                        <HRH/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>AUTOMATIC LP</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                        <HRH/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <H2>Static Rewards</H2>
                            <P textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</P>
                        </Div>
                    </Div>
                    <Div width={width >= 767 ? "50%" : "1%"} flexDirection={"column"}><Rocket/></Div>
                </Div>
            </Section>
            <Section height={"130vh"}>
                <Heading>The RoadMap</Heading>
                <H5>OUR PLANS FOR 2021.</H5>
                <RoadMap>
                    <H3 area={"a"} justify={"end"}>Q2 - 2021</H3>
                    <Circle area={"b"}/>
                    <RoadMapText area={"d"}>We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun.</RoadMapText>
                    <Line area={"e"}/>
                    <Circle area={"h"}/>
                    <H3 area={"i"} justify={"start"}>Q3 - 2021</H3>
                    <Line area={"k"}/>
                    <RoadMapText area={"m"}>We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun.</RoadMapText>
                    <H3 area={"n"} justify={"end"}>Q4 - 2021</H3>
                    <Circle area={"o"}/>
                    <RoadMapText area={"q"}>We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun.</RoadMapText>
                    <Line area={"r"}/>
                    <Circle area={"u"}/>
                </RoadMap>
            </Section>
            <Section height={"150vh"} bgColor={"#E0E0E0"}>
                <Div height={"60vh"} flexDirection={"column"}>
                    <Heading>TOKENOMICS</Heading>
                    <Div height={"80%"}  width={"90vw"}>
                        <Div width={"40%"}>
                            <Chart/>
                        </Div>
                        <Div height={"60%"} width={"40%"} flexDirection={"column"}>
                            <Tokenomics>
                                <H5>Dev Fund:</H5>
                                <H6 color="#189AB4">10%</H6>
                                <H5>Minted Tokens:</H5>
                                <H6 color="#189AB4">10%</H6>
                                <H5>Burned Tokens:</H5>
                                <H6 color="#189AB4">10%</H6>
                                <H5>BSC Holders:</H5>
                                <H6 color="#189AB4">10%</H6>
                                <H5>Dev Fund:</H5>
                                <H6 color="#189AB4">10%</H6>
                            </Tokenomics>
                        </Div>
                    </Div>
                </Div>
                <HRH/>
                <Div height={"70vh"} flexDirection={"column"}>
                    <Heading>JOIN OUR COMMUNITY</Heading>
                    <Div height={"90%"} width={"90vw"}>
                        <Div width={"40%"} height={"80%"} flexDirection={"column"}>
                            <Div flexDirection={"column"}>
                                <P textAlign={"justify"}>If you'd like to donate to the Devs, send ETH, SHIB or LEASH here. Thank you for your support! WOOF! 0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375 <br /><br />
                                    Our community keeps growing everyday. Please join our social platforms to get updates using the links below. There are 150k+ people in our different groups! <br /> <br />
                                Our community keeps growing everyday. Please join our social platforms to get updates using the links below. There are 150k+ people in our different groups!</P>
                                <Div width={"100%"} >
                                    <MainButton>TELEGRAM</MainButton>
                                    <MainButton>DISCORD</MainButton>
                                    <MainButton>REDDIT</MainButton>
                                </Div>
                            </Div>
                        </Div>
                        <Div width={"40%"} height={"80%"}><Group/></Div>
                    </Div>
                </Div>
            </Section>
            <Section height={ width >= 767 ? "70vh" : "120vh"}>
                <Div height={"90%"} flexDirection={width >= 768 ? "row" : "column"}>
                    <Div width={ width >= 767 ? "50%" : "90%"} height={width >= 768 ? "90%" : "40%"} flexDirection={"column"} >
                        <HRH/>
                        <H2>RESOURCES</H2>
                        <HRH/>
                        <H5 primary>WHITE PAPER</H5>
                        <H5 primary>CONTRACT CODE</H5>
                        <H5 primary>CONTRACT ADDRESS</H5>
                        <H5 primary>LIVE CHART</H5>
                        <HRH/>
                    </Div>
                    { width >= 767 && <HRV/>}
                    <Div width={ width >= 767 ? "50%" : "90%"} height={width >= 768 ? "90%" : "40%"} flexDirection={"column"}>
                        <HRH/>
                        <H2>FOLLOW US</H2>
                        <HRH/>
                        <H5 primary>FACEBOOK</H5>
                        <H5 primary>INSTAGRAM</H5>
                        <H5 primary>TWITTER</H5>
                        <H5 primary>LINKEDIN</H5>
                        <HRH/>
                    </Div>
                </Div>
            </Section>
        </PageContent>
    )
}
export default TheProject
