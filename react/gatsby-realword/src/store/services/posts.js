import { api } from "./api"

export const postsApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query({
      query: () => "posts",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Posts', id })),
        { type: 'Posts', id: 'LIST' },
      ],
      transformResponse: response => response.data
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body: {
          data: body
        },
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    getPost: build.query({
      query: (id) => `posts/${id}`,
      providesTags: (_post, _err, id) => [{ type: 'Posts', id }],
      transformResponse: response => response.data
    }),
    updatePost: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: { data: body },
        }
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE"
        };
      },
      invalidatesTags: (post) => [{ type: "Posts", id: post?.id }]
    }),
  }),
})

export const {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation
} = postsApi;
