import React from 'react'
import {colors, heights} from "@/assets"
import {Container} from '@/components/custom/Container'
import {Card} from '@/components/custom/Card'
import {CardImage} from '@/components/custom/CardImage'
import {CardText} from '@/components/custom/CardText'

const containerStyle = {
  backgroundColor: `${colors.ternary}`,
  height: `${heights.small}`
};

const index = () => {
  return (
    <Container style={containerStyle}>

    </Container>
  )
}

export default index