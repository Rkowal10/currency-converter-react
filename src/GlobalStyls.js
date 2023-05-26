import { createGlobalStyle } from "styled-components";
import background from "./money2.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        color: ${({ theme }) => theme.color.gondola};
        font-size: large;
        padding: 10px;
        background-image: url("${background}");
        background-attachment: fixed;
        background-position: center;
        background-size: 100%;
    }
`;