import React from 'react'
import styled from 'styled-components'
import {colors, borderRadius, heights} from '@/assets'

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
align-self:center;
background-color: ${colors.white};
border-radius: ${borderRadius.medium};
`


const index = () => {
  return (
    <Container>
        <ContainerInner>
            Another container inside
        </ContainerInner>
        </Container>
  )
}

export default index