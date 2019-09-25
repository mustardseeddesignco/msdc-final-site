import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'

export default () => (
  <StaticQuery
    query={graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
    }
  }
 `}
    render={data => (
      <Head>
        <SiteName>
          {data.site.siteMetadata.title}
        </SiteName>
        <NavMenu>
          <MenuLinks>
            <NavItem><StyledLink to="/">HOME</StyledLink></NavItem>
            <NavItem><StyledLink to="/projects">PROJECTS</StyledLink></NavItem>
            <NavItem><StyledLink to="/about">ABOUT</StyledLink></NavItem>
            <NavItem><StyledLink to="/contact">CONTACT</StyledLink></NavItem>
            <NavItem><StyledLink to="/blog">BLOG</StyledLink></NavItem>
          </MenuLinks>
        </NavMenu>
      </Head>
    )}
  />
)




const Head = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const SiteName = styled.h1`
  color: #000000;
`
const NavMenu = styled.div`
  color: #000000;
`
const MenuLinks = styled.ul`  
display: inline-flex;
  flex: row;
  list-decoration: none;
`
const NavItem = styled.li`
  list-style-type: none;
  padding: 0 3rem 0 0; 
  font-family: sans-serif;
  font-size: 24px;
`
const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
:hover {
  color: goldenrod;
}
:selected {
  color: #34fd54;
}
`
