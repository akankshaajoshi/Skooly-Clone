import styled from 'styled-components';
import { colors, fontSizes } from '@/assets';

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
border: none;
padding: 15px;
margin: 10px;
font-size: ${fontSizes.xSmall};
font-weight: 600;
color: ${colors.white};
background-color: ${colors.black};

&:hover{
    cursor: pointer;
}
`;