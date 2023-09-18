import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import { Copyright } from '@/components/custom/Copyright';
import { fontSizes, colors, borderRadius } from '@/assets';
import { legal } from '@/utils/constants';
import { StyledLink } from '@/components/custom/StyledLink';
import { Text } from '@/components/base/Typography';
import { AuthContext } from '@/contexts/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  ItemTitle,
  Form,
  Field,
  FieldLabel,
  StyledInput,
  ButtonInput,
  Error,
  Wrapper,
} from '@/pages/Signup/helpers';
import StyledSelect from '@/utils/StyledSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Signup({header}) {
  const { login } = useContext(AuthContext);

  const phoneRegExp = /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required('First name is a required field')
        .max(30, 'First name cannot have more than 30 characters'),
      lastName: yup
        .string()
        .required('Last name is a required field')
        .max(30, 'Last name cannot have more than 30 characters'),
      email: yup.string().email('Invalid email format, please enter a valid email').required('Please enter an email'),
      password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Minimum length of password must be 8 characters'),
      mobileNumber: yup.string().matches(phoneRegExp, 'Invalid format for a mobile number').min(10),
      schoolName: yup
        .string()
        .required('School name is required.')
        .max(80, 'School name can not have more than 80 characters.'),
      agreeTerms: yup.string().required('Accept the terms and condition to sign up'),
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
    console.log('You are now signed in! ' + data);
    login();
    <Navigate to="/register-school/preschool/dashboard"/>
  };

  return (
    <Container
      style={{
        backgroundColor: `${colors.quaternary}`,
        borderRadius: `${borderRadius.large}`,
      }}
    >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ItemTitle> 
          <Link to="/register-school">
          <ArrowBackIcon fontSize="medium" />
        </Link>
            Register your {header}</ItemTitle>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <StyledInput type="text" placeholder="Your First name" {...register('firstName')} />
            {<Error>{errors.firstName?.message}</Error>}
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <StyledInput type="text" placeholder="Your Last name" {...register('lastName')} />
            {<Error>{errors.lastName?.message}</Error>}
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <StyledInput type="text" placeholder="Your Email address" {...register('email')} />
            {<Error>{errors.email?.message}</Error>}
          </Field>
          <Field>
            <FieldLabel>Mobile Number</FieldLabel>
            <Wrapper>
              <StyledSelect {...register('countryCode')} style={{ flex: 3 }}></StyledSelect>
              <StyledInput
                type="tel"
                placeholder="Your Mobile number"
                {...register('mobileNumber')}
                style={{ flex: 9 }}
              />
            </Wrapper>
            {<Error>{errors.mobileNumber?.message}</Error>}
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <StyledInput
              type="password"
              placeholder="Your Password"
              {...register('password', { required: true, minLength: 8, max: 99 })}
            />
            {<Error>{errors.password?.message}</Error>}
          </Field>
          <Field>
            <FieldLabel>School Name</FieldLabel>
            <StyledInput type="text" placeholder="Your School name" {...register('schoolName')} />
            {<Error>{errors.schoolName?.message}</Error>}
          </Field>
          <Field>
            <Wrapper>
              <FieldLabel style={{ flex: 1 }}>Time Zone</FieldLabel>
              <FieldLabel style={{ flex: 1 }}>Currency</FieldLabel>
            </Wrapper>
            <Wrapper>
              <StyledSelect {...register('timeZone')} style={{ flex: 1 }}></StyledSelect>
              <StyledSelect {...register('currency')} style={{ flex: 1 }}></StyledSelect>
            </Wrapper>
          </Field>
          <Field>
            <Wrapper>
              <StyledInput style={{ flex: '2' }} type="checkbox" {...register('agreeTerms', { required: true })} />
              <Text style={{ fontSize: fontSizes.xSmall, flex: '18' }}>
                I agree to the <StyledLink to={legal[0][0]}>Terms and Conditions</StyledLink> and{' '}
                <StyledLink to={legal[1][0]}>Privacy Policy.</StyledLink>
              </Text>
            </Wrapper>
            {<Error>{errors.agreeTerms?.message}</Error>}
          </Field>
          <ButtonInput type="submit"/>
          <Field style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '20px' }}>
            Already have an account? <StyledLink to="/login">Login here</StyledLink>
          </Field>
        </Form>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
}
