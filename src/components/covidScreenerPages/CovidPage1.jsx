import React from 'react';
import PropTypes from 'prop-types';
import pageOneImage from '../../img/img-kyoormessage-wave.svg';

const CovidPage1 = ({ cardPagesProgress, setCardPagesProgress }) => {
  const handleClick = () => {
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">
      <div className="card-image">
        <figure className="image screener-card__figure">
          <img src={pageOneImage} alt="vector" />
        </figure>
      </div>

      <h3 className="title is-3 is-bold screener-card__title">COVID-19 Screener</h3>

      <div className="content screener-card__content">
        <p className="screener-card__content--part">Answer questions on how you are feeling.</p>
        <p className="screener-card__content--part">You can take the screener as many times as you want! Come back if you start to feel different.</p>
        <div className="screener-card__completion-div">
          <h4 className="title is-6 is-bold screener-card__completion-div--title">
            How long does it take to complete?
          </h4>
          <p className="screener-card__completion-div--time green-text">3 Min</p>
          <p className="screener-card__completion-div--time-text">Avg. Time</p>

        </div>
      </div>
      <button
        type="button"
        className="btn screener-card__btn"
        onClick={() => handleClick()}
      >
        {cardPagesProgress === 1 ? 'Get Started' : 'Next Page'}
      </button>
    </div>
  );
};

CovidPage1.propTypes = {
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage1;
