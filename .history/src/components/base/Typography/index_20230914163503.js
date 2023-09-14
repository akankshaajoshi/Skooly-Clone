import styled from "styled-components";
import {colors, fontSizes} from "@/assets"

export const Heading = styled.h1`
font-size: ${fontSizes.xLarge};
font-weight: 800;
`;

export const SubSubHeading = styled.h6`
font-size: ${fontSizes.xSmall};
font-weight: 200;

&:hover{
    font-color: ${colors.secondary};
}
`