import React from "react"
import styled from "styled-components"

import Project from "./Project"
import projectData from "../../constants/projects"

const Container = styled.div`
  margin: 140px auto 0 auto;
  padding: 0 10px;
`

const SectionTitle = styled.div`
  font-family: "Fugaz One", Helvetica, Arial;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`

const Underline = styled.div`
  margin: 0 auto;
  border-top: 2px solid #c2ffe5;
  width: 2.5rem;
`

const index = () => {
  return (
    <Container>
      <SectionTitle id="projects">
        Projects
        <Underline />
      </SectionTitle>
      {projectData.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            motivation={project.motivation}
            technologies={project.technologies}
            services={project.services}
            website={project.website}
            github={project.github}
            bgColor={project.bgColor}
          />
        )
      })}
    </Container>
  )
}

export default index
