import React from "react"
import styled from "styled-components"

import Wave from "../Wave"
import "./waves.css"

const Container = styled.div`
  position: relative;
`
//most transparent -> most solid
const index = () => {
  return (
    <Container>
      {/* Wave 1 */}
      <Wave
        cName="custom-shape-divider-bottom-1596860405"
        init={{ x: "0px" }}
        anim={{ x: ["-1500px", "0px", "-1500px"] }}
        trans={{
          duration: 50,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 2 */}
      <Wave
        cName="custom-shape-divider-bottom-1596861518"
        init={{ x: "-2500px" }}
        anim={{ x: ["0px", "-2500px", "0px"] }}
        trans={{
          duration: 25,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 3 */}
      <Wave
        cName="custom-shape-divider-bottom-1596861892"
        init={{ x: "0px" }}
        anim={{ x: ["-3000px", "0px", "-3000px"] }}
        trans={{
          duration: 32,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 4 */}
      <Wave
        cName="custom-shape-divider-bottom-1596862021"
        init={{ x: "-2000px" }}
        anim={{ x: ["0px", "-2000px", "0px"] }}
        trans={{
          duration: 41,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 5 */}
      <Wave
        cName="custom-shape-divider-bottom-1596862144"
        init={{ x: "-1000px" }}
        anim={{ x: ["0px", "-1000px", "0px"] }}
        trans={{
          duration: 75,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
    </Container>
  )
}

export default index