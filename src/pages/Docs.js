import React from 'react'
import PageInfo from '../components/PageInfo'
import { PageContent, Section, MainHeading,Div, rightAnimation, H4, FastTransition } from '../components/GlobalComponents'

const Docs = () => {
    return (
        <>
        <PageInfo title={"Docs"}/>
        <PageContent>
        <Section height={"100vh"}>
                <Div width={"80%"} flexDirection={"column"}>
                    <MainHeading style={{paddingTop: "23vh", opacity: "0"}} animate={{translateY: [100,0],skewY: [20,0], opacity:[0,1]}} transition={{delay:1, duration:1.5, type: "spring"}} >The White Paper</MainHeading>
                    <H4 animate={rightAnimation} transition={{delay:3, ...FastTransition}} style={{opacity:"0"}}  primary>A full guide about Bukele Finance.</H4>
                </Div>
            </Section>
        </PageContent>
        </>
    )
}

export default Docs
