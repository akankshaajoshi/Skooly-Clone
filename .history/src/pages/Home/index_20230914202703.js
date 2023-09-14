import React from 'react'
import {Container} from "@/components/custom/Container"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"

const index = () => {
  return (
    <Container>
    <HeroContainer/>
    <DownloadContainer/>
    <ForSchoolContainer/>
  </Container>
  )
}

export default index