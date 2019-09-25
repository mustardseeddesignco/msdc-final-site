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
      <SectionTitleTop>
        <h2>Graphic Designs</h2>
      </SectionTitleTop>
      <Gallery>
        <ImageGrid>
          {image ? image.map((item, key) => (
            <>
              <div>
                <img src={item.node.publicURL} alt="" />
                <ProjectTitle>{item.node.name}</ProjectTitle>
              </div>
            </>
          )) : null}
        </ImageGrid>
      </Gallery>
      <SectionTitle>
        <h2>Logo Designs</h2>
      </SectionTitle>
      <Gallery>
        <LogoGrid>
          {logos ? logos.map((logos, key) => (
            <>
              <div>
                <img src={logos.node.publicURL} alt="" />
                <ProjectTitle>{logos.node.name}</ProjectTitle>
              </div>
            </>
          )) : null}
        </LogoGrid>
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
height: 300px;
text-align: center;
padding: 2rem 0 0 0;
`
const SectionTitleTop = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
padding: 1.5rem 0 1.5rem 0;
background-color: #43f5cc;
color: #ffffff;
`
const SectionTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 1.5rem 0;
  background-color: goldenrod;
  color: #ffffff;
`
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 2rem;
  justify-items: center;
  padding: 1rem 1rem 1rem 1rem;
`
const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 2rem;
  justify-items: center;
  padding: 1rem 1rem 1rem 1rem;
`
const ProjectTitle = styled.h3`
  text-align: center;
`
const Gallery = styled.div`
  display: flex;
  justify-content: center;
`