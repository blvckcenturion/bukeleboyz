import React from 'react'
import {Helmet} from 'react-helmet';

const PageInfo = ({title, description, base}) => {
    return (
        <Helmet>
            <title>{title} | BukeleFinance</title>
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
            <link rel="manifest" href="favicon/site.webmanifest"/>
            <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#00aba9"/>
            <meta name="theme-color" content="#ffffff"></meta>
            <meta name="description" content="Tutorial for React Helmet" />
            <meta name="theme-color" content="#E0E0E0" />
            {/* <base target="_blank" href="https://blog.logrocket.com/" /> */}
        </Helmet>
    )
}

export default PageInfo
