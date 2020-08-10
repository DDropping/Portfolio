import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Row, Col } from "antd"

import SEO from "../components/seo"
import Layout from "../components/layout"
import profileImg from "../images/DavidProfile.png"

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 25px;
// `

// const Image = styled.img`
//   width: 100%;
//   max-width: 400px;
//   border-radius: 50%;
//   padding: 2rem;
// `

// const Paragraph = styled.p`
//   text-indent: 2em;
// `

const Container = styled.div`
  margin: 0 auto 140px auto;
  padding: 0 10px;
  max-width: 1200px;
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

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Row gutter={32}>
        <Col xs={24} sm={24} md={10} lg={10}>
          <Image src={profileImg} />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <DescriptionContainer>
            <h1>Hi, I'm David!</h1>
            <Paragraph>
              My name's David Dropping and I'm a driven young professional
              looking to enter the world of web design and development. I’ve
              spent the last few years honing my skills in top web technologies
              including:{" "}
              <strong>
                React, Redux, Node, SQL, MongoDB, SASS & SCSS, GraphQL, and many
                more
              </strong>
              . You can find my full resume{" "}
              <a
                href="https://drive.google.com/file/d/1OoGXm9yCowjETA5rUNHaz97gXPB8wrfw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#00d0da" }}
              >
                <strong>here</strong>
              </a>
              .
            </Paragraph>
            <Paragraph>
              At my last job, I worked within a large team of customer service
              associates and managers. I gained valuable experience pertaining
              to{" "}
              <strong>
                communication, teamwork, organization, planning, and meeting
                goals and expectations
              </strong>
              .
            </Paragraph>
            <Paragraph>
              {" "}
              I’m{" "}
              <strong>
                hardworking, receptive and unrelenting when it comes to my work
                and passions
              </strong>
              . If this sounds good to you, I’m ready to work, preferably
              full-time. I’m open to relocating anywhere in the United States,
              or working remotely.{" "}
              <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
                <strong>Reach out to me! I’d love to chat!</strong>
              </Link>
            </Paragraph>
          </DescriptionContainer>
        </Col>
      </Row>
    </Container>

    {/* <Container>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Image src={profileImg} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Row>
            <h1>Hi, I'm David!</h1>
          </Row>
          <Row>
            <Paragraph>
              My name's David Dropping and I'm a driven young professional
              looking to enter the world of web design and development. I’ve
              spent the last few years honing my skills in top web technologies
              including:{" "}
              <strong>
                React, Redux, Node, SQL, MongoDB, SASS & SCSS, GraphQL, and many
                more
              </strong>
              . You can find my full resume{" "}
              <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
                <strong>here</strong>
              </Link>
              .
            </Paragraph>
            <Paragraph>
              At my last job, I worked within a large team of customer service
              associates and managers. I gained valuable experience pertaining
              to{" "}
              <strong>
                communication, teamwork, organization, planning, and meeting
                goals and expectations
              </strong>
              .
            </Paragraph>
            <Paragraph>
              {" "}
              I’m{" "}
              <strong>
                hardworking, receptive and unrelenting when it comes to my work
                and passions
              </strong>
              . If this sounds good to you, I’m ready to work, preferably
              full-time. I’m open to relocating anywhere in the United States,
              or working remotely.{" "}
              <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
                <strong>Reach out to me! I’d love to chat!</strong>
              </Link>
            </Paragraph>
          </Row>
        </Col>
      </Row>
    </Container> */}
  </Layout>
)

export default AboutPage
