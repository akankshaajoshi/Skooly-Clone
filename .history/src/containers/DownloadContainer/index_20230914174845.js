import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';
import { borderRadius } from '@/assets';
import { Heading } from '@/components/base/Typography';
import { fontSizes } from '@/assets';
import { Button } from '@/components/base/Button';
import imga from '@/assets/images/mobilea.jpg';
import imgb from '@/assets/images/mobileb.jpg';
import { downloads } from '@/utils/constants';

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
  border-radius: ${borderRadius.xLarge};
  flex: 1;
  max-width: 150px;
  max-height: 300px;
  padding: 0px 10px 0px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const index = () => {
  return (
    <Container style={containerStyle}>
      <Heading style={{ fontSize: fontSizes.large }}>Download Skooly mobile app</Heading>
      <CardContainer>
        <Card style={{ backgroundColor: `${colors.primary}` }}>
          <CardText>
            <Heading style={{ fontSize: fontSizes.medium }}>App for learners, students or parents</Heading>
            <ButtonContainer>
              {downloads.map((download) => (
                <Button>{download}</Button>
              ))}
            </ButtonContainer>
          </CardText>
          <CardImage src={imga} />
        </Card>
        <Card style={{ backgroundColor: `${colors.secondary}` }}>
          <CardImage src={imgb} />
          <CardText>
            <Heading style={{ fontSize: fontSizes.medium }}>App for schools, teachers, coaches</Heading>
            <ButtonContainer>
              {downloads.map((download) => (
                <Button>{download}</Button>
              ))}
            </ButtonContainer>
          </CardText>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default index;
