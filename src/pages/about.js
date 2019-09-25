import React from 'react'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout';
import SEO from '../components/seo'

const AboutPage = ({ data }) => {

  const gallery = data.allContentfulImageTest.edges

  return (
    <Layout>
      <SEO title="About" />
      <Section1>
        <h1>About</h1>
        {JSON.stringify(gallery, null, 2)}
        <Gallery index={0}>
          {gallery ? gallery.map((item, key) => (
            <>
              <div>
                <h3>{item.node.imageFile.title}</h3>
                <img src={item.node.imageFile.file} alt="" />
              </div>
            </>
          )) : null}
        </Gallery>
      </Section1>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
query GalleryQuery {
    allContentfulImageTest {
        edges {
          node {
            imageFile {
              title
              file {
                url
              }
            }
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
const Gallery = styled.div`
  
`