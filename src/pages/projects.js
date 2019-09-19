import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from "../components/seo"


const ProjectsPage = ({ data }) => {

    const image = data.allFile.edges

    return (

        <Layout>
            <SEO title="Projects" />
            <Section1>
                <h1>Projects</h1>
            </Section1>
            <ImageGrid>
                <div>
                    {image ? image.map((item, key) => (
                        <>
                            <div>
                                <h3>{item.node.name}</h3>
                                <img src={item.node.publicURL} alt="" />
                            </div>
                        </>
                    )) : null}
                </div>
            </ImageGrid>

        </Layout>

    )
}

export default ProjectsPage

export const query = graphql`

query MyQuery {
    allFile {
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
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 1rem;
  justify-items: center;
`