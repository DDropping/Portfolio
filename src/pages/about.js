import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import profileImg from "../images/DavidProfile.png"

const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  margin: 0 25px;
`

const DescriptionContainer = styled.div`
  max-width: 700px;
`

const Paragraph = styled.p`
  text-indent: 2em;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Image src={profileImg} />
      <DescriptionContainer>
        <h1>Hi, I'm David!</h1>
        <Paragraph>
          My name's David Dropping and I'm a driven young professional looking
          to enter the world of web design and development. I’ve spent the last
          few years honing my skills in top web technologies including:{" "}
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
          associates and managers. I gained valuable experience pertaining to{" "}
          <strong>
            communication, teamwork, organization, planning, and meeting goals
            and expectations
          </strong>
          .
        </Paragraph>
        <Paragraph>
          {" "}
          I’m{" "}
          <strong>
            hardworking, receptive and unrelenting when it comes to my work and
            passions
          </strong>
          . If this sounds good to you, I’m ready to work, preferably full-time.
          I’m open to relocating anywhere in the United States, or working
          remotely.{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#00d0da" }}>
            <strong>Reach out to me! I’d love to chat!</strong>
          </Link>
        </Paragraph>
      </DescriptionContainer>
    </Container>
  </Layout>
)

export default AboutPage
