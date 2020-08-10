import React from "react"
import styled from "styled-components"

import GreenTop from "../background/waves/greenTop/index.js"
import contact from "../../constants/contact"

const Container = styled.div`
  background-color: #caffc2;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1rem;
`

const ContactItem = styled.div`
  margin: 0 25px;
  border-top: 2px solid #caffc2;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-top: 2px solid #00b6bf;
  }
  a {
    color: black;
    &:hover {
      color: #00b6bf;
    }
  }
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
              <a href={item.link} target="_blank" rel="noreferrer">
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
