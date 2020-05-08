import React from 'react';
import img from '../img/icon-checkcircle.svg';

const ScreenerOption = () => {
  return (
    <div className="screener-option">
      <img src={img} alt="vector" className="screener-option__img" />
      <input type="checkbox" id="option-choice" hidden />
      <label htmlFor="option-choice" className="screener-option__text">lorem ipsum</label>
    </div>
  );
};

export default ScreenerOption;
