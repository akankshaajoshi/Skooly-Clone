import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { Container } from '@/components/custom/Container';
import {SubHeading, Text} from "@/components/base/Typography"
import { Card } from '@/components/custom/Card';
import { CardText } from '@/components/custom/CardText';
import { CardImage } from '@/components/custom/CardImage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { heights, colors, borderRadius } from '@/assets';
import { StyledLink } from '@/components/custom/StyledLink';
import { Copyright } from '@/components/custom/Copyright';
import img from '@/assets/images/skooly-logo.png';
import {userOnboarding} from "@/utils/constants"

import {
    InnerContainer,
    Header,
    ItemTitle,
    Img,
    Field,
  } from '@/pages/Signup/helpers';

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
padding: 80px;
`


const index = () => {
  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.xLarge}`,
        height: `${heights.large}`,
      }}
    >
      <InnerContainer style={{padding: "80px"}}>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <Header>
          <Img src={img} />
        </Header>
          <Field>
            <ItemTitle>Register for free</ItemTitle>
          </Field>
          <Wrapper>
          {userOnboarding.map((el)=>
            <Card style={{maxHeight: "100px"}}>
                <StyledLink to={el[2]}>
                <CardText>
                    <SubHeading>{el[0]}</SubHeading>
                    <Text>
                        {el[1]}
                    </Text>
                </CardText>
                <CardImage src={el[2]}/>
                </StyledLink>
            </Card>
          )}
            </Wrapper>
      </InnerContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
      </Container>
  );
};

export default index;
