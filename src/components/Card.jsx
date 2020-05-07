import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
 title1, title2, src, content,
}) => {

  return (
    <div className="column">
      <div className="card products__cards-container--card">

        <div className="card-content">
          <h3 className="title is-3 is-bold products__cards-container--title1">{title1}</h3>
          <h3 className="title is-3 is-bold">{title2}</h3>

          <div className="card-image">
            <figure className="image is-3by2">
              <img src={src} alt="vector" />
            </figure>
          </div>

          <div className="content products__cards-container--card-text">
            {content}
            <br />
          </div>
          <button type="button" className="btn products__cards-container--card-btn">Start Here</button>

        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title1: 'Card title1',
  title2: 'Card title2',
  src: 'Card image source',
  content: 'Card content text',
};

Card.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  src: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
