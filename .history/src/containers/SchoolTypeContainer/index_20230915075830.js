import React from 'react'
import styled from 'styled-components'
import {Container} from "@/components/custom/Container"
import {Heading} from "@/components/base/Typography"
import {colors, borderRadius} from "@/assets"
import { schoolTypes } from '@/utils/constants'

const ElementContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const Element = styled.div`
display: flex;
justify-content: center;
margin: 20px;
padding: 40px;
max-width: 200px;
border-radius: ${borderRadius.large};
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
`


const index = () => {
  return (
    <Container style={{backgroundColor: `${colors.ternary}`, padding: "80px"}}>
        <Heading>Pick your school type to get started</Heading>
        <ElementContainer>
            {schoolTypes.map((ele)=><Element>{ele}</Element>)}
        </ElementContainer>
    </Container>
  )
}

export default index