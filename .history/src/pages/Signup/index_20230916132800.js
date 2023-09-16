import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import { Button } from '@/components/base/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fontSize, heights, colors, borderRadius } from '@/assets';
import {legal} from "@/utils/constants";
import {StyledLink} from "@/components/custom/StyledLink";
import {Text} from "@/components/base/Typography

import {
  InnerContainer,
  Header,
  ItemTitle,
  Form,
  Img,
  ToggleMenu,
  Field,
  FieldLabel,
  StyledInput,
  ButtonInput,
  Error,
  ContactWrapper,
  StyledSelect
} from '@/pages/Signup/helpers';

export default function Signup() {
  const [toggle, setToggle] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {console.log(data)};

  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.large}`,
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
          <ItemTitle>Sign Up</ItemTitle>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your First name"
              {...register('firstName', { required: true, maxLength: 80 })}
            />
            {errors.firstName?.type === 'required' && <Error>First name is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Last name"
              {...register('lastName', { required: true, maxLength: 100 })}
            />
            {errors.lastName?.type === 'required' && <Error>Last name is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Email address"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === 'required' && <Error>Email address is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Mobile Number</FieldLabel>
            <ContactWrapper>
            <StyledSelect {...register("gender")}
            style={{flex: 3}}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </StyledSelect>
            <StyledInput
              type="tel"
              placeholder="Your Mobile number"
              {...register('mobileNumber', { required: true, minLength: 6, maxLength: 12 })}
              style={{flex: 9}}/>
            </ContactWrapper>
            {errors.mobileNumber?.type === 'required' && <Error>Mobile number is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <StyledInput type="Your Password" {...register('password', { required: true,  minLength: 8, max: 99 })} />
            {errors.password?.type === 'required' && <Error>Password is required</Error>}
          </Field>
          <Field>
            <Text style={{fontSize: fontSize.xSmall}}>
              I agree to the <StyledLink to={legal[0][0]}>
                Terms and Conditions
              </StyledLink> and <StyledLink to={legal[1][0]}>
                Privacy Policy.
              </StyledLink>
            </Text>
          </Field>
          <ButtonInput type="submit"/>
        </Form>
      </InnerContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
}
