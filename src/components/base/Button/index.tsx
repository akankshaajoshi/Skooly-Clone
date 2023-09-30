import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '@/assets';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
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

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  onClick: () => {}, // Provide a default empty function
  children: 'Button', // Provide a default button text
};

export default Button;
