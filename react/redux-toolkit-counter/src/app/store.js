import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../features/posts/postSlice"
import usersReducer from "../features/users/usersSlice"
import notificationsReducer from "../features/notifications/notificationsSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  }
})
