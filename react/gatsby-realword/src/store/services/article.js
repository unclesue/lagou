import { api } from "./api"

export const articleApi = api.injectEndpoints({
  endpoints: build => ({
    getArticles: build.query({
      query: params => ({
        url: "/articles",
        params,
      }),
    }),
    getArticle: build.query({
      query: slug => ({
        url: `/articles/${slug}`
      }),
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleQuery } = articleApi
