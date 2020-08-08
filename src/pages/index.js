import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Footer />
  </Layout>
)

export default IndexPage
