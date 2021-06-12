import React from 'react'
import {H1, Content} from '../components/GlobalComponents';
import { useTranslation } from 'react-i18next';

const Error = () => {
    const {t} = useTranslation();
    return (

            <Content animate={{translateY: [-500, 0], opacity:[0,1]}} transition={{duration:1.5, delay: 1, type: "spring"}}>
                <H1>{t("error.message")}</H1>
            </Content>

    )
}

export default Error
