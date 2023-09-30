import * as yup from 'yup';
import styled from 'styled-components';
import { colors, fontSizes, borderRadius } from '@/assets';
import { Input } from '@/components/base/Input';

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  width: 30%;
  box-shadow: 0 16px 32px 0 rgba(16, 25, 40, 0.08);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  font-size: ${fontSizes.medium};
  font-weight: 700;
  margin-bottom: 1.3rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
  background-color: ${colors.white};
`;

export const Img = styled.img`
  width: 100px;
  height: 40px;
`;

export const ToggleMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0px;
  margin-bottom: 10px;
`;

export const Field = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-bottom: 10px;
`;

export const FieldLabel = styled.span`
  display: flex;
  font-size: ${fontSizes.xSmall};
  font-weight: bolder;
`;

export const StyledInput = styled(Input)`
  && {
    min-height: 40px;
  }
`;

export const ButtonInput = styled.input`
  background-color: ${colors.black};
  color: ${colors.white};
  width: 100%;
  border: none;
  font-weight: 600;
  borderradius: ${borderRadius.medium};
  min-height: 50px;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.black};
    cursor: pointer;
  }
`;

export const Error = styled.span`
  color: red;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const phoneRegExp =
  /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const schema = yup
  .object({
    firstName: yup
      .string()
      .required('First name is a required field')
      .max(30, 'First name cannot have more than 30 characters'),
    lastName: yup
      .string()
      .required('Last name is a required field')
      .max(30, 'Last name cannot have more than 30 characters'),
    email: yup
      .string()
      .email('Invalid email format, please enter a valid email')
      .required('Please enter an email'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Minimum length of password must be 8 characters'),
    mobileNumber: yup
      .string()
      .matches(phoneRegExp, 'Invalid format for a mobile number')
      .min(10),
    agreeTerms: yup
      .string()
      .required('Accept the terms and condition to sign up'),
  })
  .required();
