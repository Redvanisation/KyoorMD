import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';
import useLocalStorage from '../../hooks/useLocalStorage';

const CovidPage8 = ({
  userResults, setUserResults, cardPagesProgress, setCardPagesProgress,
}) => {
  const [symptoms, setSymptoms] = useLocalStorage('conditions', []);

  const handleClick = () => {
    setUserResults({ ...userResults, conditions: symptoms });
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following conditions?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Pregnancy" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Severe kidney disease" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Chronic liver disease" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Severe immune system deficiencies" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="History of organ transplant" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Current malignancy" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Extreme obesity" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Severe cardiovascular disease" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Diabetes with complications" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="History of HIV or AIDS" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="Asthma or chronic lung disease" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />

          <CheckBox value="None" vector={null} symptoms={symptoms} setSymptoms={setSymptoms} />


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

CovidPage8.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage8;
