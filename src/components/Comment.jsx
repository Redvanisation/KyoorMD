import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParserfrom from 'react-html-parser';
import Moment from 'react-moment';


const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__author">
        <img className="comment__author--img" src={comment.gravatar} alt="user" />
        <h4 className="comment__author--name">{comment.username}</h4>
        <Moment className="comment__author--time" format="MM-DD-YYYY LT">{comment.comment_created}</Moment>
      </div>
      <div className="comment__details">
        <div className="comment__details--text">{ReactHtmlParserfrom(comment.body)}</div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
};

export default Comment;
