import styled from 'styled-components';

export const Container = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "userInformations repositories";
  grid-template-columns: 350px 1fr;
  grid-row-gap: 80px;
  margin-top: 40px;
`;

export const ContainerInformationUser = styled.section`
  grid-area: userInformations;
`;

export const ContainerRepositories = styled.section`
  grid-area: repositories;
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 20px 10px;
`;
