import React from 'react';
import PropTypes from 'prop-types';
import RadioBox from '../RadioBox';

const CovidPage3 = ({
  userResults, setUserResults, cardPagesProgress, setCardPagesProgress,
}) => {
  const handleClick = () => {
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">What is your age range?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <RadioBox value="10-18" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="19-29" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="30-39" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="40-49" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="50-59" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="60+" userResults={userResults} setUserResults={setUserResults} />

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

CovidPage3.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage3;
