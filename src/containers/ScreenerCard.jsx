import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import backArrowSvg from '../img/icon-backarrow.svg';
import pageOneImage from '../img/img-kyoormessage-wave.svg';

const ScreenerCard = () => {

  const [cardPagesProgress, setCardPagesProgress] = useLocalStorage('Card Pages Progress', 1);

  const setCardPages = (something) => {
    switch (something) {
      case 1:
        return (
          <div className="card-content">
            <div className="card-image">
              <figure className="image screener-card__figure">
                <img src={pageOneImage} alt="vector" />
              </figure>
            </div>

            <h3 className="title is-3 is-bold screener-card__title">COVID-19 Screener</h3>

            <div className="content screener-card__content">
              <p className="screener-card__content--part">Answer questions on how you are feeling.</p>
              <p className="screener-card__content--part">You can take the screener as many times as you want! Come back if you start to feel different.</p>
              <div className="screener-card__completion-div">
                <h4 className="title is-6 is-bold screener-card__completion-div--title">
                  How long does it take to complete?
                </h4>
                <p className="screener-card__completion-div--time">3 Min</p>
                <p className="screener-card__completion-div--time-text">Avg. Time</p>

              </div>
            </div>
            <button type="button" className="btn screener-card__btn">Get Started</button>
          </div>
        );

      default:
        console.log('default');
    }
  };


  return (
    <div className="has-text-centered">
      <div className="card cardis-centered is-half screener-card">
        <div className="screener-card__nav-div">
          <button type="button" className="screener-card__nav-div--item">
            <img src={backArrowSvg} alt="vector" className="screener-card__nav-div--item-icon" />
            Back
          </button>
          <Link to="/" className="screener-card__nav-div--item">Cancel</Link>
        </div>
        {/* Start */}
        {setCardPages(1)}
        {/* End */}
      </div>
    </div>
  );
};

export default ScreenerCard;
