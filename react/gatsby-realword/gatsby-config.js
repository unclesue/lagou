/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-article`,
      options: {
        apiUrl: "https://api.realworld.io/api",
      },
    },
    'gatsby-source-detail',
  ],
}
