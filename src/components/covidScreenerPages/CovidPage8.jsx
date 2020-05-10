import React from 'react';
import CheckBox from '../CheckBox';

const CovidPage8 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following conditions?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">

          <CheckBox value="Pregnancy" vector={null} />
          <CheckBox value="Severe kidney disease" vector={null} />
          <CheckBox value="Chronic liver disease" vector={null} />
          <CheckBox value="Severe immune system deficiencies" vector={null} />
          <CheckBox value="History of organ transplant" vector={null} />
          <CheckBox value="Current malignancy" vector={null} />
          <CheckBox value="Extreme obesity" vector={null} />
          <CheckBox value="Severe cardiovascular disease" vector={null} />
          <CheckBox value="Diabetes with complications" vector={null} />
          <CheckBox value="History of HIV or AIDS" vector={null} />
          <CheckBox value="Asthma or chronic lung disease" vector={null} />
          <CheckBox value="None" vector={null} />


        </div>
      </div>
    </div>
  );
};

export default CovidPage8;
