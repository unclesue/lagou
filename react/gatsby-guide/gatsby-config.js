/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "hello gatsby",
    author: "gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/data/product/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data/post/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `xml`,
        path: `${__dirname}/src/data/xml/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`]
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: process.env.STRAPI_API_URL,
    //     accessToken: process.env.STRAPI_TOKEN,
    //     collectionTypes: ["post", "user"],
    //     singleTypes: [],
    //   },
    // },
    // 使用自己开发的数据源插件
    {
      resolve: `gatsby-source-mystrapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["post", "user"],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-myxml`,
    `gatsby-plugin-react-helmet`,
  ],
}
