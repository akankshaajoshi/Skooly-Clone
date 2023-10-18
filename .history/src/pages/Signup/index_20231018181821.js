import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '@/components/custom/Container';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import { fontSizes, colors, borderRadius } from '@/assets';
import { legal } from '@/utils/constants';
import { StyledLink } from '@/components/custom/StyledLink';
import { Text } from '@/components/base/Typography';
import { AuthContext } from '@/contexts/AuthContext';
import StyledSelect from '@/components/custom/StyledSelectNumber/StyledSelectNumber';
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
  schema,
} from '@/pages/Signup/helpers';

export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    login();
    navigate('/register-school/preschool/dashboard');
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
          <ItemTitle>Sign Up</ItemTitle>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your First name"
              {...register('firstName')}
            />
            <Error>{errors.firstName?.message}</Error>
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Last name"
              {...register('lastName')}
            />
            <Error>{errors.lastName?.message}</Error>
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <StyledInput
              type="text"
              placeholder="Your Email address"
              {...register('email')}
            />
            <Error>{errors.email?.message}</Error>
          </Field>
          <Field>
            <FieldLabel>Mobile Number</FieldLabel>
            <Wrapper>
              <StyledSelect {...register('countryCode')} style={{ flex: 3 }} />
              <StyledInput
                type="tel"
                placeholder="Your Mobile number"
                {...register('mobileNumber')}
                style={{ flex: 9 }}
              />
            </Wrapper>
            <Error>{errors.mobileNumber?.message}</Error>
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <StyledInput
              type="password"
              placeholder="Your Password"
              {...register('password')}
            />
            <Error>{errors.password?.message}</Error>
          </Field>
          <Field>
            <Wrapper>
              <StyledInput
                style={{ flex: '2' }}
                type="checkbox"
                {...register('agreeTerms')}
              />
              <Text style={{ fontSize: fontSizes.xSmall, flex: '18' }}>
                I agree to the{' '}
                <StyledLink to={legal[0][0]}>Terms and Conditions</StyledLink>{' '}
                and <StyledLink to={legal[1][0]}>Privacy Policy.</StyledLink>
              </Text>
            </Wrapper>
            <Error>{errors.agreeTerms?.message}</Error>
          </Field>
          <ButtonInput type="submit" />
          <Field
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '20px',
            }}
          >
            Already have an account?{' '}
            <StyledLink to="/login">Login here</StyledLink>
          </Field>
        </Form>
      </InnerContainer>
      <Copyright>
        Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.
      </Copyright>
    </Container>
  );
}
