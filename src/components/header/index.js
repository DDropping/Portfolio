import React from "react"
import styled from "styled-components"

import Navbar from "../navbar"

const Container = styled.div`
  width: 100%;
  background-color: #b8f4ec;
`

const index = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default index
