import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => (
  <div className="tag">
    {tag}
  </div>
);

Tag.defaultProps = {
  tag: 'Article tag',
};

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
