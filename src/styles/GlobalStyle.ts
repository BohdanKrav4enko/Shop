import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.5;
        min-width: 375px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: inherit;
    }

    html {
        overflow-y: scroll;
        scrollbar-gutter: stable;
    }
    html, body {
        min-width: 375px;
        overflow-x: hidden;
    }
`;