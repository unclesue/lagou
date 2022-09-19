exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allArticle {
        nodes {
          slug
        }
      }
    }
  `)
  data.allArticle.nodes.forEach(item => {
    createPage({
      path: `/articles/${item.slug}`,
      component: require.resolve("../../src/templates/article-detail.js"),
      context: {
        slug: item.slug
      },
    })
  })
}
