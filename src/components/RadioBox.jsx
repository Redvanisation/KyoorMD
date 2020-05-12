/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import checkboxImg from '../img/Checkbox.svg';
import checkboxCheckedImg from '../img/CheckboxChecked.svg';

const RadioBox = ({ value, userResults, setUserResults }) => {
  const selectRef = useRef(null);
  const imgRef = useRef(null);


  const handleLabelClick = () => {
    if (selectRef.current.checked) {
      imgRef.current.src = checkboxCheckedImg;
      setUserResults({ age: selectRef.current.value });
    }
  };

  const revertImg = () => {
    imgRef.current.src = checkboxImg;
  };

  return (
    <div className="screener-card__completion-div--checkbox-div" onClick={handleLabelClick}>
      <input type="radio" id={value} value={value} name="age-range" className="screener-card__completion-div--checkbox" ref={selectRef} onBlur={revertImg} />
      <img src={checkboxImg} alt="vector" ref={imgRef} className="screener-card__completion-div--img" />
      <label htmlFor={value} className="screener-card__checkbox-text">{value}</label>
    </div>
  );
};

RadioBox.defaultProps = {
  value: 'Value',
};

RadioBox.propTypes = {
  value: PropTypes.string,
};

export default RadioBox;
