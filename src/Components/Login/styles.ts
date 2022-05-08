import { styled } from '../../Services/Styled'

export const LoginContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0c0c0c'
})

export const LoginForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'min(400px, 100%)',
    backgroundColor: '#0c0c0c',
    padding: '20px',
    borderRadius: '5px'
})

export const Input = styled('input', {
    width: '100%',
    hrem: 40,
    border: '1px solid #ccc',
    brem: 4,
    padding: '0 10px',
    fontSize: '16px',
    outline: 'none',
    marginBottom: '0.1rem',
    '&:focus': {
        border: '1px solid #000'
    },
    variants: {
        error: {
            true: {
                border: '1px solid #f00'
            }
        },
        success: {
            true: {
                border: '1px solid #0f0'
            }
        },
        warning: {
            true: {
                border: '1px solid #ff0'
            }
        },
        info: {
            true: {
                border: '1px solid #0ff'
            }
        }
    }
})

export const Label = styled('label', {
    display: 'block',
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
})
