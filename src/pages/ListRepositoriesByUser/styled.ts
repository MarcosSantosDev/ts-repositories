import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: auto;
  grid-row-gap: 80px;
  margin-top: 40px;
`;

export const ContainerInformationUser = styled.div`
  grid-column: 1 / 2;
`;

export const ContainerRepositories = styled.div`
  grid-column: 2 / 3;
`;

export const ContentTitle = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 50px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;
