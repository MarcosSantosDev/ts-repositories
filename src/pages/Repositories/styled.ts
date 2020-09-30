import styled from 'styled-components';

export const Container = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "actions actions" "userInformations repositories";
  grid-template-columns: 350px 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 40px;
`;

export const SubMenu = styled.div`
  grid-area: actions;
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-column-gap: 10px;
  height: 80px;
  border-bottom: 1px solid #e1e4e8;
`;

export const ContainerInformationUser = styled.section`
  grid-area: userInformations;
  margin-top: -80px;
`;

export const ContainerRepositories = styled.section`
  grid-area: repositories;
`;

export const ContentTitle = styled.p`
  grid-column: 2 / 3;
  display: flex;
  align-items: flex-end;
  padding: 10px;

  width: min-content;
  border-bottom: 2px solid #f9826c;
  margin-bottom: -1px;
  font-weight: 600;

  > h3 {
    font-size: 16px;
  }
  > svg {
    margin-right: 5px;
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 20px 10px;
`;
