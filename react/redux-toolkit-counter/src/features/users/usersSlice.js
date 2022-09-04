import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../app/request";

const initialState = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
  const response = await request.get("/users");
  return response.data;
});

export default userSlice.reducer;

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === Number(userId));
