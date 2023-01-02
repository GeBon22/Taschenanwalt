import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        scroll-behavior: smooth;
    }
    * {
        box-sizing: border-box;
    }

    
:root {
    --primary-color: #f3e8e8;
    --secondary-color: #572887;
    --default-border-radius: 10px;
    --button-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    --button-background: #e6ceee;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

    h1,
    h2,
    h3 {
        text-align: center;
    }
`;

export default GlobalStyles;
