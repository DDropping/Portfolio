import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import profileImg from "../../images/DavidProfile.png"

const Container = styled.div`
  margin: 0 auto 140px auto;
  padding: 0 10px;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
`

const DescriptionContainer = styled.div`
  margin-left: 25px;
  max-width: 700px;
  @media (max-width: 1011px) {
    text-align: center;
  }
  h1 {
    @media (max-width: 1011px) {
      text-align: center;
    }
  }
`

const Paragraph = styled.p`
  text-indent: 2em;
`

const index = () => {
  return (
    <Container>
      <Image src={profileImg} />
      <DescriptionContainer>
        <h1>Hi, I'm David!</h1>
        <Paragraph>
          My name's David Dropping and I'm a driven young professional looking
          to enter the world of web design and development. I’m{" "}
          <strong>
            hardworking, receptive and unrelenting when it comes to my work and
            passions
          </strong>
          . I’ve spent the last few years honing my skills in top web
          technologies including:{" "}
          <strong>
            React, Redux, Node, SQL, MongoDB, SASS & SCSS, GraphQL, and many
            more
          </strong>
          . You can find my full resume{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
            <strong>here</strong>
          </Link>
          . And while you're here,{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
            <strong>Reach out to me! I’d love to chat!</strong>
          </Link>
        </Paragraph>
      </DescriptionContainer>
    </Container>
  )
}

export default index
