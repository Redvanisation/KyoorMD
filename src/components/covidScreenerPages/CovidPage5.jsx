import React from 'react';
import CheckBox from '../CheckBox';
import feverImg from '../../img/icon-fever.svg';
import dryCoughImg from '../../img/icon-coughing.svg';
import soreThroatImg from '../../img/icon-sorethroat.svg';
import chestPainImg from '../../img/icon-chestpain.svg';

const CovidPage5 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Do you have any of the following symptoms?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select all that apply</p>
        <div className="screener-card__completion-div">
          {/* <div className="screener-card__completion-div--checkbox-div">
            <input type="checkbox" id="10-18" value="10-18" name="age-range" className="screener-card__completion-div--checkbox" ref={selectRef} onClick={() => handleLabelClick()} onBlur={boo} />
            <img src={checkboxImg} alt="vector" ref={imgRef} className="screener-card__completion-div--img" />
            <label htmlFor="10-18">10-18</label>
          </div> */}

          <CheckBox value="Fever, chills, or sweets" vector={feverImg} />
          <CheckBox value="New dry persistent cough or worsening cough" vector={dryCoughImg} />
          <CheckBox value="Cough with sputum & sore throat" vector={soreThroatImg} />
          <CheckBox value="Shortness of breath or tight chest" vector={chestPainImg} />

          {/* <div className="screener-card__completion-div--checkbox-div">
            <input type="checkbox" id="19-29" value="19-29" name="age-range" className="screener-card__completion-div--checkbox"  onClick={(e) => handleLabelClick(e)} />
            <img src={checkboxImg} alt="vector2" className="screener-card__completion-div--img" />
            <label htmlFor="19-29">19-29</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="checkbox" id="30-39" value="30-39" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="30-39">30-39</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="checkbox" id="40-49" value="40-49" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)}  />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="40-49">40-49</label>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default CovidPage5;
