import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';
import nauseaImg from '../../img/icon-nausea.svg';
import fatigueImg from '../../img/icon-bodyaches.svg';
import lostTasteImg from '../../img/icon-losttaste.svg';
import headacheImg from '../../img/icon-headache.svg';
import useLocalStorage from '../../hooks/useLocalStorage';

const CovidPage7 = ({
  userResults, setUserResults, cardPagesProgress, setCardPagesProgress,
}) => {
  const [symptoms, setSymptoms] = useLocalStorage('symptoms2', []);

  const handleClick = () => {
    setUserResults({ ...userResults, symptoms2: symptoms });
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following symptoms?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Nausea, vomiting, or diarrhaea" vector={nauseaImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="Fatigue, muscle pain, or body aches" vector={fatigueImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="Loss of taste and smell" vector={lostTasteImg} symptoms={symptoms} setSymptoms={setSymptoms} />
          <CheckBox value="Headaches" vector={headacheImg} symptoms={symptoms} setSymptoms={setSymptoms} />

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

CovidPage7.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage7;
