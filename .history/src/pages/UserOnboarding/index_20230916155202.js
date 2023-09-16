import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { Container } from '@/components/custom/Container';
import { Card } from '@/components/custom/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { heights, colors, borderRadius } from '@/assets';
import { StyledLink } from '@/components/custom/StyledLink';
import img from '@/assets/images/skooly-logo.png';

import {
    InnerContainer,
    Header,
    ItemTitle,
    Form,
    Img,
    Field,
    FieldLabel,
    StyledInput,
    ButtonInput,
    Error,
  } from '@/pages/Signup/helpers';


const index = () => {
  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.xLarge}`,
        height: `${heights.large}`,
      }}
    >
      <InnerContainer>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <Header>
          <Img src={img} />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <ItemTitle>Log In</ItemTitle>
            <FieldLabel>Email address</FieldLabel>
            <StyledInput type="text" placeholder="Your Email address" {...register('email')} />
            {<Error>{errors.email?.message}</Error>}
          </Field>
          <ButtonInput type="submit" />
          <Field style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '20px' }}>
            Dont have an account? <StyledLink to="/signup">Signup here</StyledLink>
          </Field>
        </Form>
      </InnerContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
};

export default index;
