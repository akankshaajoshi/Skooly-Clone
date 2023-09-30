import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CopyrightProps extends HTMLAttributes<HTMLSpanElement> {}

const CopyrightComponent = styled.span<CopyrightProps>`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 30px;
`;

// eslint-disable-next-line react/function-component-definition
export const Copyright: React.FC<CopyrightProps> = ({ children, ...rest }) => {
  return <CopyrightComponent {...rest}>{children}</CopyrightComponent>;
};
