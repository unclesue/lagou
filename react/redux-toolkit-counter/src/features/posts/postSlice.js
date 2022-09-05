import { client } from "../../api/client";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} = require("@reduxjs/toolkit");

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

// const initialState = {
//   items: [],
//   status: "idle",
//   error: null,
// };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // create(state, action) {
    //   state.push(action.payload)
    // },
    // create: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(title, content, userId) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         date: new Date().toISOString(),
    //         title,
    //         content,
    //         user: userId,
    //       },
    //     };
    //   },
    // },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      // const post = state.items.find((post) => post.id === id);
      const post = state.entities[id];
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // const existingPost = state.items.find(post => post.id === postId)
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.items = state.items.concat(action.payload);
        // 传action和action.payload貌似都可以
        postsAdapter.upsertMany(state, action);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, postsAdapter.addOne);
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});

export const addNewPost = createAsyncThunk("posts/create", async (data) => {
  const response = await client.post("/fakeApi/posts", data);
  return response.data;
});

export const { postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

// export const selectAllPosts = (state) => state.posts.items;

// export const selectPostById = (state, postId) =>
//   state.posts.items.find((post) => post.id === postId);

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId)
);
