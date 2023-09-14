import React from 'react'
import styled from 'styled-components'
import {colors, borderRadius, heights} from '@/assets'
import {Heading1} from "@/components/base/Typography"
import {Button} from "@/components/base/Button"

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${colors.primary};
height: ${heights.large};
width: 100%;
`;

const ContainerInner = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${colors.white};
border-radius: ${borderRadius.medium};
padding: 30px 10px;
`


const index = () => {
  return (
    <Container>
        <ContainerInner>
            <Heading1>
            Instantly join your school on Skooly
            </Heading1>
            <Button>Join now</Button>
        </ContainerInner>
        </Container>
  )
}

export default index