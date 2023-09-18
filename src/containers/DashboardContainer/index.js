import React from 'react';
import styled from 'styled-components';
import { onboardingCards, remainingCards } from '@/utils/constants';
import Timeline from "@/components/custom/Timeline";
import Navbar from "@/containers/DashboardContainer/Navbar"

// Create a styled container component
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;


// Create a styled inner container component
const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
`;

// Create a styled card component
const Card = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
`;

// Create a styled content section for the card
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Create a styled image section for the card
const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: pink;
  color: white;
  cursor: pointer;

  &:hover {
    color: pink;
    background-color: white;
  }
`;
const InvertButton = styled(Button)`
  && {
    background-color: white;
    color: pink;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: pink;
    }
  }
`;

function index() {
  return (
    <Container>
      <Navbar name="Test School" imageSrc="https://getskooly.com/skoolyweb/imgs/dashboard/school-image.png" />
      <InnerContainer style={{justifyContent: "flex-start"}}>
        <Timeline/>
      </InnerContainer>
      <InnerContainer>
        {onboardingCards.map((content) => {
          return (
            <Card key={content[0]}>
              <Content>
                <h2>{content[0]}</h2>
                <p>{content[1]}</p>
                <Button>{content[0]}</Button>
              </Content>
              <Image src={content[2]} />
            </Card>
          );
        })}
        {remainingCards.map((content) => {
          return (
            <Card key={content[0]}>
              <Content>
                <h2>{content[0]}</h2>
                <p>{content[1]}</p>
                <InvertButton>{content[0]}</InvertButton>
              </Content>
            </Card>
          );
        })}
      </InnerContainer>
    </Container>
  );
}

export default index;
