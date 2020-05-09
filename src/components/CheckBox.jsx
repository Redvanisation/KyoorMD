import React, { useRef } from 'react';
import checkboxImg from '../img/Checkbox.svg';
import checkboxCheckedImg from '../img/CheckboxChecked.svg';

const CheckBox = ({ value, vector }) => {
  const selectRef = useRef(null);
  const imgRef = useRef(null);


  const handleLabelClick = () => {
    // console.log(selectRef.current);
    if (imgRef.current.src.includes(checkboxImg)) {
      imgRef.current.src = checkboxCheckedImg;
      return;
    }

    imgRef.current.src = checkboxImg;
  };

  return (
    <div className="screener-card__completion-div--checkbox-div">
      <input type="checkbox" id={value} value={value} name="age-range" className="screener-card__completion-div--checkbox" ref={selectRef} onClick={handleLabelClick} />
      <img src={checkboxImg} alt="vector" ref={imgRef} className="screener-card__completion-div--img" />
      {
        vector
          ? <img src={vector} alt="vector" className="screener-card__completion-div--vector" />
          : null
      }
      <label htmlFor={value} className="screener-card__checkbox-text">{value}</label>
    </div>
  );
};

export default CheckBox;
