import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  display: grid;
  grid-template-columns: 20px auto;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  justify-content: flex-start;
  align-items: center;
`;

export {
  Card,
};
