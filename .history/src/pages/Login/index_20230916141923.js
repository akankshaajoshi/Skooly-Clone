import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fontSizes, colors, borderRadius } from '@/assets';
import { StyledLink } from '@/components/custom/StyledLink';
import { Text } from '@/components/base/Typography';

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
  Wrapper,
} from '@/pages/Signup/helpers';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Signup() {
  const schema = yup
    .object({
      email: yup.string().email('Invalid email format, re enter email').required('Please enter an email'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.large}`,
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
}
