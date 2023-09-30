import styled from 'styled-components';
import Button from '@/components/base/Button/index.tsx';
import Container from '@/components/custom/Container';
import { SubHeading, Text } from '@/components/base/Typography';
import { ButtonContainer } from '@/components/custom/ButtonContainer';
import { Copyright } from '@/components/custom/Copyright';
import logo from '@/assets/images/skooly-logo.png';
import img2 from '@/assets/images/playstore.png';
import img1 from '@/assets/images/appstore.png';
import StyledLink from '@/components/custom/StyledLink';
import {
  downloads,
  about,
  schoolsAndBusinesses,
  legal,
} from '@/utils/constants';
import {
  StyledFacebookIcon,
  StyledTwitterIcon,
  StyledYouTubeIcon,
} from '@/components/custom/StyledIcons';

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

const index = () => (
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
          <StyledLink key={ind} to={download[0]}>
            <Button style={{ maxWidth: '150px' }}>
              {' '}
              <Img
                src={ind === 1 ? img1 : img2}
                alt="download"
                style={{ maxWidth: '80px' }}
              />
              {download[1]}
            </Button>
          </StyledLink>
        ))}
      </SmallContainer>
    </Info>
    <Copyright>
      Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.
    </Copyright>
  </Container>
);

export default index;
