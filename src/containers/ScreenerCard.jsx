/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import backArrowSvg from '../img/icon-backarrow.svg';
import pageOneImage from '../img/img-kyoormessage-wave.svg';
import pageTwoImage from '../img/img-kyoormessage-stop.svg';
import checkboxImg from '../img/Checkbox.svg';
import checkboxCheckedImg from '../img/CheckboxChecked.svg';
import optionYesImg from '../img/icon-checkcircle.svg';
import optionNoImg from '../img/icon-Xcircle.svg';
import ScreenerOption from '../components/ScreenerOption';

const ScreenerCard = () => {

  const [cardPagesProgress, setCardPagesProgress] = useLocalStorage('Card Pages Progress', 4);

  const handleLabelClick = (e) => {
    const img = e.target.parentNode.getElementsByTagName('img')[0];
    const radio = e.target.parentNode.getElementsByTagName('input')[0];
    if (radio.checked) {
      img.src = checkboxCheckedImg;
      // console.log(e.target.value)
    }
  };

  const changeImg = (e) => {
    const img = e.target.parentNode.getElementsByTagName('img')[0];
    img.src = checkboxImg;
  };

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

            <h3 className="title is-3 is-bold screener-card__title">What is your age range?</h3>
            <div className="content screener-card__content">
              <p className="screener-card__content--description">Select one</p>
              <div className="screener-card__completion-div">
                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="10-18" value="10-18" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="10-18">10-18</label>
                </div>

                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="19-29" value="19-29" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="19-29">19-29</label>
                </div>

                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="30-39" value="30-39" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="30-39">30-39</label>
                </div>

                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="40-49" value="40-49" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="40-49">40-49</label>
                </div>

                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="50-59" value="50-59" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="50-59">50-59</label>
                </div>

                <div className="screener-card__completion-div--checkbox-div">
                  <input type="radio" id="60+" value="60+" name="age-range" className="screener-card__completion-div--checkbox" onChange={(e) => handleLabelClick(e)} onBlur={(e) => changeImg(e)} />
                  <img src={checkboxImg} alt="vector" className="screener-card__completion-div--img" />
                  <label htmlFor="60+">60+</label>
                </div>

              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="card-content">

            <h3 className="title is-3 is-bold screener-card__title">Live with or take care of someone with COVID-19?</h3>
            <div className="content screener-card__content">
              <p className="screener-card__content--description">Select one</p>
              <div className="screener-card__completion-div">
                <ScreenerOption image={optionYesImg} text="Yes, I live with or take care of someone with COVID-19." value="yes" name="option-choice" />
                <ScreenerOption image={optionNoImg} text="No, I don't." value="no" name="option-choice" />
              </div>
            </div>
          </div>
        );


      // NEW CODE GOES HERE

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
