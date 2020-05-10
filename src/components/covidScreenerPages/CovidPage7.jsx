import React from 'react';
import CheckBox from '../CheckBox';
import nauseaImg from '../../img/icon-nausea.svg';
import fatigueImg from '../../img/icon-bodyaches.svg';
import lostTasteImg from '../../img/icon-losttaste.svg';
import headacheImg from '../../img/icon-headache.svg';

const CovidPage7 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following symptoms?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Nausea, vomiting, or diarrhaea" vector={nauseaImg} />
          <CheckBox value="Fatigue, muscle pain, or body aches" vector={fatigueImg} />
          <CheckBox value="Loss of taste and smell" vector={lostTasteImg} />
          <CheckBox value="Headaches" vector={headacheImg} />


        </div>
      </div>
    </div>
  );
};

export default CovidPage7;
