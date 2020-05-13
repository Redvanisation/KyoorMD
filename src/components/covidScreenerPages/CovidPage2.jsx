import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pageTwoImage from '../../img/img-kyoormessage-stop.svg';

const CovidPage2 = ({ cardPagesProgress, setCardPagesProgress }) => {
  const handleClick = () => {
    setCardPagesProgress((prev) => prev + 1);
  };

  return (
    <div className="card-content">
      <div className="card-image">
        <figure className="image screener-card__figure">
          <img src={pageTwoImage} alt="vector" />
        </figure>
      </div>

      <h3 className="title is-3 is-bold screener-card__title">If This is An Emergency!</h3>

      <div className="content screener-card__content">
        <p className="screener-card__content--part">
          Please stop if this an emergency,&nbsp;
          <span className="pink-text">call 911/112</span>
          &nbsp;if you are experiencing:
        </p>
        <div className="screener-card__completion-div">
          <ul className="screener-card__completion-div--ul">
            <li className="screener-card__completion-div--li">Persistent and severe chest pain</li>
            <li className="screener-card__completion-div--li">Extremely difficult breathing</li>
            <li className="screener-card__completion-div--li">Losing consciousness</li>
            <li className="screener-card__completion-div--li">Disorientation and/or confusion</li>
          </ul>
          <p className="screener-card__completion-div--text">
            This screening can&apos;t diagnose on its own, health professionals need more information to make the right diagnosis.
            &nbsp;
            <Link to="/" className="green-text">Legal</Link>
            &nbsp;
            Your provided information is anonymous view
            &nbsp;
            <Link to="/" className="green-text">Privacy Policy.</Link>
          </p>
        </div>
      </div>
      <button
        type="button"
        className="btn screener-card__btn"
        onClick={() => handleClick()}
      >
        {cardPagesProgress === 1 ? 'Get Started' : 'Next Page'}
      </button>
    </div>
  );
};

CovidPage2.propTypes = {
  cardPagesProgress: PropTypes.instanceOf(Number).isRequired,
  setCardPagesProgress: PropTypes.instanceOf(Function).isRequired,
};

export default CovidPage2;
