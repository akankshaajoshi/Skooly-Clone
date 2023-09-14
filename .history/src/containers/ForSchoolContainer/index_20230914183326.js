import React from 'react'
import {colors, heights} from "@/assets"
import {Container} from '@/components/custom/Container'
import {Card} from '@/components/custom/Card'
import {CardImage} from '@/components/custom/CardImage'
import {CardText} from '@/components/custom/CardText'
import {workspace} from '@/assets/images/workspace'

const containerStyle = {
  backgroundColor: `${colors.tertiary}`,
  height: `${heights.small}`
};

const index = () => {
  return (
    <Container style={containerStyle}>
      <Card>
        <CardText>

        </CardText>
        <CardImage src={}>

        </CardImage>
      </Card>
    </Container>
  )
}

export default index