import React from 'react';
import styled from 'styled-components';

interface CopyrightProps {
  [propName: string]: any;
}

const CopyrightStyled = styled.span<CopyrightProps>`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 30px;
`;

function Copyright() {
  return (
    <CopyrightStyled>
      Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.
    </CopyrightStyled>
  );
}

export default Copyright;
