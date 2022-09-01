/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
        extensions: [`.md`]
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        accessToken: "5c7efa0e40a23fefccbf0547702c0a7b2b19dfd7ae8699a51d18b3592ba6d6f2be5f782440cf814bc1a7c1e5b4f19af2af1434b8979a429b9d81f6fcfc0baf05537e53841a73718a1b3dd36e32c271609e7b9ad5a898fe02375c6f1820b67e427a1dcde745b7fac64cbe3f8b29039f20f87d4674bb562cab1682cbe64250542b",
        collectionTypes: ["post"],
        singleTypes: [],
      },
    },
  ],
}
