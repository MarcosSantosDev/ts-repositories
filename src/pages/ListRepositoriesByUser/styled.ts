import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  margin-top: 40px;
`;

export const ContainerInformationUser = styled.div`
  grid-column: 1 / 2;
`;

export const ContainerRepositories = styled.div`
  grid-column: 2 / 3;
`;

export const ContentActions = styled.div`
  display: flex;
  aling-items: center;
  max-width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 5px;
`;

export const ContentTitle = styled.h2``;

export const ContainerCard = styled.div``;
