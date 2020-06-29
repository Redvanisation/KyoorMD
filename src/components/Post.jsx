import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <h3>{post.title}</h3>
      <p>Content: {post.content}</p>
    </Link>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
