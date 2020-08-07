import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Waves from '../components/background/waves'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Waves />
  </Layout>
)

export default IndexPage
