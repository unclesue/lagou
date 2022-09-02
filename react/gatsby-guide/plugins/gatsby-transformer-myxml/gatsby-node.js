const parseString = require("xml2js").parseString
const { promisify } = require("util")
const parse = promisify(parseString)

async function onCreateNode({
  actions,
  node,
  loadNodeContent,
  createContentDigest,
  createNodeId
}) {
  const { createNode, createParentChildLink } = actions
  // only log for nodes of mediaType `text/yaml`
  if (node.internal.mediaType !== `application/xml`) {
    return
  }

  const content = await loadNodeContent(node)
  const parsedContent = await parse(content, {
    explicitRoot: false,
    explicitArray: false,
  })

  const key = "dog"
  const type = `Xml${key.toLowerCase().replace(/^[a-z]/, s => s.toUpperCase())}`
  const xmlNode = {
    ...parsedContent,
    id: createNodeId(`${key}`),
    parent: node.id,
    children: [],
    internal: {
      type,
      content: JSON.stringify(parsedContent),
      contentDigest: createContentDigest(parsedContent),
    },
  }
  createNode(xmlNode)
  createParentChildLink({ parent: node, child: xmlNode })
  return
}

module.exports = {
  onCreateNode,
}
