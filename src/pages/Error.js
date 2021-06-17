import React from 'react'
import {H1, Div,  } from '../components/GlobalComponents';

const Error = () => {

    return (
            <Div animate={{translateY: [-500, 0], opacity:[0,1]}} transition={{duration:1.5, delay: 1, type: "spring"}}>
                <H1>Error Page Not Found</H1>
            </Div>
    )
}

export default Error
