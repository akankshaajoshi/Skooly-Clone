import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import logo from '@/assets/images/skooly-logo.png';
import { SubHeading, Text } from '@/components/base/Typography';
import {about, schoolsAndBusinesses, legal} from '@/utils/constants';
import { Link } from 'react-router-dom';
import img2 from "@/assets/images/playstore.png";
import img from "@/assets/images/appstore.png";

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
          {about.map((ele, ind)=>
          <Link to={ele[0]}>
          <Text>{ele[1]}</Text>
          </Link>
          )}
        </SmallContainer>
        <SmallContainer>
        <SubHeading>For Schools & Businesses</SubHeading>
        {schoolsAndBusinesses.map((ele, ind)=>
          <Link to={ele[0]}>
          <Text>{ele[1]}</Text>
          </Link>
          )}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Legal</SubHeading>
          {legal.map((ele, ind)=>
          <Link to={ele[0]}>
          <Text>{ele[1]}</Text>
          </Link>
          )}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Mobile app</SubHeading>
          <Button> <Img src = {img1} alt='download'/>
          <Button> <Img src = {img2} alt='download'/>
        </SmallContainer>
      </Info>
    </Container>
  );
};

export default index;
