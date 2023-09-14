import React from 'react'
import {Container} from "@/components/custom/Container"
import {heights, colors, fontSizes} from '@/assets'

const containerStyle = {
    backgroundColor: `${colors.white}`,
    height: `${heights.small}`
};

const index = () => {
  return (
    <Container style={containerStyle}>

    </Container>
  )
}

export default index