import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout';
import SEO from '../components/seo'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Section1>
                <h1>About</h1>

            </Section1>
        </Layout>
    )
}

export default AboutPage

const Section1 = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;
    padding: 2rem 0 0 0;
`