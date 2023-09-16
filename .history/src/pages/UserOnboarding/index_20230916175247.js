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


const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: ${borderRadius.large};
  background-color: ${colors.white};
  box-shadow: 0 4px 8px 0 rgba(16, 25, 40, 0.08);

  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 32px 0 rgba(16, 25, 40, 0.16);
  }
`;


const index = () => {
  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.xLarge}`,
        height: `${heights.large}`,
      }}
    >
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <Header>
          <Img src={img} />
        </Header>
          <Field>
            <ItemTitle>Register for free</ItemTitle>
          </Field>
          <ElementContainer>
          {userOnboarding.map((el)=>
            <Element style={{maxHeight: "100px", maxWidth: "700px"}}>
                <CardText style={{alignItems: "flex-start"}}>
                    <SubHeading style={{margin: "10px"}}>{el[0]}</SubHeading>
                    <Text>
                        {el[1]}
                    </Text>
                </CardText>
                <CardImage style={{maxWidth: "50px", maxHeight: "80px"}}src={el[2]}/>
            </Element>
          )}
            </ElementContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
      </Container>
  );
};

export default index;
