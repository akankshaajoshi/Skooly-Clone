import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '@/assets/index.js';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: ${fontSizes.xSmall};
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.black};

  &:hover {
    cursor: pointer;
  }
`;

const function Button: React.FC<ButtonProps>({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
