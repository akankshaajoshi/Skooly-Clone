import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import { Button } from '@/components/base/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fontSizes, heights, colors, borderRadius } from '@/assets';
import {legal} from "@/utils/constants";
import {StyledLink} from "@/components/custom/StyledLink";
import {Text} from "@/components/base/Typography";

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
  Wrapper,
} from '@/pages/Signup/helpers';
import StyledSelect from "@/utils/StyledSelect"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function Signup() {
  
  const phoneRegExp = /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const schema = yup.object({
    firstName: yup.string().required("First name is a required field"),
    lastName: yup.string().required("Last name is a required field"),
    email: yup.string().email("Invalid email format, re enter email").required("Please enter an email"),
    password: yup.string().required("Password is a required field").minLength(8, "Minimum length of password must be 8 characters"),
    mobileNumber: yup.string().matches(phoneRegExp, "Invalid format for a mobile number")
  }).required();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {console.log(data)};

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
          <ItemTitle>Sign Up</ItemTitle>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your First name"
              {...register('firstName')}
            />
            {errors.firstName?.type === 'required' && <Error>First name is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Last name"
              {...register('lastName')}
            />
            {errors.lastName?.type === 'required' && <Error>Last name is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Email address"
              {...register('email')}
            />
            {errors.email?.type === 'required' && <Error>Email address is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Mobile Number</FieldLabel>
            <Wrapper>
            <StyledSelect {...register("countryCode")}
            style={{flex: 3}}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </StyledSelect>
            <StyledInput
              type="tel"
              placeholder="Your Mobile number"
              {...register('mobileNumber')}
              style={{flex: 9}}/>
            </Wrapper>
            {errors.mobileNumber?.type === 'required' && <Error>Mobile number is required</Error>}
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <StyledInput type="password" placeholder="Your Password" {...register('password', { required: true,  minLength: 8, max: 99 })} />
            {errors.password?.type === 'required' && <Error>Password is required</Error>}
          </Field>
          <Field>
            <Wrapper>
            <StyledInput style={{flex: "2"}} type="checkbox" {...register('agreeTerms', { required: true })} />
            <Text style={{fontSize: fontSizes.xSmall, flex: "18"}}>
              I agree to the <StyledLink to={legal[0][0]}>
                Terms and Conditions
              </StyledLink> and <StyledLink to={legal[1][0]}>
                Privacy Policy.
              </StyledLink>
            </Text>
            </Wrapper>
            {errors.agreeTerms?.type === 'required' && <Error>Please agree to the terms and conditions</Error>}
          </Field>
          <ButtonInput type="submit"/>
          <Field style={{alignItems: "center", justifyContent: "center", paddingTop: "20px"}}>
            Already have an account? <StyledLink to='/login'>Login here</StyledLink>
          </Field>
        </Form>
      </InnerContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
}
