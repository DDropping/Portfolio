import React from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import {
  CaretRightOutlined,
  GlobalOutlined,
  GithubOutlined,
} from "@ant-design/icons"

const Container = styled.div`
  max-width: 1200px;
  margin: 25px auto;
  border-radius: 20px;
  padding: 20px;
  background-image: ${props => props.bgColor};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
`

const Image = styled.img``

const Title = styled.h2`
  font-family: "Fugaz One", Helvetica, Arial;
  display: inline-block;
`

const Description = styled.p`
  text-indent: 2em;
`

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Techtitle = styled.h4`
  font-family: "Fugaz One", Helvetica, Arial;
  width: 100%;
`

const TechWrapper = styled.h5`
  width: 6.5rem;
`

const Links = styled.div`
  display: inline-block;
`

const index = ({
  title,
  image,
  description,
  motivation,
  technologies,
  services,
  website,
  github,
  bgColor,
}) => {
  return (
    <Container bgColor={bgColor}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Image src={image} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Title>{title}</Title>
          <Links>
            {website !== "n/a" && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00d0da", marginLeft: "20px" }}
              >
                <GlobalOutlined />
                Website
              </a>
            )}
            {github !== "n/a" && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00d0da", margin: "10px" }}
              >
                <GithubOutlined />
                Repository
              </a>
            )}
          </Links>
          <Description>{description}</Description>
          <Description>{motivation}</Description>
        </Col>
      </Row>
      <TechContainer>
        <Techtitle>Technologies: </Techtitle>
        {technologies.map((tech, index) => {
          return (
            <TechWrapper key={index}>
              <CaretRightOutlined style={{ color: "white" }} />
              {tech}
            </TechWrapper>
          )
        })}
        <br />
        <Techtitle>Services: </Techtitle>
        {services.map((tech, index) => {
          return (
            <TechWrapper key={index}>
              <CaretRightOutlined style={{ color: "white" }} />
              {tech}
            </TechWrapper>
          )
        })}
      </TechContainer>
    </Container>
  )
}

export default index
