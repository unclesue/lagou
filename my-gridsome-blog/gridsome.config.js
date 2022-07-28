// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // strapi v3 used
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`post`, 'tag'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      },
    },
    // strapi v4 used
    // {
    //   use: "@gridsome/source-graphql",
    //   options: {
    //     url: "http://localhost:1337/graphql",
    //     fieldName: "strapi",
    //     typeName: "strapiTypes",
    //   },
    // },
  ],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue' 
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue' 
      }
    ]
  }
}
