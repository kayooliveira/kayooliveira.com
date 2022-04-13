import React from 'react'
import { Text } from '../../UI/Text'
import { MainContainer } from './styles'
import logo from '../../Assets/img/logo.png'
const Main = () => {
    return (
        <MainContainer id="main">
            <img alt="logo" src={logo} />
            <Text
                as={'h1'}
                size="h1"
                font="logo"
                transform="uppercase"
                color="primary"
                align="center"
            >
                Kayo Oliveira
            </Text>
            <Text color="white" transform="uppercase" weight="bold">
                website in development
                <br /> please come back soon...
            </Text>
        </MainContainer>
    )
}

export default Main
