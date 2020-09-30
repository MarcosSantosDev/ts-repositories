import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0 30px;
`;

export const NavbarLogo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const NavbarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconTitle = styled.div`
  > svg {
    fill: ${(props) => props.theme.colors.secondary};
  }
`;
