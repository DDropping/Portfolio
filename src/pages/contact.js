import React from "react"
import styled from "styled-components"

import contactLinks from "../constants/contact"
import Layout from "../components/layout"

const Container = styled.div``

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1rem;
`

const ContactItem = styled.div`
  margin: 0 25px;
  font-size: 2rem;
  line-height: 2rem;
  border-bottom: 2px solid white;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`

const Note = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const contact = () => {
  return (
    <Layout>
      <Container>
        <ContactContainer>
          {contactLinks.map((item, index) => {
            return (
              <ContactItem key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "black" }}
                >
                  {item.icon}
                  {item.title}
                </a>
              </ContactItem>
            )
          })}
        </ContactContainer>
        <Note>For fastest response, email me at ddropping@gmail.com</Note>
      </Container>
    </Layout>
  )
}

export default contact
