import React from 'react'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'


const ContactPage = () => {


    return (
        <Layout>
            <SEO title="Contact" />
            <Section1>
                <h1>Contact</h1>

            </Section1>
        </Layout>
    )
}

export default ContactPage

const Section1 = styled.div`
width: 100%;
height: 300px;
text-align: center;
padding: 2rem 0 0 0;
`