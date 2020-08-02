import { createGlobalStyle } from 'styled-components';

interface PropsGlobalStyled {
  dark?: boolean
}

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props:PropsGlobalStyled) => (props.dark ? 'white' : 'black')};
    background-color: ${(props:PropsGlobalStyled) => (props.dark ? 'black' : 'white')};
  }
`;
