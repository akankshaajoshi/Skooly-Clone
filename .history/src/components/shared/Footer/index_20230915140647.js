import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import logo from '@/assets/images/skooly-logo.png';
import { SubHeading, Text } from '@/components/base/Typography';
import {about, schoolsAndBusinesses, legal} from '@/utils/constants';

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SmallContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 40px;
`;

const index = () => {
  return (
    <Container>
      <Info>
        <SmallContainer>
          <Img src={logo} />
        </SmallContainer>
        <SmallContainer>
          <SubHeading>About</SubHeading>
          {about.map((ele)=><Text>{ele}</Text>)}
        </SmallContainer>
        <SubHeading>For Schools & Businesses</SubHeading>
        <SmallContainer>
          <SubHeading>Legal</SubHeading>
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Mobile app</SubHeading>
        </SmallContainer>
      </Info>
    </Container>
  );
};

export default index;
