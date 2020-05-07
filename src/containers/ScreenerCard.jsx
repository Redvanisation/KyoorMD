import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import backArrowSvg from '../img/icon-backarrow.svg';
import pageOneImage from '../img/img-kyoormessage-wave.svg';
import pageTwoImage from '../img/img-kyoormessage-stop.svg';

const ScreenerCard = () => {

  const [cardPagesProgress, setCardPagesProgress] = useLocalStorage('Card Pages Progress', 3);

  const setCardPages = (pageNumber) => {
    switch (pageNumber) {
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
                <p className="screener-card__completion-div--time green-text">3 Min</p>
                <p className="screener-card__completion-div--time-text">Avg. Time</p>

              </div>
            </div>
          </div>
        );

      case 2:
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
          </div>
        );

      case 3:
        return (
          <div className="card-content">

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
        {setCardPages(cardPagesProgress)}
        {/* End */}
        <button type="button" className="btn screener-card__btn">{cardPagesProgress === 1 ? 'Get Started' : 'Next Page'}</button>
      </div>
    </div>
  );
};

export default ScreenerCard;
