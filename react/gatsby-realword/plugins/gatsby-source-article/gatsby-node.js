const { default: axios } = require("axios")
const POST_NODE_TYPE = "Article"

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, { apiUrl }) => {
  const { createNode } = actions
  const data = await loadData(apiUrl)

  // loop through data and create Gatsby nodes
  data.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.slug}`),
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(post),
      },
    })
  )
  return
}

const loadData = async apiUrl => {
  let limit = 10
  let offset = 0
  const result = []
  await load()
  async function load() {
    const { data } = await axios(`${apiUrl}/articles`, {
      params: { limit, offset },
    })
    result.push(...data.articles)
    offset += limit
    if (result.length < data.articlesCount) {
      await load()
    }
  }
  return result
}
