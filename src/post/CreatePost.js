import React, { useState } from "react";

export const CreatePost = ({ user, posts, dispatch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function _onChange(attr, value) {
    attr(value);
  }

  function _onSubmit() {
    dispatch({ type: "CREATE_POST", title, content, author: user });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        _onSubmit();
      }}
    >
      <div>
        Authro: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => _onChange(setTitle, e.target.value)}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea
        value={content}
        onChange={(e) => _onChange(setContent, e.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
};
