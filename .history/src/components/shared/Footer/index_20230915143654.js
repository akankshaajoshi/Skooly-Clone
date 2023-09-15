import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base/Button';
import { Container } from '@/components/custom/Container';
import logo from '@/assets/images/skooly-logo.png';
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
  padding: 10px;
  margin: 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 40px;
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  && {
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
  }`;

const index = () => {
  return (
    <Container>
      <Info>
        <SmallContainer>
          <Img src={logo} />
          <ButtonContainer>
            <FacebookIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
          </ButtonContainer>
        </SmallContainer>
        <SmallContainer>
          <SubHeading>About</SubHeading>
          {about.map((ele, ind) => (
            <Link to={ele[0]}>
              <Text>{ele[1]}</Text>
            </Link>
          ))}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>For Schools & Businesses</SubHeading>
          {schoolsAndBusinesses.map((ele, ind) => (
            <Link to={ele[0]}>
              <Text>{ele[1]}</Text>
            </Link>
          ))}
        </SmallContainer>
        <SmallContainer>
          <SubHeading>Legal</SubHeading>
          {legal.map((ele, ind) => (
            <Link to={ele[0]}>
              <Text>{ele[1]}</Text>
            </Link>
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
    </Container>
  );
};

export default index;
