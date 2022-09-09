import { api } from "./api"

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: credentials => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: build.query({
      query: () => "/user",
    }),
  }),
})

export const { useLoginMutation, useGetUserQuery } = authApi
