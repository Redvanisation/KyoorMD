import React from 'react';
import PropTypes from 'prop-types';
import ScreenerOption from '../ScreenerOption';
import optionYesImg from '../../img/icon-checkcircle.svg';
import optionNoImg from '../../img/icon-Xcircle.svg';

const CovidPage4 = ({ userResults, setUserResults }) => {
  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Live with or take care of someone with COVID-19?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <ScreenerOption image={optionYesImg} text="Yes, I do." value="yes" name="care" userResults={userResults} setUserResults={setUserResults} />
          <ScreenerOption image={optionNoImg} text="No, I don't." value="no" name="care" userResults={userResults} setUserResults={setUserResults} />
        </div>
      </div>
    </div>
  );
};

CovidPage4.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage4;
