import React from "react"
import styled from "styled-components"

import Wave from "../Wave"
import "./waves.css"

const Container = styled.div`
  position: relative;
`
//most transparent -> most solid (bottom to top / largest to smallest)
const index = () => {
  return (
    <Container>
      {/* Wave 1 - largest*/}
      <Wave
        cName="custom-shape-divider-top-15968401261"
        init={{ x: "0px" }}
        anim={{ x: ["-1500px", "0px", "-1500px"] }}
        trans={{
          duration: 30,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 2 */}
      <Wave
        cName="custom-shape-divider-top-15968402381"
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
        cName="custom-shape-divider-top-15968389871"
        init={{ x: "0px" }}
        anim={{ x: ["-3000px", "0px", "-3000px"] }}
        trans={{
          duration: 20,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 4 */}
      <Wave
        cName="custom-shape-divider-top-15968391631"
        init={{ x: "-2000px" }}
        anim={{ x: ["0px", "-2000px", "0px"] }}
        trans={{
          duration: 15,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Wave 5 - smallest*/}
      <Wave
        cName="custom-shape-divider-top-15968376051"
        init={{ x: "-1000px" }}
        anim={{ x: ["0px", "-1000px", "0px"] }}
        trans={{
          duration: 10,
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
