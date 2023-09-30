import * as yup from 'yup';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '@/components/custom/Container';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import { heights, colors, borderRadius } from '@/assets';
import { StyledLink } from '@/components/custom/StyledLink';
import { AuthContext } from '@/contexts/AuthContext';

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

export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Invalid email format, re enter email')
        .required('Please enter an email'),
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
    console.log(`You are logged in!${data}`);
    login();
    navigate('/register-school/preschool/dashboard');
  };

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
            <StyledInput
              type="text"
              placeholder="Your Email address"
              {...register('email')}
            />
            <Error>{errors.email?.message}</Error>
          </Field>
          <ButtonInput type="submit" />
          <Field
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '20px',
            }}
          >
            Dont have an account?{' '}
            <StyledLink to="/signup">Signup here</StyledLink>
          </Field>
        </Form>
      </InnerContainer>
      <Copyright>
        Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.
      </Copyright>
    </Container>
  );
}
