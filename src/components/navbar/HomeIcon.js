import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled.div`
  cursor: pointer;
`

const HomeIcon = () => {
  return (
    <Container>
      <motion.Container
        style={{
          width: "33px",
          height: "33px",
          position: "absolute",
          top: "17px",
          left: "17px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        exit={{
          opacity: 0,
          transition: { duration: 1 },
        }}
      >
        <div
          style={{
            width: "25px",
            height: "25px",
            border: "4px solid #00000099",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "25px",
            border: "4px solid #00000099",
            position: "absolute",
            top: "7px",
            left: "7px",
          }}
        />
      </motion.Container>
    </Container>
  )
}

export default HomeIcon
