import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, src, content }) => {

  return (
    <div className="column">
      <div className="card products__cards-container--card">

        <div className="card-content">
          <h3 className="title is-3 is-bold">{title}</h3>

          <div className="card-image">
            <figure className="image is-3by2">
              <img src={src} alt="vector" />
            </figure>
          </div>

          <div className="content products__cards-container--card-text">
            {content}
            <br />
            <button type="button" className="btn products__cards-container--card-btn">Start Here</button>
          </div>

        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.array,
  src: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
