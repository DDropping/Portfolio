import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import navbarLinks from "../../constants/navbarLinks"
import HomeIcon from "./HomeIcon"

const Ul = styled.ul`
  width: 100%;
  min-height: 50px; /* size of home button */
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  margin: 20px 10px 0 10px;
  color: #000000bf;
  border-bottom: 2px solid #c2fbff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`

const index = () => {
  return (
    <Ul>
      <AnchorLink to="/">
        <HomeIcon />
      </AnchorLink>
      {navbarLinks.map((item, index) => {
        return (
          <AnchorLink
            to={item.link}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Li>
              {item.icon}
              {item.title}
            </Li>
          </AnchorLink>
        )
      })}
    </Ul>
  )
}

export default index
