import React from "react"
import styled from "styled-components"
import { CaretRightOutlined } from "@ant-design/icons"

import TealTop from "../background/waves/tealTop"
import GreenBottom from "../background/waves/greenBottom.js"
import skills from "../../constants/skills"

const Container = styled.div`
  background-image: linear-gradient(#c2fbff, #c2ffe5);
`

const MainContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SectionTitle = styled.h3`
  text-align: center;
`
const Underline = styled.div`
  margin: 0 auto;
  border-top: 2px solid black;
  width: 2.5rem;
`

const SkillsContainer = styled.div`
  padding: 0 10px 0 75px;
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h3`
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
        <SectionTitle id="skills">
          Skills
          <Underline />
        </SectionTitle>
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
