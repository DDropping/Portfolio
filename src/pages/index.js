import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
