import React from "react";

const PostList = props => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>
        {post.description}
        <button onClick={() => props.deletePosts(post.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default PostList;
