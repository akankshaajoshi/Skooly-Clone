import styled from 'styled-components';

interface CardTextProps {
  [propName: string]: any;
}

export const CardText = styled.div<CardTextProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
