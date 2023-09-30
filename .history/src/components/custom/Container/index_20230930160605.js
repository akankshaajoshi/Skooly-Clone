import React, { HTMLProps } from 'react';
import styled from 'styled-components';

type ContainerProps = HTMLProps<HTMLDivElement>;

const Container = styled.div<ContainerProps>`
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

  /* Add any additional styles using the spread rest properties */
  ${({ ...rest }) => ({ ...rest })}
`;

const YourComponent: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default YourComponent;
