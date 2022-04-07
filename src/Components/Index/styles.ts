import { styled } from '../../Services/Styled'

export const IndexContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: '$background'
})

export const IndexContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
})

export const IndexTitle = styled('h1', {
    color: '#fff',
    fontSize: '4rem',
    margin: 0
})

export const IndexDescription = styled('p', {
    color: '#4d4d4d',
    alignSelf: 'flex-end',
    marginTop: '-0.5rem'
})
