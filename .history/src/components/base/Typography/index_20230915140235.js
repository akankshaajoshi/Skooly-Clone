import styled from "styled-components";
import {colors, fontSizes} from "@/assets"

export const Heading = styled.h1`
font-size: ${fontSizes.xLarge};
font-weight: 800;
`;

export const SubSubHeading = styled.h6`
font-size: ${fontSizes.xSmall};
margin-top: 20px;

&:hover{
    color: ${colors.tertiary};
    cursor: pointer;
}
`
export const Text = styled.div`
font-size: ${fontSizes.small};
`;

export const SubHeading = styled.h4`
font-size: ${fontSizes.medium + 5};
font-weight: 700;
`