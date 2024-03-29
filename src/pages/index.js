import React from "react"
// import { Link, graphql } from "gatsby"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Home" />
      <Section1>
        <h1>Hi People</h1>
      </Section1>
      <Section2>
        <h1>Bye people</h1>
      </Section2>
      <Section3>
        <h1>Why are you still here?</h1>
      </Section3>
    </Layout>
  )
}



export default IndexPage

const Section1 = styled.div`
width: 100%;
text-align: center;
padding: 2rem 0 2rem 0;
color: white;
background-color: #f29191;
`
const Section2 = styled.div`
padding: 2rem 0 2rem 0;
color: white;
background-color: #f2e1ac;
`
const Section3 = styled.div`
padding: 2rem 0 2rem 0;
text-align: right;
color: white;
background-color: #735851;
`