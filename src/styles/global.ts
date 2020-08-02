import { createGlobalStyle } from 'styled-components';

interface PropsGlobalStyled {
  dark?: boolean
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
