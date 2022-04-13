import { createStitches, globalCss } from '@stitches/react'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Styled stitches theme
 *
 */

export const { styled, css } = createStitches({
    media: {
        esm: '(max-width: 575.98px)', // Extra small
        sm: '(min-width: 576px)', // Small
        md: '(min-width: 768px)', // Medium
        lg: '(min-width: 992px)', // Large
        elg: '(min-width: 1200px)' // Extra large
    },
    theme: {
        colors: {
            primary: '#E4273D',
            primaryLight: '#F24E5E',
            primaryDark: '#B92229',
            secondary: '#FFD56A',
            secondaryLight: '#FFE6B2',
            secondaryDark: '#FFB851',
            white: '#FFFFFF',
            black: '#000000',
            success: '#00C851',
            warning: '#FFD56A',
            info: '#00B0F6'
        },
        space: {
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        fontSizes: {},
        fonts: {
            primary: 'Nunito',
            logo: 'Candal'
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        shadows: {},
        zIndices: {},
        transitions: {
            fast: '0.1s',
            medium: '0.2s',
            slow: '0.3s',
            verySlow: '0.4s',
            ultraSlow: '1s'
        }
    },
    prefix: 'class',
    utils: {}
})

export const cssGlobal = globalCss({
    '@import':
        "url('https://fonts.googleapis.com/css2?family=Candal&family=Nunito&display=swap')",
    '*': {
        boxSizing: 'border-box'
    },
    html: {
        lineHeight: 1.15,
        webkitTextSizeAdjust: '100%',
        fontFamily: '"Nunito", Roboto, Arial, Helvetica, sans-serif',
        scrollBehavior: 'smooth'
    },
    body: {
        backgroundColor: '#1d1e2c',
        margin: 0
    },
    main: {
        display: 'block'
    },
    h1: {
        fontSize: '2em',
        margin: '0.67em 0'
    },
    hr: {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible'
    },
    pre: {
        fontFamily: 'monospace, monospace',
        fontSize: '1em'
    },
    a: {
        backgroundColor: 'transparent'
    },
    'abbr[title]': {
        borderBottom: 'none',
        textDecoration: 'underline dotted'
    },
    'b, strong': {
        fontWeight: 'bolder'
    },
    'code, kbd, samp': {
        fontFamily: 'monospace, monospace',
        fontSize: '1em'
    },
    small: {
        fontSize: '80%'
    },
    'sub, sup': {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline'
    },
    sub: {
        bottom: '-0.25em'
    },
    sup: {
        top: '-0.5em'
    },
    img: {
        borderStyle: 'none'
    },
    button: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        WebkitAppearance: 'button'
    },
    'button, input, optgroup, select, textarea': {
        margin: 0
    },
    'button,input': {
        overflow: 'visible'
    },
    'button, select': {
        textTransform: 'none'
    },
    'button::-moz-focus-inner': {
        borderStyle: 'none',
        padding: 0
    },
    'button:-moz-focusring': {
        outline: '1px dotted ButtonText'
    },
    fieldset: {
        border: '1px solid silver',
        margin: 0,
        padding: '0.35em 0.625em 0.75em'
    },
    legend: {
        boxSizing: 'border-box',
        color: 'inherit',
        display: 'table',
        maxWidth: '100%',
        padding: '0',
        whiteSpace: 'normal'
    },
    progress: {
        verticalAlign: 'baseline'
    },
    textarea: {
        overflow: 'auto'
    },
    '[type="checkbox"], [type="radio"]': {
        boxSizing: 'border-box',
        padding: 0
    },
    '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
        {
            height: 'auto'
        },
    '[type="search"]': {
        WebkitAppearance: 'textfield',
        outlineOffset: '-2px'
    },
    '[type="search"]::-webkit-search-decoration': {
        WebkitAppearance: 'none'
    },
    '::-webkit-file-upload-button': {
        WebkitAppearance: 'button',
        font: 'inherit'
    },
    details: {
        display: 'block'
    },
    summary: {
        display: 'list-item'
    },
    template: {
        display: 'none'
    },
    '[hidden]': {
        display: 'none'
    }
})
