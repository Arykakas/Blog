import React, { useEffect, useState, useReducer } from "react";
import "./App.css";
import { CreatePost } from "./post/CreatePost";
import PostList from "./post/PostList";
import appReducer from "./reducer";
import UserBar from "./user/UserBar";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = user + "- React Hooks";
    } else {
      document.title = "React Hooks";
    }
  }, [user]);

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
