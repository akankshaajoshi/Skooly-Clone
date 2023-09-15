import React from 'react'
import {Container} from "@/components/custom/Container"
import {Heading} from "@/components/base/Typography"
import {colors} from "@/assets"

const index = () => {
  return (
    <Container style={{backgroundColor: `${colors.ternary}`}}>
        <Heading>Pick your school type to get started</Heading>
    </Container>
  )
}

export default index