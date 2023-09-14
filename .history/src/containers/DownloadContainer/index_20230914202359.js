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
import imga from '@/assets/images/mobilea.png';
import imgb from '@/assets/images/mobileb.png';
import img2 from "@/assets/images/playstore.png";
import img from "@/assets/images/appstore.png";

const containerStyle = {
  backgroundColor: `${colors.quaternary}`,
  minHeight: `${heights.small}`,
  paddingBottom: "2vh"
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  gap: 30px;

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`;

const Img = styled.img`
height: 50px;
width: 50px;
`;

const index = () => {
  return (
    <Container style={containerStyle}>
      <Heading style={{ fontSize: fontSizes.xLarge }}>Download Skooly mobile app</Heading>
      <CardContainer>
        <Card style={{ backgroundColor: `${colors.primary}`, paddingLeft: "30px" }}>
          <CardText>
            <Heading style={{ fontSize: fontSizes.medium }}>App for learners, students or parents</Heading>
            <ButtonContainer>
              {downloads.map((download, ind) => (
                <Button><Img src = {ind === 1? img : img2} alt='download'/>{download}</Button>
              ))}
            </ButtonContainer>
          </CardText>
          <CardImage src={imga} />
        </Card>
        <Card style={{ backgroundColor: `${colors.secondary}` , paddingRight: "30px"}}>
          <CardImage src={imgb} />
          <CardText style={{color: `${colors.white}`}}>
            <Heading style={{ fontSize: fontSizes.medium }}>App for schools, teachers, coaches</Heading>
            <ButtonContainer>
              {downloads.map((download, ind) => (
                <Button> <Img src = {ind === 1? img : img2} alt='download'/>{download}</Button>
              ))}
            </ButtonContainer>
          </CardText>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default index;
