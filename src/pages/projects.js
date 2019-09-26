import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from "../components/seo"


const ProjectsPage = ({ data }) => {

  const image = data.ImageQuery.edges
  const logos = data.LogoQuery.edges

  return (

    <Layout>
      <SEO title="Projects" />
      <Section1>
        <h1>Projects</h1>
      </Section1>

      <SectionTitleArea>
        GRAPHIC DESIGNS
      </SectionTitleArea>

      <Gallery>

        {image ? image.map((item, key) => (
          <>
            <div>
              <img src={item.node.publicURL} alt="" />
              <ProjectTitle>{item.node.name}</ProjectTitle>
            </div>
          </>
        )) : null}

      </Gallery>


      <SectionTitleArea2>LOGO DESIGNS</SectionTitleArea2>


      <Gallery>

        {logos ? logos.map((logos, key) => (
          <>
            <div>
              <img src={logos.node.publicURL} alt="" />
              <ProjectTitle>{logos.node.name}</ProjectTitle>
            </div>
          </>
        )) : null}

      </Gallery>
    </Layout>

  )
}

export default ProjectsPage

export const ImageQuery = graphql`

{
  ImageQuery: 
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
        node {
          name
          publicURL
        }
      }
    }
LogoQuery:
  allFile(filter: {sourceInstanceName: {eq:"logos"}}) {
    edges {
      node {
        name
        publicURL
      }
    }
  }
}
`


const Section1 = styled.div`
width: 100%;
height: 150px;
text-align: center;
padding: 2rem 0 0 0;
`
const SectionTitleArea = styled.div`
padding: 3rem 0 3rem 5rem;
color: white;
background-color: #f29191;
font-size: 250%;
`
const SectionTitleArea2 = styled.div`
padding: 3rem 0 3rem 5rem;
color: white;
background-color: #f2e1ac;
font-size: 250%;
`
const SectionTitle = styled.h2`
  font-size: 250%;
`
// const ImageGrid = styled.div`
//   // display: grid;
//   // grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
//   // grid-auto-rows: minmax(250px, auto);
//   // grid-gap: 2rem;
//   // justify-items: center;
//   // padding: 1rem 1rem 1rem 1rem;
// `
// const LogoGrid = styled.div`
//   // display: grid;
//   // grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
//   // grid-auto-rows: minmax(250px, auto);
//   // grid-gap: 2rem;
//   // justify-items: center;
//   // padding: 1rem 1rem 1rem 1rem;
// `
const ProjectTitle = styled.h3`
  text-align: center;
`
const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 30fr));
grid-auto-rows: minmax(300px, auto);
grid-gap: 2rem;
justify-items: center;
padding: 2rem 1rem 1rem 1rem;
`