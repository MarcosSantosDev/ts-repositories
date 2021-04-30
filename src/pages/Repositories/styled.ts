import styled from 'styled-components';

export const Container = styled.section`
  grid-area: content;
  display: grid;
  grid-template-areas: "userInformations repositories";
  grid-template-columns: 340px 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 40px;
`;

export const ContainerInformationUser = styled.div`
  grid-area: userInformations;
  margin-top: -40px;
`;

export const ContainerRepositories = styled.aside`
  grid-area: repositories;
  margin-top: 40px;
`;

export const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 20px 50px 20px;
`;
