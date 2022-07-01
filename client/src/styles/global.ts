import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{ 
        Margin: 0; padding: 0; box-sizing: border-box;
        font-family: Dm Sans, sans-serif;
    }

    ul {
        list-style: none
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
