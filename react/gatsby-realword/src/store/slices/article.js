import { createSlice } from "@reduxjs/toolkit"
import { articleApi } from "../services/article"

const slice = createSlice({
  name: "article",
  initialState: {},
  extraReducers: builder => {
    builder.addMatcher(
      articleApi.endpoints.getArticles.matchFulfilled,
      (state, action) => {
        state.articles = action.payload.articles
      }
    )
  },
})

export default slice.reducer
