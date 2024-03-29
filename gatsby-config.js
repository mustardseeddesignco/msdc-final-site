require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mustard Seed Design Company`,
    description: `We are a full-stack design firm specializing in graphic design, logo deisgn, corporate branding, photography, web design, web development.`,
    author: `@mustardseeddesignco`,

  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-elements`,
    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        name: `logos`,
        path: `${__dirname}/src/logos`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ew68n92n6cgz`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "@briodev/gatsby-theme-blog",
      options: {
        contentPath: "src/content/blog-posts",
        basePath: "/blog",
        tagsPath: "/categories"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/logos/msdc-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
