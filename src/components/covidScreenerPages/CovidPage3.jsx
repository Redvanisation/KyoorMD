import React from 'react';
import RadioBox from '../RadioBox';

const CovidPage3 = ({ setPageResults }) => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">What is your age range?</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Select one</p>
        <div className="screener-card__completion-div">
          <RadioBox value="10-18" setPageResults={setPageResults} />
          <RadioBox value="19-29" setPageResults={setPageResults} />
          <RadioBox value="30-39" setPageResults={setPageResults} />
          <RadioBox value="40-49" setPageResults={setPageResults} />
          <RadioBox value="50-59" setPageResults={setPageResults} />
          <RadioBox value="60+" setPageResults={setPageResults} />

        </div>
      </div>
    </div>
  );
};

export default CovidPage3;
