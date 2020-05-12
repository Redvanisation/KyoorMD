/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import backArrowSvg from '../img/icon-backarrow.svg';

import CovidPage1 from '../components/covidScreenerPages/CovidPage1';
import CovidPage2 from '../components/covidScreenerPages/CovidPage2';
import CovidPage3 from '../components/covidScreenerPages/CovidPage3';
import CovidPage4 from '../components/covidScreenerPages/CovidPage4';
import CovidPage5 from '../components/covidScreenerPages/CovidPage5';
import CovidPage6 from '../components/covidScreenerPages/CovidPage6';
import CovidPage7 from '../components/covidScreenerPages/CovidPage7';
import CovidPage8 from '../components/covidScreenerPages/CovidPage8';
import CovidPage9 from '../components/covidScreenerPages/CovidPage9';

const ScreenerCard = () => {
  const [cardPagesProgress, setCardPagesProgress] = useLocalStorage('Card Pages Progress', 1);
  const [userResults, setUserResults] = useLocalStorage('User Results', {
    age: '',
    care: '',
    symptoms1: [],
    highRisk: '',
    symptoms2: [],
    conditions: [],
  });
  // const [pageResults, setPageResults] = useState(null);


  // const confirmPage = () => {
  //   setUserResults([...userResults, pageResults]);
  //   setCardPagesProgress((prev) => prev + 1);
  // };

  // console.log({pageResults});


  const setCardPages = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <CovidPage1 />;

      case 2:
        return <CovidPage2 />;

      case 3:
        return <CovidPage3 userResults={userResults} setUserResults={setUserResults} />;

      case 4:
        return <CovidPage4 userResults={userResults} setUserResults={setUserResults} />;

      case 5:
        return <CovidPage5 userResults={userResults} setUserResults={setUserResults} />;

      case 6:
        return <CovidPage6 userResults={userResults} setUserResults={setUserResults} />;

      case 7:
        return <CovidPage7 userResults={userResults} setUserResults={setUserResults} />;

      case 8:
        return <CovidPage8 userResults={userResults} setUserResults={setUserResults} />;

      case 9:
        return <CovidPage9 userResults={userResults} setUserResults={setUserResults} />;

      case 10:
        return (
          <div>
            Results Page
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
          <button type="button" className="screener-card__nav-div--item" onClick={() => setCardPagesProgress((prev) => (prev > 1 ? prev - 1 : 1))}>
            <img src={backArrowSvg} alt="vector" className="screener-card__nav-div--item-icon" />
            Back
          </button>
          <Link to="/" className="screener-card__nav-div--item">Cancel</Link>
        </div>
        {setCardPages(cardPagesProgress)}
        <button type="button" className="btn screener-card__btn" onClick={() => setCardPagesProgress((prev) => prev + 1)}>{cardPagesProgress === 1 ? 'Get Started' : 'Next Page'}</button>
      </div>
    </div>
  );
};

export default ScreenerCard;
