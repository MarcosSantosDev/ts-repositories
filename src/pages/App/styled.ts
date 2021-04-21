import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-areas:
      "header"
      "content";
  grid-template-rows: 50px auto;
`;
