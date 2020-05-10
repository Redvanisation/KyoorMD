import React from 'react';
import RadioBox from '../RadioBox';

const CovidPage3 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">What is your age range?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <RadioBox value="10-18" />
          <RadioBox value="19-29" />
          <RadioBox value="30-39" />
          <RadioBox value="40-49" />
          <RadioBox value="50-59" />
          <RadioBox value="60+" />

          {/* <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="10-18" value="10-18" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="10-18">10-18</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="19-29" value="19-29" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="19-29">19-29</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="30-39" value="30-39" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="30-39">30-39</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="40-49" value="40-49" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="40-49">40-49</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="50-59" value="50-59" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="50-59">50-59</label>
          </div>

          <div className="screener-card__completion-div--checkbox-div">
            <input type="radio" id="60+" value="60+" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
            <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
            <label htmlFor="60+">60+</label>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default CovidPage3;
