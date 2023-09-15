import React from 'react'
import {Container} from "@/components/custom/Container"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"
import SchoolTypeContainer from "@/containers/SchoolTypeContainer"

const index = () => {
  return (
    <Container>
    <HeroContainer/>
    <DownloadContainer/>
    <ForSchoolContainer/>
    <SchoolTypeContainer/>
  </Container>
  )
}

export default index