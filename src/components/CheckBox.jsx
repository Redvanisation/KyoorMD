/* eslint-disable no-unused-expressions */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import checkboxImg from '../img/Checkbox.svg';
import checkboxCheckedImg from '../img/CheckboxChecked.svg';

const CheckBox = ({
  value, vector, symptoms, setSymptoms,
}) => {
  const selectRef = useRef(null);
  const imgRef = useRef(null);


  const handleLabelClick = () => {
    if (imgRef.current.src.includes(checkboxImg)) {
      imgRef.current.src = checkboxCheckedImg;

      if (symptoms.indexOf(selectRef.current.value) === -1) {
        setSymptoms((prev) => [...prev, selectRef.current.value]);
      }
      return;
    }

    imgRef.current.src = checkboxImg;

    setSymptoms(symptoms.filter((elem) => elem !== selectRef.current.value));

    console.log(symptoms);
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

CheckBox.defaultProps = {
  value: 'Value',
  vector: 'Vector image',
};

CheckBox.propTypes = {
  value: PropTypes.string,
  vector: PropTypes.string,
  symptoms: PropTypes.instanceOf(Array).isRequired,
  setSymptoms: PropTypes.instanceOf(Function).isRequired,
};

export default CheckBox;
