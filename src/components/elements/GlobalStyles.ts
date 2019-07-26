import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, :after, :before {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }
`
export default GlobalStyle
