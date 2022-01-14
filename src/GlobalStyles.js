import { createGlobalStyle  } from "styled-components";

export const GlobalStyles = createGlobalStyle `

html {
    scroll-behavior: smooth;  
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
        h1 {
            font-weight: 300;
            color: black;
        }
        p {
            color: black;
        }
        
        
}
`