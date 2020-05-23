import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';
import feverImg from '../../img/icon-fever.svg';
import dryCoughImg from '../../img/icon-coughing.svg';
import soreThroatImg from '../../img/icon-sorethroat.svg';
import chestPainImg from '../../img/icon-chestpain.svg';

const CovidPage5 = ({
  userResults, setUserResults, cardPagesProgress, setCardPagesProgress,
}) => {
  const [symptoms, setSymptoms] = useState([]);

  const handleClick = () => {
    setUserResults({ ...userResults, symptoms1: symptoms });
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following symptoms?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Fever, chills, or sweets" vector={feverImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="New dry persistent cough or worsening cough" vector={dryCoughImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="Cough with sputum & sore throat" vector={soreThroatImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="Shortness of breath or tight chest" vector={chestPainImg} symptoms={symptoms} setSymptoms={setSymptoms} />
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

CovidPage5.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage5;
