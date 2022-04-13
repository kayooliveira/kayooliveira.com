import React from 'react'
import * as C from './styles'
import logo from '../../Assets/img/logo.png'
import { Text } from '../../UI/Text'
import { FaCaretDown, FaChevronDown } from 'react-icons/fa'
const Index: React.FC = () => {
    return (
        <>
            <C.IndexContainer>
                <C.IndexContent>
                    <C.IndexLogo alt="logo" src={logo} />
                    <Text
                        font="logo"
                        color="white"
                        transform="uppercase"
                        size="h3"
                    >
                        Kayo Oliveira
                    </Text>
                </C.IndexContent>
                <C.ArrowsDiv href="#main">
                    <FaChevronDown />
                    <FaChevronDown />
                    <FaChevronDown />
                </C.ArrowsDiv>
            </C.IndexContainer>
        </>
    )
}

export default Index
