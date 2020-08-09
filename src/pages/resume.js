import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../images/resume.png"

const resume = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
      <img
        style={{
          maxWidth: "700px",
          margin: "auto",
          borderTop: "1px solid #8b8b8b",
        }}
        src={image}
        alt="resume"
      />
    </div>
  </Layout>
)

export default resume
