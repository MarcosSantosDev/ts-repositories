import styled from 'styled-components';

const Card = styled.div`
  /* max-width: 200px; */
  width: 100%;
  height: 50px;
  border: 1px solid #EEE;
  border-radius: 8px;
  
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
