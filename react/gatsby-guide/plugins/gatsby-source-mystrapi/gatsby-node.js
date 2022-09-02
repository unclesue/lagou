const { default: axios } = require("axios")
const pluralize = require("pluralize")

async function sourceNodes(
  { actions, createContentDigest, createNodeId, getNodesByType },
  pluginOptions
) {
  const { createNode } = actions
  const { collectionTypes, apiURL } = pluginOptions

  // fetch data from strapi
  const data = await getContent(collectionTypes, apiURL)

  // loop through data and create Gatsby nodes
  for (let [key, value] of Object.entries(data)) {
    const list = value.data && value.meta ? value.data : value
    const type = `Strapi${key.toLowerCase().replace(/^[a-z]/, s => s.toUpperCase())}`
    list.forEach(item =>
      createNode({
        ...item,
        id: createNodeId(`${key}-${item.id}`),
        parent: null,
        children: [],
        internal: {
          type,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      })
    )
  }
  return
}

async function getContent(types, apiUrl) {
  let index = 0
  let result = {}
  await fetchData()
  async function fetchData() {
    if (types.length === index) return
    const { data } = await axios.get(`${apiUrl}/api/${pluralize(types[index])}`)
    result[types[index++]] = data
    await fetchData()
  }
  return result
}

module.exports = {
  sourceNodes,
}
