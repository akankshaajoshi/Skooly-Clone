import styled, { css } from 'styled-components';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  paddingTop?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const Container = styled.div<ContainerProps>`
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

Container.defaultProps = {
  paddingTop: '80px',
  flexDirection: 'column',
};

export default Container;
