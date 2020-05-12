/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ScreenerOption = ({
  image, text, value, name, userResults, setUserResults,
}) => {
  const optionRef = useRef(null);

  const handleRef = () => {
    if (optionRef.current.className === 'screener-option') {
      optionRef.current.children[0].checked = true;
      setUserResults({ ...userResults, [name]: optionRef.current.children[0].value });
    }
  };


  return (
    <div className="screener-option" ref={optionRef}>
      <input type="radio" value={value} id={value} name={name} className="screener-option__radio" />
      <div className="background" data-name="background" onClick={handleRef} role="radio" aria-checked="false">
        <img src={image} alt="vector" className="screener-option__img" />
        <label htmlFor={value} className="screener-option__text">{text}</label>
      </div>
    </div>
  );
};


ScreenerOption.defaultProps = {
  image: 'Screener option image',
  text: 'Screener option text',
  value: 'Screener option value',
  name: 'Screener option name',
};

ScreenerOption.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
};

export default ScreenerOption;
