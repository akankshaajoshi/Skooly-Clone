import styled from 'styled-components';
import { colors, fontSizes } from '@/assets';

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
border: none;
padding: 5px;
margin: 10px;
font-weight: 800;
color: ${colors.white};
background-color: ${colors.black};

&:hover{
    cursor: pointer;
}
`;