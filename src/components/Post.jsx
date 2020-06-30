import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`} className="post__link">
        {/* <img src="post__link--img" alt="article" /> */}
        <h3 className="title is-4 post__link--title">{post.title}</h3>
        <p className="post__link--content">{post.content}</p>
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
