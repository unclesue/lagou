import { api } from './api'

export const counterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCount: build.query({
      query: () => 'count',
      providesTags: ['Counter'],
    }),
    incrementCount: build.mutation({
      query(amount) {
        return {
          url: `increment`,
          method: 'PUT',
          body: { amount },
        }
      },
      invalidatesTags: ['Counter'],
    }),
    decrementCount: build.mutation({
      query(amount) {
        return {
          url: `decrement`,
          method: 'PUT',
          body: { amount },
        }
      },
      invalidatesTags: ['Counter'],
    }),
  }),
})

export const {
  useDecrementCountMutation,
  useGetCountQuery,
  useIncrementCountMutation,
} = counterApi
