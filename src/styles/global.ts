import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue-900: #2e384d;
        --blue-500: #4953B8; 
        --blue-300: #5965E0; 
        --blue-100: #B2B9FF; /*Texto azul*/
        --green-500: #04D361;
        --red-400: #E83F5B;

        --gray-900: #2c2c2c; /*Títulos*/
        --gray-800: #666666; /*Textos*/
        --gray-600: #878787; 
        --gray-200: #E1E1E1; /*Gray Line*/
        --gray-100: #F2F3F5; /*Background*/
        --white: #ffffff;
        
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    html {
        @media (max-width: 1080px) {
           font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        font-size: 1.6rem;
        background: var(--gray-900);
        color: var(--gray-200);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`