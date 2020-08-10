import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

import navbarLinks from "../../constants/navbarLinks"
import HomeIcon from "./HomeIcon"
import DrawerMenu from "./DrawerMenu"

const Container = styled.div`
  width: 100%;
  min-height: 50px; /* size of home button */
`

const DrawerContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled.div`
  font-family: "Fugaz One", cursive;
  text-align: center;
  padding-top: 10px;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  @media (max-width: 767px) {
    display: none;
  }
`

const Li = styled.li`
  font-family: "Fugaz One", cursive;
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
    <Container>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Ul>
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
      <Title>David Dropping</Title>
      <DrawerContainer>
        <DrawerMenu />
      </DrawerContainer>
    </Container>
  )
}

export default index
