import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,body{
        font-size: 14px;
        font-family: Cabin, -apple-system, 'Noto Sans KR', sans-serif;
    }
    a{
        text-decoration: none;
        color:#1d1d1d;
    }
    li{
        list-style: none;
    }
`;
