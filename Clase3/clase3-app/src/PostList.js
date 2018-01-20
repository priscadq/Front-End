import React from "react";

const PostList = props => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>
        {post.description}{" "}
        <button onClick={() => props.deletePosts}>Delete</button>
      </li>
    ))}
  </ul>
);

export default PostList;
