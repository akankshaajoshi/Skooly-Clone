import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const ContainerComponent = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 80px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return <ContainerComponent {...rest}>{children}</ContainerComponent>;
};

export default Container;
