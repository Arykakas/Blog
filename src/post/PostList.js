import React from "react";
import Post from "./Post";

const PostList = ({ posts = [] }) => {
  console.log(posts);
  return (
    <React.Fragment>
      <div>
        {posts.map((p, i) => (
          <React.Fragment key={"post-" + i}>
            <Post {...p} />
            <hr />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PostList;
