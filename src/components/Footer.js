import React from 'react'
import {Section, Div, HR, SubHeading, H4} from './GlobalComponents'
import useWindowDimensions from '../utils/WindowDimensions'

const Footer = () => {
    const {width} = useWindowDimensions();
    const bigScreen = width >= 768;
    const HRS = bigScreen && <HR margin={"20px 0"} horizontal/>
    const SubSection = ({children}) => {
        return <Div width={bigScreen ? "31%" : "47%"} height={bigScreen ? "85%" : "100%"} flexDirection={"column"}>{children}</Div>
    }
    return (
        <footer>
            <Section height={bigScreen ? "70vh" : "85vh"}>
                <Div flexDirection={"column"}>
                    <Div height={bigScreen ? "90%" : "50%"}>
                        <SubSection>
                            {HRS}
                            <SubHeading>CHECK OUT</SubHeading>
                            <HR margin={"20px 0"} horizontal/>
                            <Div height={"40%"} flexDirection={"column"}>
                            <H4 primary>WHITE PAPER</H4>
                            <H4 primary>CONTRACT CODE</H4>
                            <H4 primary>CONTRACT ADDRESS</H4>
                            <H4 primary>LIVE CHART</H4>
                            </Div>
                            {HRS}
                        </SubSection>
                        <HR width={"100%"} vertical/>
                        <SubSection>
                            {HRS}
                            <SubHeading>FOLLOW US</SubHeading>
                            <HR margin={"20px 0"} horizontal/>
                            <Div height={"40%"} flexDirection={"column"}>
                            <H4 primary>FACEBOOK</H4>
                            <H4 primary>INSTAGRAM</H4>
                            <H4 primary>TWITTER</H4>
                            <H4 primary>LINKEDIN</H4>
                            </Div>
                            {HRS}
                        </SubSection>
                        { bigScreen && <HR width={"100%"} vertical/>}
                        { bigScreen && 
                        <SubSection>
                            <HR margin={"20px 0"} horizontal/>
                            <SubHeading>COMMUNITY</SubHeading>
                            <HR margin={"20px 0"} horizontal/>
                            <Div height={"40%"} flexDirection={"column"}>
                            <H4 primary>TELEGRAM</H4>
                            <H4 primary>DISCORD</H4>
                            <H4 primary>REDDIT</H4>
                            </Div>
                            <HR margin={"20px 0"} horizontal/>
                        </SubSection>
                        }
                    </Div>
                    <HR  width={"100%"} margin={bigScreen ? "40px 0" : "10px 0"} horizontal/>
                    <Div height={"8%"}>
                        <H4 primary>BUKELE FINANCE @ {new Date().getFullYear()}</H4>
                    </Div>
                </Div>
            </Section>
        </footer>
    )
}

export default Footer
