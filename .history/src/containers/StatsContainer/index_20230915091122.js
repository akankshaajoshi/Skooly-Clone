import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { CardText } from '@/components/custom/CardText';
import { Heading, Text } from '@/components/base/Typography';
import { colors } from '@/assets';
import { stats } from '@/utils/constants';
import Stat from '@/components/custom/Stat/Stat';

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
`;

const Index = () => {
  return (
    <Container style={{ backgroundColor: `${colors.quaternary}`, flexDirection: 'row' }}>
      <CardText>
        <Heading>No.1 platform enabling happier learning journeys</Heading>
        <Text>
          Skooly connects schools, educators & learners, enables easy collaboration to acheive their best - which is why
          we are trusted by thousands of schools worldwide
        </Text>
      </CardText>
      <CardText>
        {stats.map((ele, ind) => (
          <Stat value={ele} label="words"></Stat>
        ))}
      </CardText>
    </Container>
  );
};

export default Index;
