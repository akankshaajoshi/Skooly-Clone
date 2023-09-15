import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import styled from 'styled-components';
import { colors, fontSizes, borderRadius } from '@/assets';
import img from '@/assets/images/skooly-logo.png';
import { Copyright } from '@/components/custom/Copyright';
import { Button } from '@/components/base/Button';
import { Input } from '@/components/base/Input';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  box-shadow: 0 16px 32px 0 rgba(16, 25, 40, 0.08);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-size: ${fontSizes.medium};
  font-weight: 700;
  margin-bottom: 1.3rem;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
  background-color: ${colors.white};
`;

const Img = styled.img`
  width: 80px;
  height: 50px;
`;

const ToggleMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0px;
  margin-bottom: 10px;
`;

const Field = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const FieldLabel = styled.span`
  display: flex;
  font-size: ${fontSizes.small};
  font-weight: 700px;
`;

export default function Signup() {
  const [toggle, setToggle] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Container style={{ backgroundColor: `${colors.quaternary}`, borderRadius: `${borderRadius.large}` }}>
      <InnerContainer>
        <Header>
          <ArrowBackIcon/>
          <Img src={img} />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ItemTitle>Sign Up</ItemTitle>
          <ToggleMenu>
            <Button
              onClick={() => {
                setToggle(!toggle);
              }}
              style={{ width: '100%', borderRadius: `${borderRadius.large}`, margin: '0px', maxWidth: '100%' }}
            >
              Parent
            </Button>
            <Button
              onClick={() => {
                setToggle(!toggle);
              }}
              style={{ width: '100%', borderRadius: `${borderRadius.large}`, margin: '0px', maxWidth: '100%' }}
            >
              Student
            </Button>
          </ToggleMenu>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Input
              type="text"
              placeholder="Your First name"
              {...register('First name', { required: true, maxLength: 80 })}
            />
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
          <Input
            type="text"
            placeholder="Your Last name"
            {...register('Last name', { required: true, maxLength: 100 })}
          />
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
          <Input
            type="text"
            placeholder="Your Email address"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          </Field>
          <Field>
            <FieldLabel>Mobile Number</FieldLabel>
          <Input
            type="tel"
            placeholder="Your Mobile number"
            {...register('Mobile number', { required: true, minLength: 6, maxLength: 12 })}
          />
          </Field>
          <input type="submit" />
        </Form>
      </InnerContainer>
      <Copyright>Copyright 2023 © Skooly Pte Ltd. All Rights Reserved.</Copyright>
    </Container>
  );
}
