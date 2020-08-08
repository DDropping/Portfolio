/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"
import Header from "../header"
import TealBottom from "../background/waves/tealBottom"

const Container = styled.div`
  margin: 0;
`

const index = ({ children }) => {
  return (
    <Container>
      <Header />
      <TealBottom />
      <div
        style={{
          margin: `0 auto`,
          marginTop: "120px",
        }}
      >
        hellowword
        {children}
        <footer>footer</footer>
      </div>
    </Container>
  )
}

index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default index
