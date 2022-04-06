import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: 0;
        background-color: transparent;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
    }
    html {
        font-size: 62.5%;
        --black: #282c34;
        --gray: #4b5c6b;
        --white: #fff;
        --blue: #2c88d9;
        --red: #e83f5b;

        --border: #c3cfd9;
        --background300: #f0f4f7;
        --background100: #ffffff;
    }
    body {
        background-color: var(--background100);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--black);
    }
    a, button {
        cursor: pointer;
    }
    button {
        font-size: 0;
    }
`;
