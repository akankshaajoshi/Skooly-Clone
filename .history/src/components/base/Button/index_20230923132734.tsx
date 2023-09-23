import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '@/assets/index';
// Button.tsx

const BaseButton = styled.button<{ variant: string; disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: ${(props) =>
    fontSizes.xSmall}; // You may need to define 'fontSizes' and 'colors' in a theme
  font-weight: 600;
  color: ${(props) =>
    colors.white}; // You may need to define 'fontSizes' and 'colors' in a theme
  background-color: ${(props) =>
    colors.black}; // You may need to define 'fontSizes' and 'colors' in a theme

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.disabled &&
    `
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  `}
`;

interface ButtonProps {
  variant: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  disabled = false,
  onClick,
  children,
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <BaseButton variant={variant} onClick={handleClick} disabled={disabled}>
      {children}
    </BaseButton>
  );
};

export default Button;
