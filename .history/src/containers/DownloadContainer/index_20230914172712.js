import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';
import { borderRadius } from '@/assets';
import { Heading } from '@/components/base/Typography';
import { fontSizes } from '@/assets';
import {imga} from "public/mobilea.jpg"; 

const containerStyle = {
  backgroundColor: `${colors.white}`,
  height: `${heights.small}`,
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  gap: 30px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 300px;
  flex: 1;
  border-radius: ${borderRadius.xLarge};
  padding: 15px 15px 0px 15px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CardImage = styled.img`
  display: flex;
  align-self: center;
  border-radius: ${borderRadius.large};
  flex: 1;
`;

const index = () => {
  return (
    <Container style={containerStyle}>
      <Heading style={{ fontSize: fontSizes.large }}>Download Skooly mobile app</Heading>
      <CardContainer>
        <Card style={{ backgroundColor: `${colors.primary}` }}>
            <CardText>
            </CardText>
            <CardImage src={imga}/>
        </Card>
        <Card style={{ backgroundColor: `${colors.secondary}` }}>

        </Card>
      </CardContainer>
    </Container>
  );
};

export default index;
