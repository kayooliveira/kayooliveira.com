import { styled } from '../../Services/Styled'
import { keyframes } from '@stitches/react'
import bgLarge from '../../Assets/img/bglarge.jpg'
export const IndexContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    minHeight: '100vh',
    height: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    padding: '1rem',
    flexDirection: 'column',
    backgroundImage: `url(${bgLarge})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    '@lg': {
        backgroundPosition: 'center'
    }
})

export const IndexContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    maxWidth: '100%',
    '& > span': {
        maxWidth: '8ch',
        '@md': {
            maxWidth: 'unset',
            fontSize: '3rem'
        }
    },
    '@md': {
        alignSelf: 'center'
    }
})

export const IndexLogo = styled('img', {
    width: '7.75rem',
    '@md': {
        alignSelf: 'center',
        width: '10rem'
    }
})

const bounce = keyframes({
    '0%': {
        transform: 'translateY(0)'
    },
    '50%': {
        transform: 'translateY(-0.5rem)'
    },
    '100%': {
        transform: 'translateY(0)'
    }
})

export const ArrowsDiv = styled('a', {
    position: 'absolute',
    widtth: '100%',
    bottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 0px 15px #fff)',
    animation: `${bounce} 1s ease-in-out infinite`,
    '& > svg': {
        marginTop: '-2.5rem',
        fill: '$white',
        fontSize: '4rem'
    }
})
