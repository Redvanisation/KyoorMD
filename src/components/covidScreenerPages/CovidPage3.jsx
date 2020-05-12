import React from 'react';
import RadioBox from '../RadioBox';

const CovidPage3 = ({ userResults, setUserResults }) => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">What is your age range?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <RadioBox value="10-18" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="19-29" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="30-39" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="40-49" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="50-59" userResults={userResults} setUserResults={setUserResults} />
          <RadioBox value="60+" userResults={userResults} setUserResults={setUserResults} />

        </div>
      </div>
    </div>
  );
};

export default CovidPage3;
