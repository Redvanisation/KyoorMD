import React from 'react';
import ScreenerOption from '../ScreenerOption';
import optionYesImg from '../../img/icon-checkcircle.svg';
import optionNoImg from '../../img/icon-Xcircle.svg';
import unsureImg from '../../img/icon-unsure.svg';


const CovidPage6 = () => {
  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Traveled to or live in a high-risk zone?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <ScreenerOption image={optionYesImg} text="I have traveled to a high-risk zone." value="yes" name="option-choice" />
          <ScreenerOption image={optionYesImg} text="I live in a high-risk zone." value="yes" name="option-choice" />
          <ScreenerOption image={optionNoImg} text="I haven't traveled or live in a high-risk zone." value="yes" name="option-choice" />
          <ScreenerOption image={unsureImg} text="I am not sure." value="yes" name="option-choice" />

        </div>
      </div>
    </div>
  );
};

export default CovidPage6;
