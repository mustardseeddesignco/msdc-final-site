/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from '@emotion/styled'
import Header from "./header"


const Layout = ({ children }) => {


  return (
    <>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>

    </>
  )
}


export default Layout

const Body = styled.div`
  width: 100%;
  font-family: sans-serif;
`
const Footer = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem 0 0 0;
`
