import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    :root{
        --font1 : 'Bebas Neue', cursive;
        --font2 : 'Average Sans', sans-serif;
        --font3 : 'Noto Sans', sans-serif;
        --font4 : 'Source Sans Pro', sans-serif;
        --font5 : 'Roboto', sans-serif;
    }
`;