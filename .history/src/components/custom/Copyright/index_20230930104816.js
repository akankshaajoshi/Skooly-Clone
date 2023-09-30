import styled from 'styled-components';

interface CopyrightProps {
  [propName: string]: any;
}

export const Copyright = styled.span<CopyrightProps>`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 30px;
`;
