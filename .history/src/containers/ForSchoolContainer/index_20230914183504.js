import React from 'react'
import {colors, heights} from "@/assets"
import {Container} from '@/components/custom/Container'
import {Card} from '@/components/custom/Card'
import {CardImage} from '@/components/custom/CardImage'
import {CardText} from '@/components/custom/CardText'
import {workspace} from '@/assets/images/workspace.png'
import {Heading} from "@/components/base/Typography"

const containerStyle = {
  backgroundColor: `${colors.tertiary}`,
  height: `${heights.small}`
};

const index = () => {
  return (
    <Container style={containerStyle}>
      <Card>
        <CardText style={{color: "white"}}>
          <Heading>
          #1 Software to run any type of school, try it for free
          </Heading>
        </CardText>
        <CardImage src={workspace}>
        </CardImage>
      </Card>
    </Container>
  )
}

export default index