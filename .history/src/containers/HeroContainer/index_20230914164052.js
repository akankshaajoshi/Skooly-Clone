import React from 'react'
import styled from 'styled-components'
import {colors, borderRadius, heights} from '@/assets'
import {Heading, SubSubHeading} from "@/components/base/Typography"
import {Button} from "@/components/base/Button"

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: ${colors.primary};
height: ${heights.large};
width: 100%;
box-shadow: 0px 0px 3px 3px ${colors.white};
`;

const ContainerInner = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: ${colors.white};
border-radius: ${borderRadius.large};
padding: 30px 30px;
`

const buttonStyle = {
    width: "300px",
    height: "50px",
    backgroundColor: `${colors.black}`,
    color: `${colors.white}`,
    borderRadius: `${borderRadius.small}`,
}

const index = () => {
  return (
    <Container>
        <ContainerInner>
            <Heading>
            Instantly join your school on Skooly
            </Heading>
            <Button style={buttonStyle}>Join now</Button>
        </ContainerInner>
        <SubSubHeading>
        Register as school or teacher
        </SubSubHeading>
        </Container>
  )
}

export default index