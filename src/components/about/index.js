import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Row, Col } from "antd"

import profileImg from "../../images/DavidProfile.png"

const Container = styled.div`
  margin: 0 auto 140px auto;
  padding: 0 10px;
  max-width: 900px;
`

const Image = styled.img`
  display: block;
  margin: auto;
  width: 90%;
  max-width: 400px;
  border-radius: 50%;
`

const DescriptionContainer = styled.div`
  h1 {
    text-align: center;
  }
`

const Paragraph = styled.p`
  text-indent: 2em;
  font-size: 1rem;
`

const Title = styled.h1`
  margin-top: 1rem;
  font-family: "Fugaz One", cursive;
`

const index = () => {
  return (
    <Container>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10}>
          <Image src={profileImg} />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <DescriptionContainer>
            <Title>Hi, I'm David!</Title>
            <Paragraph>
              My name's David Dropping and I'm a driven young professional
              looking to enter the world of web design and development. I’m{" "}
              <strong>
                hardworking, receptive and unrelenting when it comes to my work
                and passions
              </strong>
              . I’ve spent the last few years honing my skills in top web
              technologies including:{" "}
              <strong>
                React, Redux, Node, SQL, MongoDB, SASS & SCSS, GraphQL, and many
                more
              </strong>
              . You can find my full resume{" "}
              <Link
                to="/resume"
                style={{ textDecoration: "none", color: "#00d0da" }}
              >
                <strong>here</strong>
              </Link>
              . And while you're here,{" "}
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#00d0da" }}
              >
                <strong>Reach out to me! I’d love to chat!</strong>
              </Link>
            </Paragraph>
          </DescriptionContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default index
