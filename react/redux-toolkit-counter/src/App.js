import React from "react";
import { Counter } from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/navbar";
import SinglePostPage from "./features/posts/SinglePostPage";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import { UsersList } from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/posts" element={<PostsList />}>
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path=":postId/edit" element={<EditPostForm />} />
            <Route path="add" element={<AddPostForm />} />
          </Route>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
