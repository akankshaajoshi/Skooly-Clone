import styled from "styled-components";
import {colors, fontSizes} from "@/assets"

export const Heading = styled.h1`
font-size: ${fontSizes.xLarge};
font-weight: 800;
`;

export const SubSubHeading = styled.h6`
font-size: ${fontSizes.xSmall};
margin-top: 15px;

&:hover{
    color: ${colors.quaternary};
    cursor: pointer;
}
`