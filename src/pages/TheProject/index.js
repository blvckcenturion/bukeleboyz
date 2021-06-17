import React from 'react'
import useWindowDimensions from '../../utils/WindowDimensions';
import {TH5, SecondaryButton, RoadMapText, RoadMap, Rocket, Chart, Group,  Circle, Line, TokenomicsGrid, TokenInfoGrid} from './Components';
import {Section, Div, PageContent, RegularText, H4, MainHeading, Heading, SubHeading, H3, HR, Button, leftAnimation, FastTransition, rightAnimation} from '../../components/GlobalComponents';

const TheProject = () => {
    const {width} = useWindowDimensions();
    const bigScreen = width >= 768
    return (
        <PageContent>
            <Section height={"100vh"}>
                <RegularText animate={leftAnimation} transition={{delay: 1, ...FastTransition}} style={{paddingTop: "23vh", opacity:'0'}}>Welcome to</RegularText>
                <MainHeading animate={{translateY: [100,0],skewY: [20,0], opacity:[0,1]}} style={{opacity:"0"}} transition={{delay:1.5, duration:1.5, type: "spring"}}>BUKELE FINANCE</MainHeading>
                <H4 animate={rightAnimation} transition={{delay:3, ...FastTransition}} style={{margin: `${!bigScreen && "5px 20px"}`, opacity:"0"}} primary>TAKE OFF WITH US. SAFELY TO EL SALVADOR.</H4>
                <Div height={"50%"} width={bigScreen ? "50%" : "80%"} margin={bigScreen ? "30px 20% 0 20%" : "0 8%"}>
                    <RegularText style={{opacity:"0"}} animate={leftAnimation} transition={{delay:3.5, ...FastTransition}} >
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </RegularText>
                </Div>
                <Div animate={rightAnimation} style={{opacity:"0"}} transition={{delay:4, duration:1, type: "spring"}} height={"70%"} width={bigScreen ? "70%" : "90%"} margin={bigScreen ? "2% 0 0 0" : "3% 0"}>
                    <Button type="button">BUY NOW</Button>
                    <Button type="button">LIVE CHART</Button>
                </Div>
            </Section>
            <Section bgColor={"#E0E0E0"} height={bigScreen ? "130vh" : "220vh"}>
                <TokenInfoGrid>
                    <Div flexDirection={"column"}>
                        <H4 primary>$0.00001</H4>
                        <H4>PRICE</H4>
                    </Div>
                    <Div flexDirection={"column"}>
                        <H4 primary>333000</H4>
                        <H4>HOLDERS</H4>
                    </Div>
                    <Div flexDirection={"column"}>
                        <H4 primary>581,534,358,095.1</H4>
                        <H4>SUPPLY</H4>
                    </Div>
                    <Div flexDirection={"column"}>
                        <H4 primary>$581,534,358.1</H4>
                        <H4>MARKET CAP</H4>
                    </Div>
                </TokenInfoGrid>
                <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                <Div width={"80%"} height={"70%"}>
                    <Div width={bigScreen ? "50%" : "99%"} flexDirection={"column"} style={{zIndex:"10"}}>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <SubHeading>COMMUNITY DRIVEN</SubHeading>
                            <RegularText color={"#033B4F"} textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</RegularText>
                        </Div>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <SubHeading>AUTOMATIC LP</SubHeading>
                            <RegularText color={"#033B4F"} textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</RegularText>
                        </Div>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <Div height={'30%'} flexDirection={"column"} alignItems={"start"} margin={"0 5%"}>
                            <SubHeading>Static Rewards</SubHeading>
                            <RegularText color={"#033B4F"} textAlign={"justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</RegularText>
                        </Div>
                    </Div>
                    <Div width={bigScreen ? "50%" : "1%"} flexDirection={"column"}><Rocket/></Div>
                </Div>
            </Section>
            <Section height={"130vh"}>
                <Heading>The RoadMap</Heading>
                <H4>OUR PLANS FOR 2021.</H4>
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
            <Section height={bigScreen ? "150vh" : "270vh"} bgColor={"#E0E0E0"}>
                <Div height={bigScreen ? "60vh" : "100vh"} flexDirection={"column"}>
                    <Heading>TOKENOMICS</Heading>
                    <Div height={"80%"}  width={"90vw"} flexDirection={bigScreen ? "row" : "column"}>
                        <Div width={bigScreen ? "40%" : "90%"} height={bigScreen ? "100%" : "50%"}>
                            <Chart/>
                        </Div>
                        <Div height={bigScreen ? "60%" : "50%"} width={ bigScreen ? "40%" : "80%"} flexDirection={"column"}>
                            <TokenomicsGrid>
                                <TH5>Dev Fund:</TH5>
                                <RegularText color="#189AB4">10%</RegularText>
                                <TH5>Minted Tokens:</TH5>
                                <RegularText color="#189AB4">10%</RegularText>
                                <TH5>Burned Tokens:</TH5>
                                <RegularText color="#189AB4">10%</RegularText>
                                <TH5>BSC Holders:</TH5>
                                <RegularText color="#189AB4">10%</RegularText>
                                <TH5>Dev Fund:</TH5>
                                <RegularText color="#189AB4">10%</RegularText>
                            </TokenomicsGrid>
                        </Div>
                    </Div>
                </Div>
                <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                <Div height={bigScreen ? "70vh" : "160vh"} flexDirection={"column"}>
                    <Heading>JOIN OUR COMMUNITY</Heading>
                    <Div height={"80%"} width={"90vw"} flexDirection={bigScreen ? "row":"column"}>
                        <Div width={bigScreen ? "50%" : "100%"} height={bigScreen ? "100%" : "70%"} flexDirection={"column"} style={{zIndex:"10"}}>
                            <Div width={"90%"} height={bigScreen ? "100%" :"40%"}>
                            <RegularText color={"#033B4F"} style={{width:"100%"}} textAlign={"justify"}>If you'd like to donate to the Devs, send ETH, SHIB or LEASH here. Thank you for your support! WOOF!<br /><br />
                                    Our community keeps growing everyday. Please join our social platforms to get updates using the links below. There are 150k+ people in our different groups! <br /> <br />
                            </RegularText>
                            </Div>
                            <Div width={"100%"} height={bigScreen ? "100%" :"40%"} flexDirection={width >= 1050 ? "row" : "column"}>
                                <SecondaryButton type="button">TELEGRAM</SecondaryButton>
                                <SecondaryButton>DISCORD</SecondaryButton>
                                <SecondaryButton>REDDIT</SecondaryButton>
                            </Div>
                        </Div>
                        <Div width={bigScreen ? "40%": "90%"} height={bigScreen ? "80%" : "40%"}><Group/></Div>
                    </Div>
                </Div>
            </Section>
            <Section height={bigScreen ? "75vh" : "120vh"}>
                <Div height={"90%"} flexDirection={bigScreen ? "row" : "column"}>
                    <Div width={bigScreen ? "50%" : "90%"} height={bigScreen ? "90%" : "50%"} flexDirection={"column"} >
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <SubHeading>RESOURCES</SubHeading>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <H4 primary>WHITE PAPER</H4>
                        <H4 primary>CONTRACT CODE</H4>
                        <H4 primary>CONTRACT ADDRESS</H4>
                        <H4 primary>LIVE CHART</H4>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                    </Div>
                    { bigScreen && <HR width={"100%"} vertical/>}
                    <Div width={ bigScreen ? "50%" : "90%"} height={bigScreen ? "90%" : "50%"} flexDirection={"column"}>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <SubHeading>FOLLOW US</SubHeading>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                        <H4 primary>FACEBOOK</H4>
                        <H4 primary>INSTAGRAM</H4>
                        <H4 primary>TWITTER</H4>
                        <H4 primary>LINKEDIN</H4>
                        <HR margin={bigScreen ? "40px 0" : "20px 0"} horizontal/>
                    </Div>
                </Div>
            </Section>
        </PageContent>
    )
}
export default TheProject
