import React from 'react';

const PostList = (props) => (
  <ul>
    {
      props.posts.map(post =>
        <li key={post.id}>
          {post.description}
          <button onClick={() => props.editPost(post.id)}>Edit</button> 
          <button onClick={() => props.deletePost(post.id)}>Delete</button> 
        </li>
      )
    }
  </ul>
);

export default PostList;