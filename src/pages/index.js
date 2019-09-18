import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section1>
        <h1>Hi people</h1>
      </Section1>
    </Layout>
  )
}

export default IndexPage

const Section1 = styled.div`
width: 100%;
height: 300px;
text-align: center;
padding: 2rem 0 0 0;
`