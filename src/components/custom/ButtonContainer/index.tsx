import styled from 'styled-components';

interface ButtonContainerProps {
  [propName: string]: any;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
`;
