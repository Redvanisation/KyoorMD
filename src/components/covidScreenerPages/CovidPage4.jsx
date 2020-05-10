import React from 'react';
import ScreenerOption from '../ScreenerOption';
import optionYesImg from '../../img/icon-checkcircle.svg';
import optionNoImg from '../../img/icon-Xcircle.svg';

const CovidPage4 = () => {
  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Live with or take care of someone with COVID-19?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <ScreenerOption image={optionYesImg} text="Yes, I do." value="yes" name="option-choice" />
          <ScreenerOption image={optionNoImg} text="No, I don't." value="no" name="option-choice" />
        </div>
      </div>
    </div>
  );
};

export default CovidPage4;
