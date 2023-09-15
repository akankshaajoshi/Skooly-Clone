import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base/Button';
import { Container } from '@/components/custom/Container';
import logo from '@/assets/images/skooly-logo.png';
import {colors} from "@/assets"
import { SubHeading, Text } from '@/components/base/Typography';
import { downloads, about, schoolsAndBusinesses, legal } from '@/utils/constants';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '@/components/custom/ButtonContainer';
import img2 from '@/assets/images/playstore.png';
import img1 from '@/assets/images/appstore.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
  padding: 0px 10px;
  margin: 0px 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 40px;
`;

const StyledLink = styled(Link)`
&& {
    text-decoration: none;
    &:hover{
    color: ${colors.quaternary};
    }
}
`

const StyledFacebookIcon = styled(FacebookIcon)`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const StyledTwitterIcon = styled(TwitterIcon)`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
const StyledYouTubeIcon = styled(YouTubeIcon)`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const Copyright = styled.span`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 30px;
`;

const index = () => {
  return (
    <Container>
      <Info>
        <SmallContainer>
          <SubHeading style={{ marginBottom: '5px' }}>
            <Img src={logo} />
          </SubHeading>
          <ButtonContainer style={{ gap: '5px' }}>
            <StyledFacebookIcon />
            <StyledTwitterIcon />
            <StyledYouTubeIcon />
          </ButtonContainer>
        </SmallContainer>
        <SmallContainer>
          <SubHeading>About</SubHeading>
          {about.map((ele) => (
            <StyledLink to={ele[0]}>
              <Text>{ele[1]}</Text>
            </StyledLink>
          ))}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>For Schools & Businesses</SubHeading>
          {schoolsAndBusinesses.map((ele, ind) => (
            <StyledLink to={ele[0]}>
              <Text>{ele[1]}</Text>
            </StyledLink>
          ))}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Legal</SubHeading>
          {legal.map((ele, ind) => (
            <StyledLink to={ele[0]}>
              <Text>{ele[1]}</Text>
            </StyledLink>
          ))}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Mobile app</SubHeading>
          {downloads.map((download, ind) => (
            <Button style={{ maxWidth: '150px' }}>
              <Img src={ind === 1 ? img1 : img2} alt="download" style={{ maxWidth: '80px' }} />
              {download}
            </Button>
          ))}
        </SmallContainer>
      </Info>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
};

export default index;
