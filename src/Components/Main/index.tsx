import React from 'react'
import { Text } from '../../UI/Text'
import { MainContainer } from './styles'
import logo from '../../Assets/img/logo.png'
import { FaGithub, FaInstagram } from 'react-icons/fa'
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
                website in development, please come back soon...
            </Text>
            <div>
                <Text
                    color="warning"
                    css={{
                        fontSize: '5rem',
                        margin: '1rem',
                        display: 'inline-block'
                    }}
                    as="a"
                    href="https://github.com/kayooliveira"
                    target="_blank"
                >
                    <FaGithub />
                </Text>
                <Text
                    color="warning"
                    css={{
                        fontSize: '5rem',
                        margin: '1rem ',
                        display: 'inline-block'
                    }}
                    as="a"
                    href="https://instagram.com/kayooliveira.dev"
                    target="_blank"
                >
                    <FaInstagram />
                </Text>
            </div>
        </MainContainer>
    )
}

export default Main
