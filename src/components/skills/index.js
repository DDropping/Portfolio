import React from "react"
import styled from "styled-components"
import { CaretRightOutlined } from "@ant-design/icons"

import TealTop from "../background/waves/tealTop"
import GreenBottom from "../background/waves/greenBottom.js"
import skills from "../../constants/skills"

const Container = styled.div`
  background-image: linear-gradient(#b8f4ec, #aff0c2);
`

const MainContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SkillsContainer = styled.div`
  padding: 0 10px 0 75px;
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h2`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  margin-left: 10px;
`
const SkillWrapper = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  width: 10rem;
`

const index = () => {
  return (
    <Container>
      <TealTop />
      <MainContainer>
        <Title>Languages</Title>
        <SkillsContainer>
          {skills.languages.map((skill, index) => {
            return (
              <SkillWrapper key={index}>
                <CaretRightOutlined style={{ color: "white" }} />
                {skill}
              </SkillWrapper>
            )
          })}
        </SkillsContainer>

        <Title>Databases</Title>
        <SkillsContainer>
          {skills.databases.map((skill, index) => {
            return (
              <SkillWrapper key={index}>
                <CaretRightOutlined style={{ color: "white" }} />
                {skill}
              </SkillWrapper>
            )
          })}
        </SkillsContainer>

        <Title>Web</Title>
        <SkillsContainer>
          {skills.web.map((skill, index) => {
            return (
              <SkillWrapper key={index}>
                <CaretRightOutlined style={{ color: "white" }} />
                {skill}
              </SkillWrapper>
            )
          })}
        </SkillsContainer>

        <Title>Tools</Title>
        <SkillsContainer>
          {skills.tools.map((skill, index) => {
            return (
              <SkillWrapper key={index}>
                <CaretRightOutlined style={{ color: "white" }} />
                {skill}
              </SkillWrapper>
            )
          })}
        </SkillsContainer>
      </MainContainer>
      <GreenBottom />
    </Container>
  )
}

export default index
