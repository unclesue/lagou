const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).
  const { data } = await graphql(`
    query {
      allArticle {
        nodes {
          slug
          title
        }
      }
    }
  `)

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: data.allArticle.nodes, // An array of objects
    itemsPerPage: 1, // How many items you want per page
    pathPrefix: "/articles", // Creates pages like `/blog`, `/blog/2`, etc
    component: require.resolve("./src/templates/article-list.js"), // Just like `createPage()`
  })
}
