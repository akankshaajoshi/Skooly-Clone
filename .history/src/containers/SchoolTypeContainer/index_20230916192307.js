import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { Heading } from '@/components/base/Typography';
import { colors, borderRadius } from '@/assets';
import { schoolTypes } from '@/utils/constants';
import { StyledLink } from '@/components/custom/StyledLink';

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 30px;
  max-width: 100px;
  height: 50px;
  border-radius: ${borderRadius.large};
  background-color: ${colors.white};
  box-shadow: 0 4px 8px 0 rgba(16, 25, 40, 0.08);

  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 32px 0 rgba(16, 25, 40, 0.16);
  }
`;

const index = () => {
  return (
    <Container style={{ backgroundColor: `${colors.quaternary}` }}>
      <Heading>Pick your school type to get started</Heading>
      <ElementContainer>
        {schoolTypes.map((ele) => (
          <StyledLink to={ele[0]}>
            <Element>{ele[1]}</Element>{' '}
          </StyledLink>
        ))}
      </ElementContainer>
    </Container>
  );
};

export default index;
