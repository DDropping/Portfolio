import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
      <Link to="/">
        <HomeIcon />
      </Link>
      {navbarLinks.map((item, index) => {
        return (
          <Link to={item.link} style={{ textDecoration: "none" }}>
            <Li key={index}>
              {item.icon}
              {item.title}
            </Li>
          </Link>
        )
      })}
    </Ul>
  )
}

export default index
