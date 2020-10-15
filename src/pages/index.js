import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbo, Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/successfulPage/">Go to thanks</Link> <br />
  </Layout>
)

export default IndexPage
