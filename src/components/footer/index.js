import React from "react"
import styled from "styled-components"

import GreenTop from "../background/waves/greenTop/index.js"
import contact from "../../constants/contact"

const Container = styled.div`
  background-color: #d7ffc2;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1rem;
`

const ContactItem = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0 25px;
  border-bottom: 2px solid #d7ffc2;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid black;
  }
  a {
    color: black;
  }
`

const Note = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
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
