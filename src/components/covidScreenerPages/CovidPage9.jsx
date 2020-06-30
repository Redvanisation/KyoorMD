import React from 'react';

const CovidPage9 = () => {

  return (
    <div className="card-content">

      <h3 className="title is-3 is-bold screener-card__title">Providing a location can helps us find available information for you.</h3>
      <div className="content screener-card__content">
        <p className="screener-card__content--description">Optional</p>
        <div className="screener-card__completion-div">

          <select name="country" className="select">
            <option value="United States">- Select Country -</option>
          </select>
          <br />
          <br />
          <select name="country" className="select">
            <option value="New York">- State -</option>
          </select>
          <br />
          <br />
          <input type="number" className="input" placeholder="Zip Code" />

        </div>
      </div>
    </div>
  );
};

export default CovidPage9;
