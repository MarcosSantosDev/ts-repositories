import styled from 'styled-components';

export const Container = styled.div`
  border: 0px;
  border-bottom: 2px solid transparent;
  transition: .5s;
  cursor: pointer;

  &.active {
    border-bottom-color: #f9826c;

    svg {
      fill: #f0f6fc;
    }
    p {
      font-weight: 600;
      color: #f0f6fc;
    }
  }

  &:hover {
    border-bottom-color: #6e7681;

    svg {
      fill: #c9d1d9;
    }
    p {
      color: #c9d1d9;
    }
  }
`;

export const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 14px auto auto;
  grid-column-gap: 10px;
  justify-content: center;
  padding: 0 15px 12px;
`;

export const OptionIcon = styled.div`
  svg {
    fill: #8b949e;
  }
`;

export const OptionLabel = styled.p`
  white-space: nowrap;
  color: #8b949e;
  font-size: 16px;
`;

export const OptionCounter = styled.div`
  height: 22px;
  padding: 0 8px;
  color: #8b949e;
  background-color: #30363d;
  border-radius: 20px;
  text-align: center;
  line-height: 1.5;
`;
