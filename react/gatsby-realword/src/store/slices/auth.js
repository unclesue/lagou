import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { authApi } from "../services/auth"

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        console.log("pending", action)
      })
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchFulfilled,
          authApi.endpoints.getUser.matchFulfilled
        ),
        (state, action) => {
          state.user = action.payload.user
          state.token = action.payload.user.token
          localStorage.setItem("token", state.token)
        }
      )
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        console.log("rejected", action)
      })
  },
})

export const { logout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = state => state.auth.isAuthenticated
