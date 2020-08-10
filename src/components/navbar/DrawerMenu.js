import React, { useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import { Drawer } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import { MenuOutlined } from "@ant-design/icons"

import navbarLinks from "../../constants/navbarLinks"

const Ul = styled.ul`
  width: 100%;
  min-height: 50px; /* size of home button */
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  font-size: 1.1rem;
  margin: 20px 10px 0 10px;
  color: #000000bf;
  border-bottom: 2px solid #c2fbff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`

const DrawerMenu = () => {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <>
      <MenuOutlined
        onClick={() => toggleOpen(true)}
        style={{
          color: "black",
          fontSize: "1.5rem",
          position: "absolute",
          top: "17px",
          right: "17px",
        }}
      />

      <Drawer
        placement="right"
        closable={true}
        onClose={() => toggleOpen(false)}
        visible={isOpen}
      >
        <Ul>
          <Link to="/" style={{ textDecoration: "none" }} key="home">
            <Li>
              <HomeOutlined />
              {" Home"}
            </Li>
          </Link>
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
      </Drawer>
    </>
  )
}

export default DrawerMenu
