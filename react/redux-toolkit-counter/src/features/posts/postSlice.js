import { sub } from "date-fns";
import request from "../../app/request";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

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
    update(state, action) {
      const { id, title, content } = action.payload;
      const post = state.items.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
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
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push({
          ...action.payload,
          date: new Date().toISOString(),
          user: Number(action.payload.userId)
        });
      });
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await request.get("/posts");
  return response.data.map((item) => ({
    ...item,
    content: item.body,
    date: sub(new Date(), {
      minutes: Math.ceil(Math.random() * 10),
    }).toISOString(),
    user: Math.ceil(Math.random() * 10),
  }));
});

export const createPost = createAsyncThunk("posts/create", async (data) => {
  const response = await request.post("/posts", {
    ...data,
    body: data.content,
    user: data.userId,
  });
  return response.data;
});

export const { update } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.items;

export const selectPostById = (state, postId) =>
  state.posts.items.find((post) => post.id === Number(postId));
