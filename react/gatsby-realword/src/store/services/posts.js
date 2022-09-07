import { api } from "./api"

export const postsApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query({
      query: () => "posts",
      providesTags: ['Posts'],
      transformResponse: response => response.data
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation } = postsApi
