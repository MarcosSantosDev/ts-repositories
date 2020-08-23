import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100px;
  border-radius: 12px;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.text};
  max-width: 280px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    opacity: 0.8;
  }
`;
