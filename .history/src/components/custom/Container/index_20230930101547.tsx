import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
  paddingTop?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children?: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: ${(props) => props.paddingTop || '80px'};
  flex-direction: ${(props) => props.flexDirection || 'column'};

  ${(props) =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

StyledContainer.defaultProps = {
  paddingTop: '80px',
  flexDirection: 'column',
};

const Container: React.FC<ContainerProps> = ({ children, ...restProps }) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default Container;
