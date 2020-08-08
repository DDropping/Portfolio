import React from "react"
import styled from "styled-components"

import Waves1 from "./Wave1"
import Waves2 from "./Wave2"
import Waves3 from "./Wave3"
import Waves4 from "./Wave4"
import Waves5 from "./Wave5"

const Container = styled.div`
  position: relative;
`

const index = () => {
  return (
    <Container>
      <Waves5 />
      <Waves4 />
      <Waves3 />
      <Waves2 />
      <Waves1 />
    </Container>
  )
}

export default index
