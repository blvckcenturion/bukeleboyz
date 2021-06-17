import React from 'react'
import PageInfo from '../components/PageInfo'
import { PageContent, Section, MainHeading,Div, rightAnimation, H4, FastTransition,RegularText,leftAnimation } from '../components/GlobalComponents'
import useWindowDimensions from '../utils/WindowDimensions';
import Footer from '../components/Footer';

const Docs = () => {

    const {width} = useWindowDimensions();

    const bigScreen = width >= 768

    return (
        <>
        <PageInfo title={"Docs"}/>
        <PageContent>
            <Section height={"100vh"}>
                    <Div width={"80%"} flexDirection={"column"}>
                        <MainHeading style={{paddingTop: "23vh", opacity: "0"}} animate={{translateY: [100,0],skewY: [20,0], opacity:[0,1]}} transition={{delay:1, duration:1, type: "spring"}} >The White Paper</MainHeading>
                        <H4 animate={rightAnimation} transition={{delay:3, ...FastTransition}} style={{opacity:"0"}}  primary>A FULL GUIDE ABOUT BUKELE FINANCE.</H4>
                        <Div height={"10%"} width={bigScreen ? "50%" : "80%"} margin={bigScreen ? "30px 20% 0 20%" : "0 8%"}>
                    <RegularText style={{opacity:"0"}} animate={leftAnimation} transition={{delay:3.5, ...FastTransition}} >
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </RegularText>
                </Div>
                    </Div>
            </Section>
            <Section height={"200vh"} bgColor={"#E0E0E0"}>
                <H4>HELLO</H4>
            </Section>
            <Footer/>
        </PageContent>
        </>
    )
}

export default Docs
