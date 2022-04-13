import { styled } from '../../Services/Styled'

export const Text = styled('span', {
    fontSize: '1rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    letterSpacing: 'normal',
    color: '#000000',
    textAlign: 'left',
    variants: {
        font: {
            primary: {
                fontFamily: '$primary'
            },
            logo: {
                fontFamily: '$logo'
            }
        },
        size: {
            h1: {
                fontSize: '2.5rem'
            },
            h2: {
                fontSize: '2rem'
            },
            h3: {
                fontSize: '1.5rem'
            },
            h4: {
                fontSize: '1.25rem'
            },
            h5: {
                fontSize: '1rem'
            },
            h6: {
                fontSize: '0.875rem'
            },
            span: {
                fontSize: '0.8rem'
            }
        },
        weight: {
            normal: {
                fontWeight: 'normal'
            },
            bold: {
                fontWeight: 'bold'
            },
            light: {
                fontWeight: 'light'
            }
        },
        style: {
            normal: {
                fontStyle: 'normal'
            },
            italic: {
                fontStyle: 'italic'
            }
        },
        color: {
            white: {
                color: '$white'
            },
            black: {
                color: '$black'
            },
            primary: {
                color: '$primary'
            },
            secondary: {
                color: '$secondary'
            },
            success: {
                color: '$success'
            },
            danger: {
                color: '$danger'
            },
            warning: {
                color: '$warning'
            },
            info: {
                color: '$info'
            }
        },
        align: {
            left: {
                textAlign: 'left'
            },
            center: {
                textAlign: 'center'
            },
            right: {
                textAlign: 'right'
            }
        },
        transform: {
            uppercase: {
                textTransform: 'uppercase'
            },
            lowercase: {
                textTransform: 'lowercase'
            },
            capitalize: {
                textTransform: 'capitalize'
            }
        },
        decoration: {
            underline: {
                textDecoration: 'underline'
            },
            lineThrough: {
                textDecoration: 'line-through'
            },
            overline: {
                textDecoration: 'overline'
            },
            none: {
                textDecoration: 'none'
            }
        }
    }
})
