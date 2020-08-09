import React from "react"
import styled from "styled-components"

import Navbar from "../navbar"
import TealBottom from "../background/waves/tealBottom"

const Container = styled.div`
  width: 100%;
  background-color: #b8f4ec;
`

const index = () => {
  return (
    <Container>
      <Navbar />
      <TealBottom />
    </Container>
  )
}

export default index
