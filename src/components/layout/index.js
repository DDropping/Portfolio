/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import Header from "../header"
import Footer from "../footer"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1rem;
`

const index = ({ children }) => {
  return (
    <Container>
      <Header />
      <div
        style={{
          margin: "140px 0",
          flex: 1,
        }}
      >
        {children}
      </div>
      <Footer />
    </Container>
  )
}

index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default index
