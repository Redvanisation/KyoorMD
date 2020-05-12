import React from 'react';
import PropTypes from 'prop-types';
import ScreenerOption from '../ScreenerOption';
import optionYesImg from '../../img/icon-checkcircle.svg';
import optionNoImg from '../../img/icon-Xcircle.svg';
import unsureImg from '../../img/icon-unsure.svg';


const CovidPage6 = ({ userResults, setUserResults }) => {
  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Traveled to or live in a high-risk zone?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">

          <ScreenerOption image={optionYesImg} text="I have traveled to a high-risk zone." value="yes" name="high-risk" userResults={userResults} setUserResults={setUserResults} />

          <ScreenerOption image={optionYesImg} text="I live in a high-risk zone." value="yes" name="high-risk" userResults={userResults} setUserResults={setUserResults} />

          <ScreenerOption image={optionNoImg} text="I haven't traveled or live in a high-risk zone." value="no" name="high-risk" userResults={userResults} setUserResults={setUserResults} />

          <ScreenerOption image={unsureImg} text="I am not sure." value="unsure" name="high-risk" userResults={userResults} setUserResults={setUserResults} />

        </div>
      </div>
    </div>
  );
};

CovidPage6.propTypes = {
  userResults: PropTypes.instanceOf(Object).isRequired,
  setUserResults: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage6;
