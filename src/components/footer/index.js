import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import GreenTop from "../background/waves/greenTop.js"
import contact from "../../constants/contact"

const Container = styled.div`
  background-color: #aff0c2;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1rem;
`

const ContactItem = styled.div`
  margin: 0 25px;
`

const Note = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const index = () => {
  return (
    <Container>
      <GreenTop />
      <ContactContainer>
        {contact.map((item, index) => {
          return (
            <ContactItem key={index}>
              <a href={item.link} target="_blank" style={{ color: "black" }}>
                {item.icon}
                {item.title}
              </a>
            </ContactItem>
          )
        })}
      </ContactContainer>
      <Note>For fastest response, email me at ddropping@gmail.com</Note>
    </Container>
  )
}

export default index
