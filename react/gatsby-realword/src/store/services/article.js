import { api } from "./api"

export const articleApi = api.injectEndpoints({
  endpoints: build => ({
    getArticles: build.query({
      query: params => ({
        url: "/articles",
        params,
      }),
    }),
  }),
})

export const { useGetArticlesQuery } = articleApi
