import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    background: #0d1117;
    color: #c9d1d9;
  }
`;
