import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';
import { Card } from '@/components/custom/Card';
import { Heading } from '@/components/base/Typography';
import { fontSizes } from '@/assets';
import { Button } from '@/components/base/Button';
import { downloads } from '@/utils/constants';
import { CardText } from '@/components/custom/CardText';
import { CardImage } from '@/components/custom/CardImage';
import { ButtonContainer } from '@/components/custom/ButtonContainer';
import imga from '@/assets/images/mobilea.jpg';
import imgb from '@/assets/images/mobileb.jpg';

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

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`;

const index = () => {
  return (
    <Container style={containerStyle}>
      <Heading style={{ fontSize: fontSizes.large }}>Download Skooly mobile app</Heading>
      <CardContainer>
        <Card style={{ backgroundColor: `${colors.primary}`, paddingLeft: "0px" }}>
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
        <Card style={{ backgroundColor: `${colors.secondary}` , paddingRight: "30px"}}>
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
