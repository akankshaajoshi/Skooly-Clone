import styled from 'styled-components';
import { heights, colors, fontSizes, borderRadius } from '@/assets';
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
  width: 80px;
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
