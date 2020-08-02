import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
`;

export const ContentHeaderActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderAction = styled.div`
  margin: 0 5px;
`;

export const ContentTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`

`;

export const IconTitle = styled.div`

`;
