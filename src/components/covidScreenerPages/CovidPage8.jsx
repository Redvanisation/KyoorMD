import React from 'react';
import CheckBox from '../CheckBox';
import nauseaImg from '../../img/icon-nausea.svg';
import fatigueImg from '../../img/icon-bodyaches.svg';
import lostTasteImg from '../../img/icon-losttaste.svg';
import headacheImg from '../../img/icon-headache.svg';

const CovidPage8 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following conditions?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Pregnancy" />
          <CheckBox value="Severe kidney disease" />
          <CheckBox value="Chronic liver disease" />
          <CheckBox value="Severe immune system deficiencies" />
          <CheckBox value="History of organ transplant" />
          <CheckBox value="Current malignancy" />
          <CheckBox value="Extreme obesity" />
          <CheckBox value="Severe cardiovascular disease" />
          <CheckBox value="Diabetes with complications" />
          <CheckBox value="History of HIV or AIDS" />
          <CheckBox value="Asthma or chronic lung disease" />
          <CheckBox value="None" />


        </div>
      </div>
    </div>
  );
};

export default CovidPage8;
